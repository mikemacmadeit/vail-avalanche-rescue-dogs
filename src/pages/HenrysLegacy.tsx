import { motion } from 'framer-motion';
import { Heart, ArrowDown } from 'lucide-react';

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

export default function HenrysLegacy() {
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
            Henry's Legacy
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            A legendary avalanche rescue dog who served as a cornerstone of Vail Mountain's rescue operations.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...staggerContainer} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="relative aspect-[4/3] bg-charcoal-900 rounded-lg overflow-hidden border border-charcoal-800/50">
              <img 
                src="/photos/webp/Henry Lift up.webp" 
                alt="Henry Vail avalanche rescue dog being lifted up - Legendary avalanche rescue K9 team member on Vail Mountain, Colorado"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            </motion.div>
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-balance">
                A Legendary Career
              </h2>
              <p className="text-xl text-charcoal-300 mb-6 leading-relaxed">
                Henry, a legendary avalanche rescue dog, served as a cornerstone of Vail Mountain's rescue operations. His exceptional training, unwavering dedication, and remarkable success rate in locating buried victims made him one of the most respected rescue dogs in Colorado's backcountry.
              </p>
              <p className="text-lg text-charcoal-400 mb-6 leading-relaxed">
                Throughout his distinguished career, Henry participated in numerous critical rescue missions, working alongside Vail Ski Patrol to save lives in some of the most challenging avalanche conditions. His legacy continues to inspire the next generation of avalanche rescue dogs and their handlers.
              </p>
              <p className="text-lg text-charcoal-400 mb-8 leading-relaxed">
                Henry's story represents the pinnacle of what's possible when exceptional training meets unwavering dedication. His contributions to mountain safety and his bond with his handler exemplify the true spirit of Vail's avalanche rescue program.
              </p>
              <motion.a
                href="https://avydoghenry.com/henrys-story"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rescue-600 to-rescue-700 hover:from-rescue-500 hover:to-rescue-600 text-white rounded-lg transition-all font-semibold text-base sm:text-lg shadow-lg shadow-rescue-600/30 hover:shadow-rescue-600/50"
              >
                <Heart className="w-5 h-5" />
                Read Henry's Full Story
                <ArrowDown className="w-5 h-5 rotate-[-90deg]" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              Continuing the Legacy
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Henry's impact continues through the training and dedication of today's Vail Avalanche Rescue Dogs.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 text-center"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Training Excellence</h3>
              <p className="text-charcoal-300 leading-relaxed">
                Henry's training methods and techniques continue to influence how Vail's avalanche rescue dogs are trained today, ensuring the highest standards of performance.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 text-center"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Handler Partnership</h3>
              <p className="text-charcoal-300 leading-relaxed">
                The bond between Henry and his handler exemplifies the deep partnership that exists between all Vail Ski Patrol handlers and their rescue dogs.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 text-center"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Inspiring Future Generations</h3>
              <p className="text-charcoal-300 leading-relaxed">
                Henry's legacy inspires new handlers and dogs to achieve the same level of excellence in avalanche rescue operations on Vail Mountain.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}





