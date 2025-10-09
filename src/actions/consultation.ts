'use server';

import { createClient } from '@/lib/supabase/server';
import { ConsultationBooking, DatabaseResponse } from '@/lib/types';
import { sendConsultationBookingNotificationToAdmin } from '@/lib/email';

export interface CreateConsultationBookingData {
  client_name: string;
  client_email: string;
  client_phone?: string;
  company?: string;
  message: string;
  consultation_date: string;
  consultation_time: string;
}

export async function createConsultationBookingAction(
  bookingData: CreateConsultationBookingData
): Promise<DatabaseResponse<ConsultationBooking>> {
  try {
    const supabase = await createClient();

    const consultationDate = new Date(bookingData.consultation_date);
    const dayOfWeek = consultationDate.getDay();
    const allowedDays = [4, 5, 6, 0];

    if (!allowedDays.includes(dayOfWeek)) {
      return {
        success: false,
        error:
          'Consultations are only available on Thursday, Friday, Saturday, and Sunday.',
      };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (consultationDate < today) {
      return {
        success: false,
        error: 'Cannot book consultations for past dates.',
      };
    }

    const consultationDateTime = new Date(
      `${bookingData.consultation_date}T${bookingData.consultation_time}`
    );

    const { data: conflicts, error: conflictError } = await supabase
      .from('consultation_bookings')
      .select('id')
      .eq('consultation_date', bookingData.consultation_date)
      .eq('consultation_time', bookingData.consultation_time)
      .in('status', ['pending', 'confirmed']);

    if (conflictError) {
      return {
        success: false,
        error: 'Error checking for booking conflicts.',
      };
    }

    if (conflicts && conflicts.length > 0) {
      return {
        success: false,
        error:
          'This time slot is already booked. Please choose a different time.',
      };
    }

    const { data, error } = await supabase
      .from('consultation_bookings')
      .insert({
        client_name: bookingData.client_name,
        client_email: bookingData.client_email,
        client_phone: bookingData.client_phone,
        company: bookingData.company,
        message: bookingData.message,
        consultation_date: bookingData.consultation_date,
        consultation_time: bookingData.consultation_time,
        consultation_datetime: consultationDateTime.toISOString(),
        duration_minutes: 30,
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    try {
      await sendConsultationBookingNotificationToAdmin(data);
    } catch (emailError) {
      console.error('Failed to send admin notification email:', emailError);
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

export async function getAvailableTimeSlotsAction(
  date: string
): Promise<DatabaseResponse<string[]>> {
  try {
    const consultationDate = new Date(date);
    const dayOfWeek = consultationDate.getDay();
    const allowedDays = [4, 5, 6, 0];

    if (!allowedDays.includes(dayOfWeek)) {
      return {
        success: false,
        error:
          'Consultations are only available on Thursday, Friday, Saturday, and Sunday.',
      };
    }

    const supabase = await createClient();

    const { data: bookedSlots, error } = await supabase
      .from('consultation_bookings')
      .select('consultation_time')
      .eq('consultation_date', date)
      .in('status', ['pending', 'confirmed']);

    if (error) {
      return { success: false, error: error.message };
    }

    const allTimeSlots = [
      '09:00:00',
      '09:30:00',
      '10:00:00',
      '10:30:00',
      '11:00:00',
      '11:30:00',
      '12:00:00',
      '12:30:00',
      '13:00:00',
      '13:30:00',
      '14:00:00',
      '14:30:00',
      '15:00:00',
      '15:30:00',
      '16:00:00',
      '16:30:00',
      '17:00:00',
    ];

    const bookedTimes =
      bookedSlots?.map((slot) => slot.consultation_time) || [];
    const availableSlots = allTimeSlots.filter(
      (slot) => !bookedTimes.includes(slot)
    );

    return {
      success: true,
      data: availableSlots,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}
