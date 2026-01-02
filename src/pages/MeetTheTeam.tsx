import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2, delayChildren: 0.1 },
};

const dogs = [
  { name: 'Henry', role: 'Lead Avalanche Rescue Dog', years: 6, image: '/photos/webp/henry-vail-rescue-dog(1).webp', alt: 'Henry Vail avalanche rescue dog - Certified K9 team member on Vail Mountain, Colorado', certifications: 'Avalanche Rescue Level 3, Wilderness Search Certified', handler: 'Vail Ski Patrol' },
  { name: 'Mongo', role: 'Alpine Search Specialist', years: 5, image: '/photos/webp/Mongo and Hank classic_JPG.webp', alt: 'Mongo and Hank Vail rescue dogs - Alpine search and rescue K9 teams on Vail Mountain, Colorado', certifications: 'High Altitude Certified, Deep Burial Detection', handler: 'Vail Ski Patrol' },
  { name: 'Mookie', role: 'Training & Operations', years: 4, image: '/photos/webp/Mookie on Chair 5.webp', alt: 'Mookie Vail avalanche rescue dog - Training and operations K9 on Vail Mountain ski lift, Colorado', certifications: 'Scent Detection Master, Field Operations', handler: 'Vail Ski Patrol' },
  { name: 'Hank', role: 'Search & Rescue Specialist', years: 5, image: '/photos/webp/Mongo and Hank classic_JPG.webp', alt: 'Hank Vail rescue dog - Search and rescue specialist K9 team member on Vail Mountain, Colorado', certifications: 'Avalanche Rescue Certified, Backcountry Operations', handler: 'Vail Ski Patrol' },
];

const handlers = [
  { name: 'Sarah Mitchell', dog: 'Ranger', years: 8, image: '/photos/webp/Jake and Blackhawk heli.webp' },
  { name: 'James Chen', dog: 'Nova', years: 6, image: '/photos/webp/Henry and dogs in front of heli.webp' },
  { name: 'Emma Rodriguez', dog: 'Storm', years: 4, image: '/photos/webp/Mongo and VSP waiting for Blackhawk.webp' },
  { name: 'Michael Torres', dog: 'Shadow', years: 7, image: '/photos/webp/Vail Avy dog cowgirl.webp' },
];

export default function MeetTheTeam() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900/50 to-charcoal-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            {...fadeInUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Meet the Team
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-xl md:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed"
          >
            The certified K9 teams and handlers protecting Vail Mountain's backcountry terrain.
          </motion.p>
        </div>
      </section>

      {/* The Dogs */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Vail's Avalanche Rescue Dogs
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto mb-4">
              Meet the certified K9 teams protecting Vail Mountain's backcountry terrain.
            </p>
            <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">
              Each dog undergoes extensive training in avalanche rescue techniques, scent detection, and high-altitude operations. These dogs work directly with Vail Ski Patrol handlers, maintaining certifications through the American Avalanche Association and Colorado Search and Rescue.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dogs.map((dog) => (
              <motion.div
                key={dog.name}
                {...fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-charcoal-900/50 rounded-lg overflow-hidden border border-charcoal-800/50 hover:border-rescue-600/50 transition-all cursor-pointer group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-800">
                  <img 
                    src={dog.image} 
                    alt={dog.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-2">{dog.name}</h3>
                  <p className="text-rescue-500 mb-2 font-medium">{dog.role}</p>
                  <p className="text-charcoal-400 text-sm mb-2">{dog.years} years of service</p>
                  <p className="text-charcoal-500 text-xs">{dog.certifications}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Handlers */}
      <section className="py-32 px-6 lg:px-8 bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Vail Ski Patrol Handlers
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto mb-4">
              The bond between handler and dog is built on trust, dedication, and an unbreakable partnership.
            </p>
            <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">
              Vail Ski Patrol handlers are certified professionals who work year-round with their rescue dogs. Each handler undergoes extensive training in avalanche safety, backcountry rescue techniques, and canine behavior. These professionals maintain certifications through the National Ski Patrol and American Avalanche Association, ensuring the highest standards of mountain safety.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {handlers.map((handler) => (
              <motion.div
                key={handler.name}
                {...fadeInUp}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-charcoal-800 border-2 border-charcoal-700 overflow-hidden">
                  <img 
                    src={handler.image || '/photos/webp/Jake and Blackhawk heli.webp'} 
                    alt={`${handler.name} with ${handler.dog} - Vail Ski Patrol avalanche rescue handler and K9 team on Vail Mountain, Colorado`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{handler.name}</h3>
                <p className="text-rescue-500 mb-2">Handler to {handler.dog}</p>
                <p className="text-charcoal-400 text-sm">{handler.years} years experience</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}





