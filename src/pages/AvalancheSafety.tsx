import { motion } from 'framer-motion';
import { Shield, AlertCircle, Search, MapPin } from 'lucide-react';

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

const safetyTips = [
  {
    icon: Shield,
    title: 'Essential Equipment',
    description: 'Always carry avalanche safety equipment: avalanche transceiver (beacon), probe, and shovel. These tools are essential for backcountry travel on Vail Mountain and can save lives in an emergency.',
  },
  {
    icon: AlertCircle,
    title: 'Check Conditions',
    description: 'Before heading into backcountry terrain, check current avalanche conditions with the Colorado Avalanche Information Center (CAIC). Conditions on Vail Mountain can change rapidly.',
  },
  {
    icon: Search,
    title: 'Travel in Groups',
    description: 'Never travel alone in avalanche terrain. Travel with experienced partners and maintain visual contact. If one person is caught, others can initiate rescue immediately.',
  },
  {
    icon: MapPin,
    title: 'Know the Terrain',
    description: 'Understand avalanche terrain on Vail Mountain. Avoid slopes steeper than 30 degrees, especially after new snow or during warming periods. Recognize warning signs like recent avalanches, cracking snow, or hollow sounds.',
  },
];

export default function AvalancheSafety() {
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
            Avalanche Safety Guide
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-xl md:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed"
          >
            Essential safety information for backcountry travel on Vail Mountain, Colorado.
          </motion.p>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Essential Safety Practices
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Critical safety information for anyone venturing into Vail Mountain's backcountry terrain.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8">
            {safetyTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 hover:border-rescue-600/50 transition-all"
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-rescue-600/10 border-2 border-rescue-600/30 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-rescue-500" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4">{tip.title}</h3>
                  <p className="text-charcoal-300 leading-relaxed">{tip.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Equipment Guide */}
      <section className="py-32 px-6 lg:px-8 bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Essential Avalanche Equipment
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              The three essential pieces of equipment every backcountry traveler needs on Vail Mountain.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <h3 className="font-display text-2xl font-semibold mb-4 text-rescue-400">Avalanche Transceiver</h3>
              <p className="text-charcoal-300 leading-relaxed mb-4">
                Also known as a beacon, this device transmits and receives signals to help locate buried victims. Always wear it on your body, not in your pack, and ensure it's in transmit mode.
              </p>
              <p className="text-charcoal-400 text-sm">
                Practice using your transceiver regularly. In an emergency, seconds count.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <h3 className="font-display text-2xl font-semibold mb-4 text-rescue-400">Avalanche Probe</h3>
              <p className="text-charcoal-300 leading-relaxed mb-4">
                A collapsible pole used to pinpoint the exact location of a buried victim after a transceiver signal is detected. Probes are essential for efficient extraction.
              </p>
              <p className="text-charcoal-400 text-sm">
                Standard probe length is 240-320cm. Longer probes are better for deep burials.
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <h3 className="font-display text-2xl font-semibold mb-4 text-rescue-400">Avalanche Shovel</h3>
              <p className="text-charcoal-300 leading-relaxed mb-4">
                A specialized shovel designed for digging through compacted snow. Metal blades and extendable handles are essential for efficient digging in avalanche debris.
              </p>
              <p className="text-charcoal-400 text-sm">
                Compact shovels are easier to carry but less efficient. Choose based on your priorities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Additional Resources
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Learn more about avalanche safety and backcountry travel.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Colorado Avalanche Information Center</h3>
              <p className="text-charcoal-300 leading-relaxed mb-4">
                The official source for avalanche forecasts and conditions across Colorado, including Vail Mountain and Eagle County.
              </p>
              <a
                href="https://avalanche.state.co.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rescue-400 hover:text-rescue-300 transition-colors font-medium"
              >
                Visit CAIC →
              </a>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Avalanche Safety Training</h3>
              <p className="text-charcoal-300 leading-relaxed mb-4">
                Consider taking an avalanche safety course. Many organizations offer Level 1 and Level 2 courses that teach essential backcountry safety skills.
              </p>
              <p className="text-charcoal-400 text-sm">
                Training is essential for safe backcountry travel on Vail Mountain.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}





