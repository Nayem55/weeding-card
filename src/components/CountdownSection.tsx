import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const weddingDate = new Date('2025-12-25T00:00:00');
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownBox = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="countdown-box"
  >
    <span className="font-serif text-4xl md:text-6xl text-primary font-light">
      {String(value).padStart(2, '0')}
    </span>
    <span className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-2">
      {label}
    </span>
  </motion.div>
);

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="section-padding bg-muted/30">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Counting Down To
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-foreground mb-12"
        >
          Our Special Day
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <CountdownBox value={timeLeft.days} label="Days" delay={0.2} />
          <CountdownBox value={timeLeft.hours} label="Hours" delay={0.3} />
          <CountdownBox value={timeLeft.minutes} label="Minutes" delay={0.4} />
          <CountdownBox value={timeLeft.seconds} label="Seconds" delay={0.5} />
        </div>
      </div>
    </section>
  );
};
