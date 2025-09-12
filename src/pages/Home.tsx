import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Membership from '../components/Membership';
import KnowledgeHub from '../components/KnowledgeHub';
import WhyChoose from '../components/WhyChoose';
import Contact from '../components/Contact';

const Home = () => {
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
};

export default Home;