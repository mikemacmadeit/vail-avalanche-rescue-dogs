import { motion } from 'framer-motion';
import { AlertCircle, MapPin, Clock } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function AvalancheConditions() {
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
            Avalanche Conditions
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-xl md:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed"
          >
            Current avalanche conditions and forecasts for Vail Mountain, Colorado.
          </motion.p>
        </div>
      </section>

      {/* CAIC Integration */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Current Conditions
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto mb-8">
              For the most up-to-date avalanche conditions on Vail Mountain and throughout Colorado, visit the Colorado Avalanche Information Center (CAIC).
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-charcoal-900/50 rounded-lg p-12 border border-charcoal-800/50 max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-rescue-600/10 border-2 border-rescue-600/30 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-rescue-500" />
            </div>
            <h3 className="font-display text-3xl font-semibold mb-4">Colorado Avalanche Information Center</h3>
            <p className="text-xl text-charcoal-300 mb-8 leading-relaxed">
              The official source for avalanche forecasts, conditions, and safety information across Colorado, including Vail Mountain and Eagle County.
            </p>
            <a
              href="https://avalanche.state.co.us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rescue-600 to-rescue-700 hover:from-rescue-500 hover:to-rescue-600 text-white rounded-lg transition-all font-semibold text-lg shadow-xl shadow-rescue-600/40 hover:shadow-rescue-600/60"
            >
              <MapPin className="w-5 h-5" />
              View CAIC Forecast
            </a>
          </motion.div>
        </div>
      </section>

      {/* Information */}
      <section className="py-32 px-6 lg:px-8 bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Understanding Avalanche Conditions
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              How to read and interpret avalanche forecasts for Vail Mountain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-rescue-600/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-rescue-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Daily Updates</h3>
              <p className="text-charcoal-300 leading-relaxed text-sm">
                CAIC provides daily avalanche forecasts updated throughout the day as conditions change. Always check conditions before heading into backcountry terrain on Vail Mountain.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-rescue-600/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-rescue-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Vail Mountain Specific</h3>
              <p className="text-charcoal-300 leading-relaxed text-sm">
                CAIC provides forecasts for specific zones, including Vail Mountain and surrounding Eagle County terrain. Conditions can vary significantly across different aspects and elevations.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-rescue-600/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-rescue-500" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Danger Ratings</h3>
              <p className="text-charcoal-300 leading-relaxed text-sm">
                Forecasts use a 5-level danger scale from Low (1) to Extreme (5). Understanding these ratings is essential for making safe decisions in backcountry terrain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Reminder */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-r from-rescue-600/10 to-rescue-700/10 rounded-lg p-8 border border-rescue-600/30 text-center"
          >
            <h3 className="font-display text-3xl font-semibold mb-4">Safety First</h3>
            <p className="text-xl text-charcoal-300 leading-relaxed mb-6">
              Always check current avalanche conditions before venturing into backcountry terrain on Vail Mountain. Conditions can change rapidly, and what was safe yesterday may not be safe today.
            </p>
            <p className="text-lg text-charcoal-400">
              When in doubt, choose safer terrain or wait for better conditions.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}





