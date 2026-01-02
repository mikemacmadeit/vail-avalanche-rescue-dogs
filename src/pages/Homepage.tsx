import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Heart, Shield, Users, Mountain, AlertTriangle, CheckCircle, Award, MapPin, Clock } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/photos/webp/Vail Avy Dogs training.webp" 
            alt="Vail Avalanche Rescue Dogs training on Vail Mountain, Colorado - Certified K9 teams practicing avalanche rescue techniques in backcountry terrain"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: 'scale(1.1)' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/60 to-charcoal-950/85"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/40 via-transparent to-charcoal-950/40"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-charcoal-950/50"></div>
        </div>

        {/* Floating particles/snow effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            const randomDuration = Math.random() * 10 + 10;
            const randomOpacity = Math.random() * 0.5 + 0.2;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: `${randomX}%`,
                  y: -20,
                  opacity: randomOpacity,
                }}
                animate={{
                  y: '100vh',
                  x: `${randomX + (Math.random() - 0.5) * 20}%`,
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: 'linear',
                }}
              />
            );
          })}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-[0.95] tracking-tight text-center whitespace-nowrap"
          >
            <span className="text-white">Vail Avalanche Rescue </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-rescue-500 inline"
            >
              Dogs
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-24 bg-gradient-to-r from-transparent via-rescue-500 to-transparent mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-200 mb-4 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Certified K9 Avalanche Rescue Teams Protecting Vail Mountain, Colorado
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-charcoal-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Expertly trained avalanche rescue dogs and handlers saving lives in Vail Mountain's challenging backcountry terrain. Serving Eagle County with certified search and rescue operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/support">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-rescue-600 to-rescue-700 hover:from-rescue-500 hover:to-rescue-600 text-white rounded-lg transition-all font-semibold text-lg shadow-xl shadow-rescue-600/40 hover:shadow-rescue-600/60"
              >
                <Heart className="w-5 h-5" />
                Support the Mission
              </motion.button>
            </Link>
            <Link to="/meet-the-team">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-charcoal-900/80 hover:bg-charcoal-800/80 backdrop-blur-sm text-white rounded-lg transition-all font-semibold text-lg border border-charcoal-700/50 hover:border-charcoal-600/50"
              >
                Meet the Dogs
                <ArrowDown className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 pt-8 border-t border-charcoal-800/50 w-full"
          >
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-rescue-500 mb-1">47+</div>
                <div className="text-xs md:text-sm text-charcoal-400 uppercase tracking-wide">Successful Rescues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-rescue-500 mb-1">20+</div>
                <div className="text-xs md:text-sm text-charcoal-400 uppercase tracking-wide">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-rescue-500 mb-1">100%</div>
                <div className="text-xs md:text-sm text-charcoal-400 uppercase tracking-wide">Certified Teams</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-charcoal-500 uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-5 h-5 text-charcoal-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* What Are Avalanche Rescue Dogs Section - SEO Rich Content */}
      <section className="py-24 px-6 lg:px-8 bg-charcoal-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              What Are Avalanche Rescue Dogs?
            </h2>
            <p className="text-xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed">
              Avalanche rescue dogs are specially trained K9 teams that locate victims buried beneath snow during avalanche emergencies. Our certified dogs work alongside Vail Ski Patrol to provide life-saving search and rescue operations on Vail Mountain, Colorado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-white">
                How Avalanche Rescue Dogs Work
              </h3>
              <div className="space-y-4 text-charcoal-300 leading-relaxed">
                <p>
                  Avalanche rescue dogs use their exceptional sense of smell to detect human scent through deep snowpack. When an avalanche occurs on Vail Mountain's backcountry terrain, these highly trained dogs can locate buried victims faster than traditional search methods, dramatically increasing survival rates.
                </p>
                <p>
                  Our certified K9 teams undergo rigorous training in high-altitude conditions, deep burial detection, and backcountry navigation. Each dog is paired with an experienced handler from Vail Ski Patrol, creating a seamless rescue operation that serves Eagle County and surrounding Colorado mountain regions.
                </p>
                <p>
                  The dogs are trained to work in extreme weather conditions, navigate challenging terrain, and maintain focus during high-stress rescue scenarios. This specialized training makes them invaluable assets for avalanche safety and search operations in Colorado's most challenging mountain environments.
                </p>
              </div>
              <Link to="/avalanche-rescue" className="inline-block mt-6 text-rescue-400 hover:text-rescue-300 font-semibold transition-colors">
                Learn More About Our Rescue Operations →
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} className="relative">
              <div className="bg-charcoal-900/50 rounded-xl p-8 border border-charcoal-800/50">
                <h3 className="font-display text-xl font-semibold mb-6 text-white">Key Capabilities</h3>
                <ul className="space-y-4">
                  {[
                    'Deep burial detection up to 15 feet',
                    'High-altitude operations above 10,000 feet',
                    'Rapid response time under 30 minutes',
                    'Certified by national avalanche rescue organizations',
                    '24/7 availability during ski season',
                    'Expert navigation in backcountry terrain'
                  ].map((capability, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-charcoal-300"
                    >
                      <CheckCircle className="w-5 h-5 text-rescue-500 mt-0.5 flex-shrink-0" />
                      <span>{capability}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Vail Mountain Section - Location-Specific SEO */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 md:order-1">
              <div className="bg-charcoal-900/50 rounded-xl overflow-hidden border border-charcoal-800/50">
                <img 
                  src="/photos/webp/Jake and Blackhawk heli.webp" 
                  alt="Avalanche rescue dog Jake with Blackhawk helicopter on Vail Mountain, Colorado - demonstrating specialized high-altitude rescue operations in challenging backcountry terrain"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 md:order-2">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Vail Mountain Needs Specialized Avalanche Rescue
              </h2>
              <div className="space-y-4 text-charcoal-300 leading-relaxed">
                <p>
                  Vail Mountain, located in Eagle County, Colorado, presents unique challenges for avalanche rescue operations. With elevations exceeding 11,000 feet, extensive backcountry terrain, and variable snow conditions, Vail requires specialized K9 rescue teams trained specifically for high-altitude operations.
                </p>
                <p>
                  The mountain's complex terrain includes steep bowls, tree-lined runs, and remote backcountry areas that are popular with skiers and snowboarders. These areas are prone to avalanches, especially during periods of heavy snowfall or rapid temperature changes common in Colorado's climate.
                </p>
                <p>
                  Our avalanche rescue dogs are essential for Vail Ski Patrol's mission to protect visitors and locals exploring Vail Mountain's backcountry. The combination of challenging terrain, high altitude, and unpredictable weather conditions makes traditional search methods less effective, highlighting the critical importance of certified K9 rescue teams.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-charcoal-400">
                  <MapPin className="w-5 h-5 text-rescue-500" />
                  <span className="text-sm">Vail, Colorado</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal-400">
                  <Mountain className="w-5 h-5 text-rescue-500" />
                  <span className="text-sm">11,000+ ft Elevation</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal-400">
                  <Shield className="w-5 h-5 text-rescue-500" />
                  <span className="text-sm">Eagle County Coverage</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-24 px-6 lg:px-8 bg-charcoal-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Certified & Trusted Avalanche Rescue Teams
            </h2>
            <p className="text-xl text-charcoal-300 max-w-3xl mx-auto">
              Our K9 teams meet the highest standards for avalanche rescue operations in Colorado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Nationally Certified',
                description: 'All handlers and dogs are certified through recognized avalanche rescue organizations, meeting or exceeding Colorado state standards for search and rescue operations.'
              },
              {
                icon: Users,
                title: 'Expert Handlers',
                description: 'Our handlers are experienced members of Vail Ski Patrol with extensive training in backcountry safety, avalanche awareness, and emergency response protocols.'
              },
              {
                icon: Clock,
                title: '24/7 Availability',
                description: 'During ski season, our teams are on-call 24 hours a day, ready to respond to avalanche emergencies on Vail Mountain and surrounding Eagle County backcountry areas.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-charcoal-900/50 rounded-xl p-8 border border-charcoal-800/50 hover:border-rescue-600/30 transition-all"
              >
                <item.icon className="w-12 h-12 text-rescue-500 mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-charcoal-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
              Explore Our Mission & Resources
            </h2>
            <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
              Learn about avalanche rescue operations, meet our certified teams, access safety resources, and check current conditions on Vail Mountain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/avalanche-rescue">
              <motion.div
                {...fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-charcoal-900/50 rounded-lg p-6 border border-charcoal-800/50 hover:border-rescue-600/50 transition-all cursor-pointer group h-full"
              >
                <Shield className="w-8 h-8 text-rescue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-rescue-400 transition-colors">Avalanche Rescue</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">Learn how our certified K9 rescue operations work on Vail Mountain's challenging backcountry terrain.</p>
              </motion.div>
            </Link>
            <Link to="/meet-the-team">
              <motion.div
                {...fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-charcoal-900/50 rounded-lg p-6 border border-charcoal-800/50 hover:border-rescue-600/50 transition-all cursor-pointer group h-full"
              >
                <Users className="w-8 h-8 text-rescue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-rescue-400 transition-colors">Meet the Team</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">Meet our certified rescue dogs and expert handlers serving Vail Mountain and Eagle County.</p>
              </motion.div>
            </Link>
            <Link to="/avalanche-safety">
              <motion.div
                {...fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-charcoal-900/50 rounded-lg p-6 border border-charcoal-800/50 hover:border-rescue-600/50 transition-all cursor-pointer group h-full"
              >
                <AlertTriangle className="w-8 h-8 text-rescue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-rescue-400 transition-colors">Avalanche Safety</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">Essential avalanche safety information and backcountry terrain awareness for Colorado mountain recreation.</p>
              </motion.div>
            </Link>
            <Link to="/avalanche-conditions">
              <motion.div
                {...fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-charcoal-900/50 rounded-lg p-6 border border-charcoal-800/50 hover:border-rescue-600/50 transition-all cursor-pointer group h-full"
              >
                <Mountain className="w-8 h-8 text-rescue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-rescue-400 transition-colors">Conditions</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">Current avalanche conditions, forecasts, and safety advisories for Vail Mountain backcountry areas.</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Rich */}
      <section className="py-24 px-6 lg:px-8 bg-charcoal-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions About Avalanche Rescue Dogs
            </h2>
            <p className="text-xl text-charcoal-300">
              Common questions about avalanche rescue operations on Vail Mountain, Colorado
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How do avalanche rescue dogs locate buried victims?',
                answer: 'Avalanche rescue dogs use their exceptional sense of smell, which is 10,000 to 100,000 times more sensitive than humans, to detect human scent through snowpack. When trained dogs detect a buried victim, they alert their handler by barking or digging. This method is significantly faster than traditional probe lines, allowing rescuers to locate victims within minutes rather than hours, dramatically increasing survival chances in Vail Mountain\'s challenging backcountry terrain.'
              },
              {
                question: 'What makes Vail Mountain\'s backcountry terrain challenging for rescue operations?',
                answer: 'Vail Mountain\'s backcountry presents unique challenges including elevations above 11,000 feet, steep terrain, variable snow conditions, and remote locations. These factors make traditional search methods less effective, highlighting the critical importance of certified K9 rescue teams. Our dogs are specifically trained for high-altitude operations and can navigate challenging terrain that would be difficult for human searchers.'
              },
              {
                question: 'How quickly can avalanche rescue dogs respond to an emergency?',
                answer: 'Our certified K9 teams can typically respond to avalanche emergencies on Vail Mountain within 30 minutes. Dogs are transported via snowmobile, helicopter, or ski lift depending on the location. Once on scene, trained dogs can search large areas much faster than human teams, often locating buried victims within minutes of arrival.'
              },
              {
                question: 'Are the rescue dogs certified for avalanche operations?',
                answer: 'Yes, all our avalanche rescue dogs and handlers are certified through recognized national organizations. They undergo rigorous training in deep burial detection, high-altitude operations, backcountry navigation, and emergency response protocols. Certification requires regular recertification to ensure teams maintain the highest standards for search and rescue operations on Vail Mountain and throughout Eagle County.'
              },
              {
                question: 'What should I do if I\'m caught in an avalanche in Vail\'s backcountry?',
                answer: 'If caught in an avalanche, try to stay on the surface by "swimming" and moving toward the side. If buried, create an air pocket in front of your face and try to remain calm. Your companions should immediately call 911 and begin a visual search. Do not leave the area - our certified K9 teams from Vail Ski Patrol will respond as quickly as possible. Always carry avalanche safety equipment including a beacon, probe, and shovel when venturing into backcountry terrain.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-charcoal-900/50 rounded-xl p-6 border border-charcoal-800/50"
              >
                <h3 className="font-display text-xl font-semibold mb-3 text-white">
                  {faq.question}
                </h3>
                <p className="text-charcoal-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link 
              to="/avalanche-safety" 
              className="inline-flex items-center gap-2 text-rescue-400 hover:text-rescue-300 font-semibold transition-colors"
            >
              Learn More About Avalanche Safety →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Support Vail Avalanche Rescue Dogs
            </h2>
            <p className="text-xl text-charcoal-300 mb-8 leading-relaxed">
              Help us continue protecting lives on Vail Mountain, Colorado. Your support enables our certified K9 teams to maintain training, equipment, and 24/7 availability for avalanche rescue operations in Eagle County's challenging backcountry terrain.
            </p>
            <Link to="/support">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-rescue-600 to-rescue-700 hover:from-rescue-500 hover:to-rescue-600 text-white rounded-lg transition-all font-semibold text-lg shadow-xl shadow-rescue-600/40 hover:shadow-rescue-600/60"
              >
                <Heart className="w-5 h-5" />
                Support Our Mission
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
