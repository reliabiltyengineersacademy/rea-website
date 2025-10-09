'use client';

import { toast } from 'sonner';
import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Loader2 } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  createConsultationBookingAction,
  getAvailableTimeSlotsAction,
} from '@/actions/consultation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

interface BookingFormData {
  client_name: string;
  client_email: string;
  client_phone: string;
  company: string;
  message: string;
  consultation_date: string;
  consultation_time: string;
}

const initialFormData: BookingFormData = {
  client_name: '',
  client_email: '',
  client_phone: '',
  company: '',
  message: '',
  consultation_date: '',
  consultation_time: '',
};

export default function ScheduleConsultation({
  size,
  className,
}: {
  size?:
    | 'default'
    | 'sm'
    | 'lg'
    | 'icon'
    | 'icon-sm'
    | 'icon-lg'
    | null
    | undefined;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTimeSlots, setIsLoadingTimeSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();

    for (let i = 0; i < 28; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();

      if ([4, 5, 6, 0].includes(dayOfWeek)) {
        dates.push(date);
      }
    }

    setAvailableDates(dates);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setIsLoadingTimeSlots(true);
      getAvailableTimeSlotsAction(selectedDate)
        .then((result) => {
          if (result.success && result.data) {
            setAvailableTimeSlots(result.data);
          } else {
            setAvailableTimeSlots([]);
            toast.error(result.error || 'Failed to load time slots');
          }
        })
        .catch((error) => {
          console.error('Error loading time slots:', error);
          toast.error('Failed to load time slots');
        })
        .finally(() => {
          setIsLoadingTimeSlots(false);
        });
    } else {
      setAvailableTimeSlots([]);
    }
  }, [selectedDate]);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    setSelectedDate(dateString);
    setFormData((prev) => ({ ...prev, consultation_date: dateString }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, consultation_time: time }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.client_name ||
      !formData.client_email ||
      !formData.message ||
      !formData.consultation_date ||
      !formData.consultation_time
    ) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      const result = await createConsultationBookingAction(formData);

      if (result.success) {
        toast.success(
          'Consultation request submitted successfully! Our team will review and confirm your booking via email.'
        );
        setFormData(initialFormData);
        setSelectedDate('');
        setIsOpen(false);
      } else {
        toast.error(result.error || 'Failed to book consultation');
      }
    } catch (error) {
      console.error('Error booking consultation:', error);
      toast.error('Failed to book consultation');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size={size} className={className}>
          Schedule Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[90svw] sm:max-w-4xl max-h-[90svh] overflow-hidden'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-center'>
            Schedule Your Free Consultation
          </DialogTitle>
          <DialogDescription className='text-center text-muted-foreground'>
            Request a 30-minute free consultation call with our experts.
            Available Thursday through Sunday. Our team will review and confirm
            your booking.
          </DialogDescription>
        </DialogHeader>

        <div className='overflow-y-auto max-h-[calc(90svh-120px)] no-scrollbar'>
          <form onSubmit={handleSubmit} className='space-y-6 mx-1'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold flex items-center gap-2'>
                <User className='size-5' />
                Contact Information
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='client_name'>Full Name *</Label>
                  <Input
                    id='client_name'
                    value={formData.client_name}
                    onChange={(e) =>
                      handleInputChange('client_name', e.target.value)
                    }
                    placeholder='Enter your full name'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='client_email'>Email Address *</Label>
                  <Input
                    id='client_email'
                    type='email'
                    value={formData.client_email}
                    onChange={(e) =>
                      handleInputChange('client_email', e.target.value)
                    }
                    placeholder='Enter your email'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='client_phone'>Phone Number</Label>
                  <Input
                    id='client_phone'
                    type='tel'
                    value={formData.client_phone}
                    onChange={(e) =>
                      handleInputChange('client_phone', e.target.value)
                    }
                    placeholder='Enter your phone number'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='company'>Company</Label>
                  <Input
                    id='company'
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange('company', e.target.value)
                    }
                    placeholder='Enter your company name'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder='Tell us about your reliability engineering needs or any specific questions you have...'
                  rows={4}
                />
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold flex items-center gap-2'>
                <Calendar className='size-5' />
                Select Date
              </h3>

              <div className='flex gap-3 overflow-x-auto p-1 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                {availableDates.slice(0, 16).map((date, index) => {
                  const dateString = date.toISOString().split('T')[0];
                  const isSelected = selectedDate === dateString;

                  return (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all hover:shadow-md flex-shrink-0 w-24 ${
                        isSelected
                          ? 'ring-2 ring-primary bg-primary/10'
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => handleDateSelect(date)}
                    >
                      <CardContent className='p-3 text-center'>
                        <div className='text-sm font-medium'>
                          {date.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className='text-xs text-muted-foreground'>
                          {date.toLocaleDateString('en-US', {
                            weekday: 'short',
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {selectedDate && (
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold flex items-center gap-2'>
                  <Clock className='size-5' />
                  Select Time
                </h3>

                {isLoadingTimeSlots ? (
                  <div className='flex items-center justify-center py-8'>
                    <Loader2 className='h-6 w-6 animate-spin' />
                    <span className='ml-2'>Loading available times...</span>
                  </div>
                ) : availableTimeSlots.length > 0 ? (
                  <div className='flex gap-2 overflow-x-auto p-1 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                    {availableTimeSlots.map((time, index) => {
                      const isSelected = formData.consultation_time === time;

                      return (
                        <Button
                          key={index}
                          type='button'
                          variant={isSelected ? 'default' : 'outline'}
                          className={`h-12 flex-shrink-0 min-w-[80px] ${isSelected ? 'bg-primary text-primary-foreground' : ''}`}
                          onClick={() => handleTimeSelect(time)}
                        >
                          {formatTime(time)}
                        </Button>
                      );
                    })}
                  </div>
                ) : (
                  <div className='text-center py-8 text-muted-foreground'>
                    No available time slots for this date. Please select a
                    different date.
                  </div>
                )}
              </div>
            )}

            <div className='flex justify-end gap-4'>
              <Button
                type='button'
                variant='outline'
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                disabled={
                  isLoading ||
                  !formData.client_name ||
                  !formData.client_email ||
                  !formData.message ||
                  !formData.consultation_date ||
                  !formData.consultation_time
                }
                className='min-w-[140px]'
              >
                {isLoading ? (
                  <>
                    <Loader2 className='size-4 animate-spin mr-2' />
                    Booking...
                  </>
                ) : (
                  'Book Consultation'
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
