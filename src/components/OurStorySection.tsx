import { motion } from 'framer-motion';
import { MessageCircleHeart, Users2, HeartHandshake, PartyPopper } from 'lucide-react';

const storyMilestones = [
  {
    year: '2021',
    title: 'Knowing Each Other',
    description:
      'The wonders of social media; thanks to Mr. Zuckerberg. What started as a casual conversation converted into a firm commitment.',
    icon: MessageCircleHeart,
    date: '16th April, 2021',
  },
  {
    year: '2022',
    title: 'Families Getting Involved',
    description:
      'With Papa dropping the classic, “Kyu na hum ye dosti ko rishtedaari mein badal dein”; as Bollywood as it can get!',
    icon: Users2,
    date: '30th August, 2022',
  },
  {
    year: '2022',
    title: 'Officially Together',
    description:
      'With an official declaration by the families, stepping into a new run as fiancés.',
    icon: HeartHandshake,
    date: '27th October, 2022',
  },
  {
    year: '2025',
    title: 'The Wedding Plan',
    description:
      'The most chaotic yet exciting year of planning the wedding—from browsing, planning, shopping, organising, and executing. It marks the end of a phase full of family drama and shenanigans.',
    icon: PartyPopper,
    date: 'The entire year of 2025',
  },
];

export const OurStorySection = () => {
  return (
    <section id="our-story" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Our Journey
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-foreground"
          >
            How It All Began
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="timeline-line hidden md:block" />

          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="font-serif text-4xl text-primary font-light">{milestone.year}</span>
                <h3 className="font-serif text-2xl text-foreground mt-2">{milestone.title}</h3>

                <p className="font-sans text-muted-foreground italic text-sm mt-1 mb-3">
                  {milestone.date}
                </p>

                <p className="font-sans text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-sage-light border-4 border-background shadow-lg">
                <milestone.icon className="w-6 h-6 text-secondary-foreground" />
              </div>

              {/* Balancing */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
