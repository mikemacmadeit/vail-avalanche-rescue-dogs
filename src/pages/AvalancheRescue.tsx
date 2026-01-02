import { motion } from 'framer-motion';
import { AlertCircle, Clock, Search, Shield } from 'lucide-react';

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

const rescueSteps = [
  { step: '1', title: 'Alert & Mobilization', description: 'Avalanche detected on Vail Mountain. Vail Ski Patrol dispatches certified rescue dog teams immediately. Response time: under 5 minutes.', icon: AlertCircle },
  { step: '2', title: 'Rapid Deployment', description: 'Rescue dogs and handlers reach the avalanche site via snowmobile, helicopter, or ski access. Dogs are equipped with specialized gear for deep snow operations.', icon: Clock },
  { step: '3', title: 'Scent Detection Search', description: 'Certified dogs use their enhanced olfactory abilities to locate buried victims through meters of compacted snow. Dogs can detect human scent up to 15 feet deep.', icon: Search },
  { step: '4', title: 'Extraction & Medical Response', description: 'Once located, Vail Ski Patrol handlers and medical teams extract victims using probes and shovels, providing immediate medical care and transport to Vail Health Hospital.', icon: Shield },
];

export default function AvalancheRescue() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900/50 to-charcoal-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            {...fadeInUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Avalanche Rescue Operations
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            How Vail Ski Patrol's certified rescue dog teams save lives on Vail Mountain, Colorado's most challenging backcountry terrain.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-balance">
                The Mission: Protecting Vail Mountain
              </h2>
              <p className="text-xl text-charcoal-300 mb-6 leading-relaxed">
                Vail Mountain, located in the heart of Colorado's Rocky Mountains, presents some of the most challenging avalanche terrain in North America. With elevations reaching over 11,000 feet and over 5,000 acres of skiable terrain, the Vail Ski Patrol's avalanche rescue dog program is essential for mountain safety.
              </p>
              <p className="text-lg text-charcoal-400 mb-6 leading-relaxed">
                Our certified avalanche rescue dogs work alongside Vail Ski Patrol professionals, training year-round to maintain peak performance. These remarkable animals can detect human scent through meters of compacted snow—their sense of smell is 10,000 to 100,000 times more sensitive than humans. In avalanche rescue scenarios, every minute counts, and these dogs can locate victims in minutes rather than the hours it would take human searchers.
              </p>
              <p className="text-lg text-charcoal-400 leading-relaxed">
                The Vail Avalanche Rescue Dog program operates in partnership with the Colorado Avalanche Information Center (CAIC) and follows rigorous certification standards. Our dogs are trained in deep burial detection, high-altitude operations, and extreme weather conditions specific to Colorado's backcountry terrain.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="relative aspect-[4/3] bg-charcoal-900 rounded-lg overflow-hidden border border-charcoal-800/50">
              <img 
                src="/photos/webp/Henry and dogs in front of heli.webp" 
                alt="Henry and Vail avalanche rescue dogs in front of helicopter on Vail Mountain - Vail Ski Patrol K9 teams preparing for backcountry rescue operations in Colorado"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              How Avalanche Rescue Works on Vail Mountain
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto mb-4">
              A precise, time-critical process that saves lives on Vail Mountain, Colorado's challenging backcountry terrain.
            </p>
            <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">
              Vail Ski Patrol's avalanche rescue protocol follows industry best practices established by the American Avalanche Association. When an avalanche occurs on Vail Mountain, response time is critical—survival rates drop significantly after 15 minutes of burial. Our certified rescue dogs and handlers are trained to respond within minutes, working in coordination with Vail Mountain operations, Eagle County emergency services, and the Colorado Avalanche Information Center (CAIC).
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rescueSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-rescue-600/10 border-2 border-rescue-600/30 flex items-center justify-center group-hover:border-rescue-600 transition-colors">
                    <Icon className="w-8 h-8 text-rescue-500" />
                  </div>
                  <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-rescue-600/20 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-rescue-500">{item.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-charcoal-400 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              Impact & Legacy on Vail Mountain
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Decades of service protecting Colorado's backcountry terrain.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-12">
            <motion.div
              {...fadeInUp}
              className="text-center p-8 rounded-lg bg-charcoal-900/30 border border-charcoal-800/30"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
                className="font-display text-6xl md:text-7xl font-bold text-rescue-500 mb-4"
              >
                47+
              </motion.div>
              <p className="text-xl text-charcoal-300">Successful Deployments</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="text-center p-8 rounded-lg bg-charcoal-900/30 border border-charcoal-800/30"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
                className="font-display text-6xl md:text-7xl font-bold text-rescue-500 mb-4"
              >
                20+
              </motion.div>
              <p className="text-xl text-charcoal-300">Years of Service</p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="text-center p-8 rounded-lg bg-charcoal-900/30 border border-charcoal-800/30"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                className="font-display text-6xl md:text-7xl font-bold text-rescue-500 mb-4"
              >
                100%
              </motion.div>
              <p className="text-xl text-charcoal-300">Dedication to Saving Lives</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}





