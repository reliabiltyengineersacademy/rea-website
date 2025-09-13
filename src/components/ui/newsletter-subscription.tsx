'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { subscribeToNewsletterAction } from '@/actions/subscriptions';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSubscriptionProps {
  variant?: 'default' | 'inline' | 'minimal';
  className?: string;
}

export default function NewsletterSubscription({
  variant = 'default',
  className = '',
}: NewsletterSubscriptionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const result = await subscribeToNewsletterAction(data.email);

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          result.error || 'Failed to subscribe. Please try again.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'minimal') {
    return (
      <div className={`space-y-4 ${className}`}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your email'
                      className='bg-background min-h-12'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='shrink-0 min-h-12'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white' />
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
        </Form>

        {submitStatus === 'success' && (
          <Alert className='border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'>
            <CheckCircle className='h-4 w-4 text-green-600' />
            <AlertDescription className='text-green-800 dark:text-green-200'>
              Successfully subscribed to our newsletter!
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Mail className='h-4 w-4' />
          <span>Stay updated with our latest insights</span>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your email'
                      className='bg-background min-h-12'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='shrink-0 min-h-12'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white' />
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
        </Form>

        {submitStatus === 'success' && (
          <Alert className='border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'>
            <CheckCircle className='h-4 w-4 text-green-600' />
            <AlertDescription className='text-green-800 dark:text-green-200'>
              Successfully subscribed to our newsletter!
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert variant='destructive'>
            <AlertCircle className='h-4 w-4' />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className='text-center'>
        <h3 className='text-2xl font-bold mb-2'>Stay Updated</h3>
        <p className='text-muted-foreground'>
          Subscribe to our newsletter for the latest reliability engineering
          insights and updates.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col sm:flex-row gap-4'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    className='bg-background min-h-12'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            className='shrink-0 min-h-12'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
      </Form>

      {submitStatus === 'success' && (
        <Alert className='border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'>
          <CheckCircle className='h-4 w-4 text-green-600' />
          <AlertDescription className='text-green-800 dark:text-green-200'>
            Successfully subscribed to our newsletter!
          </AlertDescription>
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
