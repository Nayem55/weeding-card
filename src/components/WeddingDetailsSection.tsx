import { motion } from 'framer-motion';
import { MapPin, Clock, Sparkles } from 'lucide-react';

const events = [
  {
    name: 'Jashn-E-Bashaashat',
    date: '17th December, 2025',
    time: '10:30 PM',
    venue: 'Krishibari Estate, Aminbazar',
    description: 'Join us for an evening of joy and celebration as we begin our wedding festivities.',
    dressCode: 'Desi Ethnic Wear',
    dressDescription: 'A vibrant burst of bold, bright colours making it a blissful night.',
    locationLink: 'https://maps.app.goo.gl/JjfPJbwj3qWyqKA88?g_st=ipc',
  },
  {
    name: 'Bazm-E-Humdum',
    date: '21st December, 2025',
    time: '10:30 PM',
    venue: 'Greenvill Outdoors, Madani Avenue',
    description: 'An intimate gathering celebrating the togetherness and love of the couple.',
    dressCode: 'Pastel Desi Ethnics',
    dressDescription: "Let's paint the togetherness in sophisticated colors of pastel, a floral outlook in desi ethnics.",
    locationLink: 'https://maps.app.goo.gl/KBgwvZAKLYwcY5Bx7?g_st=ipc',
  },
  {
    name: 'Baraat',
    date: '25th December, 2025',
    time: '10:30 PM',
    venue: 'Sena Prangan, Dhaka Cantonment',
    description: 'The grand wedding ceremony where two souls unite in the presence of loved ones.',
    dressCode: 'Bridal & Groom Attire',
    dressDescription: 'Desi bridal lehengas and groom sherwanis for the Big Wedding Day!',
    locationLink: 'https://maps.app.goo.gl/prVruxmRhFH9ErCe9?g_st=ipc',
  },
  {
    name: 'Walima-Ul-Awaam',
    date: '28th December, 2025',
    time: '10:30 PM',
    venue: 'United Convention Center, Next to Hazrat Shahjalal International Airport',
    description: 'The grand reception celebrating the newlyweds with family and friends.',
    dressCode: 'Formal Gowns & Tuxes',
    dressDescription: 'Put on your formal gowns and tuxes to end the celebration with the Grand Reception.',
    locationLink: 'https://maps.app.goo.gl/kDUmhcz3SqVBtFru7?g_st=ipc',
  },
];

const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
    className="event-card"
  >
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{event.name}</h3>
        <p className="font-sans text-primary font-medium">{event.date}</p>
      </div>
      <Sparkles className="w-6 h-6 text-primary" />
    </div>

    <p className="font-sans text-muted-foreground leading-relaxed mb-6">
      {event.description}
    </p>

    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-3 text-foreground">
        <Clock className="w-4 h-4 text-primary" />
        <span className="font-sans text-sm">{event.time}</span>
      </div>
      <div className="flex items-center gap-3 text-foreground">
        <MapPin className="w-4 h-4 text-primary" />
        <span className="font-sans text-sm">{event.venue}</span>
      </div>
      <a
        href={event.locationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-sans text-sm underline underline-offset-2"
      >
        <MapPin className="w-4 h-4" />
        View on Google Maps
      </a>
    </div>

    {/* Dress Code */}
    <div className="pt-6 border-t border-border">
      <div className="dress-badge mb-3">
        <span>Dress Code: {event.dressCode}</span>
      </div>
      <p className="font-sans text-sm text-muted-foreground">
        {event.dressDescription}
      </p>
    </div>
  </motion.div>
);

export const WeddingDetailsSection = () => {
  return (
    <section id="events" className="py-10 bg-muted/30">
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
            Join Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-4"
          >
            Wedding Events
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-sans text-muted-foreground max-w-xl mx-auto"
          >
            We would be honored to have you celebrate these special moments with us
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.name} event={event} index={index} />
          ))}
        </div>
      </div>
      {/* Wedding Video Section */}
      {/* <div id="e-invite" className="mt-16 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          <video
            src="/videos/IMG_6758.MP4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full rounded-xl"
          />

        </motion.div>
      </div> */}


    </section>
  );
};
