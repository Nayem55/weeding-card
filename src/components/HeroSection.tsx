import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/wedding-hero.jpg';

export const HeroSection = () => {
  const scrollToCountdown = () => {
    const element = document.querySelector('#countdown');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding floral arrangement"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-foreground/80 font-sans text-sm tracking-[0.4em] uppercase mb-6"
        >
          We're Getting Married
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-tight">
            Imama
          </h1>
          
          <div className="flex items-center justify-center gap-4 my-4">
            <span className="w-16 h-px bg-gold-light/50" />
            <span className="font-serif text-gold-light text-2xl italic">weds</span>
            <span className="w-16 h-px bg-gold-light/50" />
          </div>
          
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-tight">
            Ifrah
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-2"
        >
          <p className="font-serif text-2xl md:text-3xl text-gold-light italic">
            December 25, 2025
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={scrollToCountdown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
