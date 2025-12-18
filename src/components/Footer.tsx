import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import logo from "../assets/logo-final-okkk.png"

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img className='w-[240px]' src={logo}/>
          </div>
          
          <p className="font-serif text-lg text-primary italic mb-6">
            December 25, 2025
          </p>

          <p className="font-sans text-sm text-muted-foreground">
            Made with love for our special day
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
