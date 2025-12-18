import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { CountdownSection } from '@/components/CountdownSection';
import { OurStorySection } from '@/components/OurStorySection';
import { WeddingDetailsSection } from '@/components/WeddingDetailsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <OurStorySection />
      <WeddingDetailsSection />
      <Footer />
    </main>
  );
};

export default Index;
