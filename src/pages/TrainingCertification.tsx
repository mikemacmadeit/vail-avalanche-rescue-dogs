import { motion } from 'framer-motion';
import { Shield, Clock, Search, AlertCircle } from 'lucide-react';

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

const trainingAreas = [
  {
    icon: Search,
    title: 'Scent Detection',
    description: 'Dogs undergo extensive training in detecting human scent through meters of compacted snow. This includes deep burial scenarios up to 15 feet deep, which are common in Vail Mountain avalanche conditions.',
  },
  {
    icon: Shield,
    title: 'High-Altitude Operations',
    description: 'Training specifically for Colorado\'s high-altitude conditions, including operations above 11,000 feet on Vail Mountain. Dogs must be able to work effectively in thin air and extreme cold.',
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Training focuses on speed and efficiency. Dogs learn to work quickly in time-critical situations, as survival rates drop significantly after 15 minutes of burial.',
  },
  {
    icon: AlertCircle,
    title: 'Helicopter Deployment',
    description: 'Dogs and handlers train for helicopter deployment scenarios, which are often necessary for reaching remote avalanche sites on Vail Mountain\'s challenging backcountry terrain.',
  },
];

export default function TrainingCertification() {
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
            Training & Certification
          </motion.h1>
          <motion.p
            {...fadeInUp}
            className="text-xl md:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed"
          >
            The rigorous training process that prepares Vail's avalanche rescue dogs and handlers for life-saving operations.
          </motion.p>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Comprehensive Training Program
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto mb-4">
              Vail Avalanche Rescue Dogs undergo extensive training following American Avalanche Association and Colorado Search and Rescue standards.
            </p>
            <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">
              Training includes deep burial detection, scent discrimination, high-altitude operations, helicopter deployment, and working in coordination with Vail Ski Patrol. Dogs must maintain annual certifications and participate in regular training exercises on Vail Mountain to ensure peak performance.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8">
            {trainingAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50 hover:border-rescue-600/50 transition-all"
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-rescue-600/10 border-2 border-rescue-600/30 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-rescue-500" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4">{area.title}</h3>
                  <p className="text-charcoal-300 leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Certification Requirements */}
      <section className="py-32 px-6 lg:px-8 bg-charcoal-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance">
              Certification Standards
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Maintaining the highest standards for avalanche rescue operations on Vail Mountain.
            </p>
          </motion.div>

          <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <h3 className="font-display text-3xl font-semibold mb-6 text-rescue-400">Dog Certifications</h3>
              <ul className="space-y-4 text-charcoal-300">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>Avalanche Rescue Level 3 certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>Wilderness Search Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>High Altitude Operations Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>Annual recertification required</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              {...fadeInUp}
              className="bg-charcoal-900/50 rounded-lg p-8 border border-charcoal-800/50"
            >
              <h3 className="font-display text-3xl font-semibold mb-6 text-rescue-400">Handler Certifications</h3>
              <ul className="space-y-4 text-charcoal-300">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>National Ski Patrol certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>American Avalanche Association certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>Backcountry rescue techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-rescue-500 mt-1 flex-shrink-0" />
                  <span>Ongoing training and education</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-r from-rescue-600/10 to-rescue-700/10 rounded-lg p-12 border border-rescue-600/30 text-center max-w-4xl mx-auto"
          >
            <h3 className="font-display text-3xl font-semibold mb-6">Partnership with Vail Ski Patrol</h3>
            <p className="text-xl text-charcoal-300 leading-relaxed mb-6">
              All Vail Avalanche Rescue Dogs work directly with Vail Ski Patrol handlers who maintain the highest standards of mountain safety. This partnership ensures coordinated response and the best possible outcomes in rescue operations on Vail Mountain.
            </p>
            <p className="text-lg text-charcoal-400">
              Training and certification are ongoing processes, with regular exercises and evaluations to maintain peak performance.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}





