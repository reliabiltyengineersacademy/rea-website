import Container from '@/components/layout/Container';

export default function Contact() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900'>
        <Container>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-6xl font-bold text-foreground mb-6'>
              Contact Us
            </h1>
            <p className='md:text-xl text-muted-foreground'>
              Ready to start your reliability engineering journey? Get in touch
              with our team and let&apos;s discuss how we can help you achieve
              your professional goals.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
