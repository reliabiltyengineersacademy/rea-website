import Hero from '@/components/home/Hero';
import Companies from '@/components/home/Companies';
import Programs from '@/components/home/Programs';
import Membership from '@/components/home/Membership';
import KnowledgeHub from '@/components/home/KnowledgeHub';
import WhyChoose from '@/components/home/WhyChoose';
import Contact from '@/components/home/Contact';
import { getFeaturedArticlesAction } from '@/actions/articles';

export default async function Home() {
  const featuredArticlesResult = await getFeaturedArticlesAction();
  const featuredArticles = featuredArticlesResult.success
    ? featuredArticlesResult.data || []
    : [];

  return (
    <>
      <Hero />
      <Companies />
      <Programs />
      <Membership />
      <KnowledgeHub featuredArticles={featuredArticles} />
      <WhyChoose />
      <Contact />
    </>
  );
}
