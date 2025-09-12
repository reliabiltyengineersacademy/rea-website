'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Container from '@/components/layout/Container';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@reliabilityengineers.academy',
    subDetails: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    subDetails: 'Mon-Fri, 9:00 AM - 6:00 PM EST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Reliability Drive, Suite 100',
    subDetails: 'Houston, TX 77001, USA',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Monday - Friday: 9:00 AM - 6:00 PM',
    subDetails: 'Saturday: 10:00 AM - 2:00 PM EST',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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

            <div className='space-y-8 mb-12'>
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

          <Card className='shadow-xl'>
            <CardContent>
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                Send us a Message
              </h3>

              {isSubmitted ? (
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
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <Label
                        htmlFor='name'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Full Name *
                      </Label>
                      <Input
                        type='text'
                        id='name'
                        name='name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Your full name'
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor='email'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Email Address *
                      </Label>
                      <Input
                        type='email'
                        id='email'
                        name='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='your.email@company.com'
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <Label
                        htmlFor='company'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Company
                      </Label>
                      <Input
                        type='text'
                        id='company'
                        name='company'
                        value={formData.company}
                        onChange={handleChange}
                        placeholder='Your company name'
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor='phone'
                        className='block text-sm font-medium text-foreground mb-2'
                      >
                        Phone Number
                      </Label>
                      <Input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='+1 (555) 123-4567'
                      />
                    </div>
                  </div>

                  <div>
                    <Label className='block text-sm font-medium text-foreground mb-2'>
                      Subject *
                    </Label>
                    <Select
                      required
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select a subject' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='certification'>
                          Certification Programs
                        </SelectItem>
                        <SelectItem value='training'>
                          Custom Training
                        </SelectItem>
                        <SelectItem value='membership'>
                          Membership Inquiry
                        </SelectItem>
                        <SelectItem value='consultation'>
                          Consultation Request
                        </SelectItem>
                        <SelectItem value='partnership'>
                          Partnership Opportunities
                        </SelectItem>
                        <SelectItem value='other'>Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor='message'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Message *
                    </Label>
                    <Textarea
                      id='message'
                      name='message'
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Tell us about your reliability engineering needs, goals, or questions...'
                      className='resize-none'
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center group'
                  >
                    Send Message
                    <Send className='ml-2 size-4 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
