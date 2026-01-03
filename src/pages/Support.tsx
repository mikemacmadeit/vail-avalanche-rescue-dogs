import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Support() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/photos/webp/Mongo and VSP waiting for Blackhawk.webp" 
            alt="Mongo and Vail Ski Patrol waiting for Blackhawk helicopter - Avalanche rescue dog and handler team preparing for backcountry rescue mission on Vail Mountain, Colorado"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal-950/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            {...fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Support the Mission
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Your support helps train these remarkable dogs and maintain the equipment needed to save lives on Vail Mountain.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-xl text-charcoal-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              The Vail Avalanche Rescue Dog program relies on community support to fund training, certification, and specialized equipment for backcountry rescue operations.
            </p>
            <p className="text-lg text-charcoal-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              All donations directly support the Vail Ski Patrol's avalanche rescue dog program, including ongoing training, veterinary care, specialized gear, and certification maintenance required by the American Avalanche Association and Colorado Search and Rescue.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mb-8 sm:mb-12 p-6 sm:p-8 bg-charcoal-900/50 rounded-lg border border-charcoal-800/50 max-w-md mx-auto text-center"
          >
            <p className="text-sm text-charcoal-400 mb-2 uppercase tracking-wide">Every donation makes a difference</p>
            <p className="text-3xl font-display font-semibold text-rescue-500">$50 = 1 week of training</p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="https://www.coloradogives.org/donate/Vail-Avalanche-Rescue-Dogs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-rescue-600 hover:bg-rescue-700 text-white rounded-md transition-all font-medium text-base sm:text-lg inline-flex items-center justify-center gap-2 shadow-lg shadow-rescue-600/20 hover:shadow-rescue-600/30 cursor-pointer"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </motion.a>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-white rounded-md transition-colors font-medium text-base sm:text-lg border border-charcoal-700 hover:border-charcoal-600">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              How Your Support Helps
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Your contributions directly fund essential programs and equipment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rescue-600/10 border-2 border-rescue-600/30 flex items-center justify-center">
                <Heart className="w-8 h-8 text-rescue-500" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Training Programs</h3>
              <p className="text-charcoal-300 leading-relaxed">
                Funds ongoing training exercises, certification maintenance, and skill development for both dogs and handlers.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rescue-600/10 border-2 border-rescue-600/30 flex items-center justify-center">
                <Heart className="w-8 h-8 text-rescue-500" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Veterinary Care</h3>
              <p className="text-charcoal-300 leading-relaxed">
                Ensures all rescue dogs receive regular health checkups, vaccinations, and emergency medical care when needed.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rescue-600/10 border-2 border-rescue-600/30 flex items-center justify-center">
                <Heart className="w-8 h-8 text-rescue-500" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4">Specialized Equipment</h3>
              <p className="text-charcoal-300 leading-relaxed">
                Provides specialized gear for backcountry rescue operations, including harnesses, protective equipment, and communication devices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}





