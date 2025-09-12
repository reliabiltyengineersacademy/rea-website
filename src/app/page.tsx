import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Programs from '@/components/home/Programs';
import Membership from '@/components/home/Membership';
import KnowledgeHub from '@/components/home/KnowledgeHub';
import WhyChoose from '@/components/home/WhyChoose';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Membership />
      <KnowledgeHub />
      <WhyChoose />
      <Contact />
    </>
  );
}
