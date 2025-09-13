'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Container from '@/components/layout/Container';
import { contactInfo } from '@/constants/home/contact';
import { Card, CardContent } from '@/components/ui/card';
import { createContactMessageAction } from '@/actions/contact';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { contactSchema, type ContactFormData } from '@/validations/contact';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const result = await createContactMessageAction(data);

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          result.error || 'Failed to send message. Please try again.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='py-20 bg-muted/80'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-foreground mb-4'>
            Contact Us
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Ready to start your reliability engineering journey? Get in touch
            with our team and let&apos;s discuss how we can help you achieve
            your professional goals.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-3xl font-bold text-foreground mb-8'>
              Let&apos;s Talk Reliability
            </h3>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 mb-12'>
              {contactInfo.map((info, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  <div className='size-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <info.icon className='size-6 text-primary' />
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-foreground mb-1'>
                      {info.title}
                    </h4>
                    <p className='text-foreground font-medium text-sm'>
                      {info.details}
                    </p>
                    <p className='text-muted-foreground text-sm'>
                      {info.subDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className='shadow-xl h-fit self-center'>
            <CardContent>
              {submitStatus === 'success' ? (
                <div className='text-center py-12'>
                  <CheckCircle className='size-16 text-green-500 mx-auto mb-4' />
                  <h4 className='text-xl font-semibold text-foreground mb-2'>
                    Message Sent!
                  </h4>
                  <p className='text-muted-foreground'>
                    Thank you for your inquiry. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                  >
                    {submitStatus === 'error' && (
                      <Alert variant='destructive'>
                        <AlertDescription>{errorMessage}</AlertDescription>
                      </Alert>
                    )}

                    <div className='grid md:grid-cols-2 gap-6'>
                      <FormField
                        control={form.control}
                        name='full_name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder='Your full name' {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type='email'
                                placeholder='your.email@company.com'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <FormField
                        control={form.control}
                        name='company'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='Your company name'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='phone'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='Your phone number'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name='subject'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='What is this about? (optional)'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={6}
                              placeholder='Tell us about your reliability engineering needs, goals, or questions...'
                              className='resize-none'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type='submit'
                      className='w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center group'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className='ml-2 size-4 group-hover:translate-x-1 transition-transform' />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
