'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Upload, Users, Award, Shield } from 'lucide-react';

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Container from '@/components/layout/Container';
import { createMembershipApplicationAction } from '@/actions/membership';
import { 
  membershipSchema, 
  type MembershipFormData,
  membershipTiers,
  countries,
  experienceLevels,
  industries,
  professionalInterests,
  referrerOptions,
  chapters,
  paymentOptions,
} from '@/validations/membership';

export default function MembershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  const form = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      country: '',
      experience: '',
      industry: '',
      interests: [],
      certs: '',
      referrer: '',
      statement: '',
      tier: '',
      chapter: '',
      payment: '',
      ethics: false,
      privacy: false,
      news: false,
      hpt: '',
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileError('');
    
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setFileError('Invalid file type. Please upload PDF, DOC, DOCX, PPT, or PPTX files only.');
        return;
      }
      
      // Validate file size (10MB)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        setFileError('File size too large. Please upload files smaller than 10MB.');
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: MembershipFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setFileError('');

    try {
      const result = await createMembershipApplicationAction(data, selectedFile || undefined);

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
        setSelectedFile(null);
        setFileError('');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit application. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className='py-20 bg-muted/80'>
        <Container>
          <div className='max-w-2xl mx-auto text-center'>
            <CheckCircle className='size-16 text-green-500 mx-auto mb-4' />
            <h2 className='text-3xl font-bold text-foreground mb-4'>
              Application Submitted!
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Thank you for your interest in joining G-ARMP. We&apos;ll review your application and contact you by email within 24 hours.
            </p>
            <Button 
              onClick={() => {
                setSubmitStatus('idle');
                setSelectedFile(null);
                setFileError('');
              }}
              variant='outline'
            >
              Submit Another Application
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className='py-20 bg-muted/80'>
      <Container>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center bg-primary/10 text-primary rounded-full px-6 py-3 mb-6'>
            <Users className='h-6 w-6 mr-3' />
            <span className='font-medium'>G-ARMP Membership</span>
          </div>
          <h1 className='text-4xl font-bold text-foreground mb-4'>
            Join G-ARMP
          </h1>
          <div className='mb-4'>
            <Badge className='bg-green-100 text-green-800 border-green-200'>
              Global Association for Reliability & Maintenance Professionals
            </Badge>
          </div>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto text-balance'>
            Become part of a global community advancing asset reliability, maintenance excellence, and lifecycle value.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <Card className='shadow-xl'>
              <CardHeader>
                <CardTitle className='text-2xl'>Membership Application</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    {submitStatus === 'error' && (
                      <Alert variant='destructive'>
                        <AlertDescription>{errorMessage}</AlertDescription>
                      </Alert>
                    )}

                    {/* Personal Information */}
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-foreground border-b pb-2'>
                        Personal Information
                      </h3>
                      
                      <div className='grid md:grid-cols-2 gap-6'>
                        <FormField
                          control={form.control}
                          name='firstName'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First name *</FormLabel>
                              <FormControl>
                                <Input placeholder='e.g., Aisha' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='lastName'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last name *</FormLabel>
                              <FormControl>
                                <Input placeholder='e.g., Khan' {...field} />
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
                              <FormLabel>Work email *</FormLabel>
                              <FormControl>
                                <Input type='email' placeholder='name@company.com' {...field} />
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
                              <FormLabel>Phone (incl. country code)</FormLabel>
                              <FormControl>
                                <Input type='tel' placeholder='+971 5x xxx xxxx' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-foreground border-b pb-2'>
                        Professional Information
                      </h3>
                      
                      <div className='grid md:grid-cols-2 gap-6'>
                        <FormField
                          control={form.control}
                          name='company'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization / Employer *</FormLabel>
                              <FormControl>
                                <Input placeholder='e.g., TAQA Transmission' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='role'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Role / Title *</FormLabel>
                              <FormControl>
                                <Input placeholder='e.g., Senior Reliability Engineer' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='country'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country/Region *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Select…' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {countries.map((country) => (
                                    <SelectItem key={country} value={country}>
                                      {country}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='experience'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Years of experience *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Select…' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {experienceLevels.map((level) => (
                                    <SelectItem key={level} value={level}>
                                      {level}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='industry'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Primary industry *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Select…' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {industries.map((industry) => (
                                    <SelectItem key={industry} value={industry}>
                                      {industry}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Professional Interests */}
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-foreground border-b pb-2'>
                        Professional Interests
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name='interests'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select multiple areas of interest</FormLabel>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                              {professionalInterests.map((interest) => (
                                <div key={interest.value} className='flex items-center space-x-2'>
                                  <Checkbox
                                    id={interest.value}
                                    checked={field.value?.includes(interest.value) || false}
                                    onCheckedChange={(checked) => {
                                      const currentInterests = field.value || [];
                                      if (checked) {
                                        field.onChange([...currentInterests, interest.value]);
                                      } else {
                                        field.onChange(currentInterests.filter(i => i !== interest.value));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={interest.value}
                                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                  >
                                    {interest.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <p className='text-sm text-muted-foreground mt-2'>
                              These help us tailor communities, courses, and events.
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Additional Information */}
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-foreground border-b pb-2'>
                        Additional Information
                      </h3>
                      
                      <div className='grid md:grid-cols-2 gap-6'>
                        <FormField
                          control={form.control}
                          name='certs'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Key certifications (comma-separated)</FormLabel>
                              <FormControl>
                                <Input placeholder='e.g., CMRP, IAM Cert, ARP-E, ASQ-CRE' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='referrer'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>How did you hear about G-ARMP?</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Select…' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {referrerOptions.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name='statement'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Professional statement *</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={4}
                                placeholder='Briefly describe your goals and how you plan to contribute to the G-ARMP community.'
                                {...field}
                              />
                            </FormControl>
                            <p className='text-sm text-muted-foreground'>
                              150–600 characters recommended. Current: {field.value?.length || 0}
                            </p>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Membership Details */}
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-foreground border-b pb-2'>
                        Membership Details
                      </h3>
                      
                      <div className='grid md:grid-cols-3 gap-6'>
                        <FormField
                          control={form.control}
                          name='tier'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Membership tier *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Select…' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {membershipTiers.map((tier) => (
                                    <SelectItem key={tier} value={tier}>
                                      {tier}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='chapter'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred chapter</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Select…' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {chapters.map((chapter) => (
                                    <SelectItem key={chapter} value={chapter}>
                                      {chapter}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='payment'
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Payment preference</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Select…' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {paymentOptions.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-foreground border-b pb-2'>
                        Additional Documents
                      </h3>
                      
                      <div className='space-y-2'>
                        <label className='text-sm font-medium'>Upload CV / Profile (PDF, optional)</label>
                        <div className='flex items-center justify-center w-full'>
                          <label className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50'>
                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                              <Upload className='w-8 h-8 mb-4 text-muted-foreground' />
                              <p className='mb-2 text-sm text-muted-foreground'>
                                <span className='font-semibold'>Click to upload</span> or drag and drop
                              </p>
                              <p className='text-xs text-muted-foreground'>PDF, DOC, DOCX, PPT, PPTX (MAX. 10MB)</p>
                            </div>
                            <input 
                              type='file' 
                              className='hidden' 
                              accept='.pdf,.doc,.docx,.ppt,.pptx'
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                        {selectedFile && (
                          <div className='p-3 bg-green-50 border border-green-200 rounded-lg'>
                            <p className='text-sm text-green-800'>
                              <span className='font-medium'>Selected file:</span> {selectedFile.name} 
                              ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                          </div>
                        )}
                        {fileError && (
                          <p className='text-sm text-red-600'>{fileError}</p>
                        )}
                        <p className='text-xs text-muted-foreground'>
                          Max 10 MB. Supported formats: PDF, DOC, DOCX, PPT, PPTX
                        </p>
                      </div>
                    </div>

                    {/* Agreements */}
                    <div className='space-y-6'>
                      <h3 className='text-lg font-semibold text-foreground border-b pb-2'>
                        Agreements
                      </h3>
                      
                      <div className='space-y-4'>
                        <FormField
                          control={form.control}
                          name='ethics'
                          render={({ field }) => (
                            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className='space-y-1 leading-none'>
                                <FormLabel>
                                  I agree to abide by the G-ARMP Code of Ethics and Professional Conduct. *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='privacy'
                          render={({ field }) => (
                            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className='space-y-1 leading-none'>
                                <FormLabel>
                                  I consent to the processing of my personal data for membership administration as described in the Privacy Notice. *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name='news'
                          render={({ field }) => (
                            <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className='space-y-1 leading-none'>
                                <FormLabel>
                                  I&apos;d like to receive updates about events, certifications, and courses.
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Honeypot field */}
                    <FormField
                      control={form.control}
                      name='hpt'
                      render={({ field }) => (
                        <FormItem className='sr-only'>
                          <FormLabel>Leave this field empty</FormLabel>
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete='off' />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <div className='flex gap-4 justify-end pt-6'>
                      <Button
                        type='button'
                        variant='outline'
                        onClick={() => form.reset()}
                      >
                        Clear
                      </Button>
                      <Button
                        type='submit'
                        disabled={isSubmitting}
                        className='bg-primary text-primary-foreground hover:bg-primary/90'
                      >
                        {isSubmitting ? (
                          <>
                            <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </Button>
                    </div>

                    <p className='text-xs text-muted-foreground text-center'>
                      By submitting, you acknowledge that membership is subject to review. You can request data deletion at any time.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Sidebar */}
          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center'>
                  <Award className='h-5 w-5 mr-2 text-primary' />
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3 text-sm text-muted-foreground'>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0' />
                    Access to member-only templates, calculators, and standards mappings.
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0' />
                    Peer forums and technical SIGs (RCM, FMECA, RAM/LCC, PdM/IIoT).
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0' />
                    Discounts on certifications, workshops, and partner APM tools.
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0' />
                    Speaking opportunities and mentoring network.
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0' />
                    Local chapters in MENA, India, and global virtual community.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center'>
                  <Shield className='h-5 w-5 mr-2 text-green-600' />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  Questions? <a href='mailto:reliabiltyengineersacademy@gmail.com' className='text-primary hover:underline'>reliabiltyengineersacademy@gmail.com</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
