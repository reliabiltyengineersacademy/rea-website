import Container from '@/components/layout/Container';

export default function About() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900'>
        <Container>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-6xl font-bold text-foreground mb-6'>
              About Us
            </h1>
            <p className='md:text-xl text-muted-foreground'>
              Shaping the future of reliability engineering through world-class
              education, certification programs, and industry expertise.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
