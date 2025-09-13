import z from 'zod';

export const contactSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email address'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  company: z.string().optional(),
  phone: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
