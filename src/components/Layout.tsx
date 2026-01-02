import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/avalanche-rescue', label: 'Rescue' },
    { path: '/meet-the-team', label: 'Meet the Team' },
    { path: '/avalanche-safety', label: 'Safety' },
    { path: '/avalanche-conditions', label: 'Conditions' },
    { path: '/henrys-legacy', label: "Henry's Legacy" },
  ];

  return (
    <div className="min-h-screen bg-charcoal-950 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-charcoal-950/98 backdrop-blur-xl border-b border-charcoal-700/60 shadow-2xl shadow-black/20' 
            : 'bg-charcoal-950/85 backdrop-blur-lg border-b border-charcoal-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 border border-charcoal-700/60 flex items-center justify-center group-hover:border-rescue-500/70 transition-all duration-300 shadow-lg group-hover:shadow-rescue-500/20"
              >
                <Mountain className="w-6 h-6 text-rescue-400 group-hover:text-rescue-300 transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-rescue-500/0 to-rescue-500/0 group-hover:from-rescue-500/10 group-hover:to-rescue-600/5 transition-all duration-300" />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-lg font-bold text-white leading-tight group-hover:text-rescue-100 transition-colors"
                >
                  Vail Avalanche
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="font-display text-xs font-semibold text-charcoal-400 leading-tight group-hover:text-charcoal-300 transition-colors"
                >
                  Rescue Dogs
                </motion.span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="relative px-5 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm group"
                    >
                      <motion.span
                        className={`relative z-10 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-charcoal-300 group-hover:text-white'
                        }`}
                      >
                        {item.label}
                      </motion.span>
                      
                      {/* Active background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBg"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-charcoal-800/80 via-charcoal-800/70 to-charcoal-800/80 border border-charcoal-700/50 shadow-lg shadow-rescue-500/10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover background */}
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-charcoal-800/0 group-hover:bg-charcoal-800/40 border border-transparent group-hover:border-charcoal-700/30 transition-all duration-300"
                          initial={false}
                        />
                      )}
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-rescue-400 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Support Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="ml-3"
              >
                <Link 
                  to="/support"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-rescue-600 to-rescue-500 hover:from-rescue-500 hover:to-rescue-400 text-white rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg shadow-rescue-600/30 hover:shadow-rescue-500/40 flex items-center gap-2 group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                  />
                  <Heart className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">Support</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2.5 text-charcoal-300 hover:text-white transition-colors rounded-xl hover:bg-charcoal-800/50 border border-transparent hover:border-charcoal-700/50"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-charcoal-800/40 overflow-hidden"
              >
                <div className="py-4 space-y-1.5">
                  {navLinks.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`relative block px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                            isActive
                              ? 'text-white'
                              : 'text-charcoal-300 hover:text-white'
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileNavBg"
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-charcoal-800/80 to-charcoal-800/60 border border-charcoal-700/50"
                              initial={false}
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                          {!isActive && (
                            <div className="absolute inset-0 rounded-xl bg-charcoal-800/0 hover:bg-charcoal-800/40 transition-all duration-300" />
                          )}
                          <span className="relative z-10 flex items-center gap-2">
                            {item.label}
                            {isActive && (
                              <motion.div
                                className="w-1.5 h-1.5 rounded-full bg-rescue-400"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1 }}
                              />
                            )}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="pt-2"
                  >
                    <Link 
                      to="/support"
                      onClick={() => setMobileMenuOpen(false)}
                      className="relative block px-4 py-3 bg-gradient-to-r from-rescue-600 to-rescue-500 hover:from-rescue-500 hover:to-rescue-400 text-white rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg shadow-rescue-600/30 flex items-center gap-2 overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      />
                      <Heart className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Support</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-900/50 border-t border-charcoal-800/50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Vail Avalanche Rescue Dogs</h3>
              <p className="text-charcoal-400 text-sm leading-relaxed">
                Certified K9 teams protecting Vail Mountain, Colorado. Training, certification, and backcountry rescue operations.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/avalanche-rescue" className="text-charcoal-400 hover:text-rescue-400 transition-colors">Avalanche Rescue</Link></li>
                <li><Link to="/meet-the-team" className="text-charcoal-400 hover:text-rescue-400 transition-colors">Meet the Team</Link></li>
                <li><Link to="/avalanche-safety" className="text-charcoal-400 hover:text-rescue-400 transition-colors">Avalanche Safety</Link></li>
                <li><Link to="/henrys-legacy" className="text-charcoal-400 hover:text-rescue-400 transition-colors">Henry's Legacy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Contact</h3>
              <p className="text-charcoal-400 text-sm mb-2">Vail Ski Patrol</p>
              <p className="text-charcoal-400 text-sm">Vail Mountain, Colorado</p>
            </div>
          </div>
          <div className="border-t border-charcoal-800/50 pt-8 text-center text-sm text-charcoal-500">
            <p>&copy; {new Date().getFullYear()} Vail Avalanche Rescue Dogs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


