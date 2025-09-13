import Hero from '@/components/home/Hero';
import Programs from '@/components/home/Programs';
import Membership from '@/components/home/Membership';
import KnowledgeHub from '@/components/home/KnowledgeHub';
import WhyChoose from '@/components/home/WhyChoose';
import Contact from '@/components/home/Contact';
import LogoSlider from '@/components/ui/logo-slider';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <Programs />
      <Membership />
      <KnowledgeHub />
      <WhyChoose />
      <Contact />
    </>
  );
}
