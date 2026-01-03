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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-charcoal-950/98 backdrop-blur-2xl border-b border-charcoal-700/40 shadow-2xl shadow-black/40' 
            : 'bg-gradient-to-b from-charcoal-950/95 via-charcoal-950/90 to-charcoal-950/85 backdrop-blur-xl border-b border-charcoal-800/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-rescue-600/20 via-rescue-500/15 to-charcoal-900/60 border border-rescue-500/30 flex items-center justify-center group-hover:border-rescue-500/50 group-hover:shadow-lg group-hover:shadow-rescue-500/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rescue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mountain className="w-6 h-6 lg:w-7 lg:h-7 text-rescue-400 group-hover:text-rescue-300 transition-all duration-300 relative z-10" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-white to-charcoal-200 bg-clip-text text-transparent group-hover:from-rescue-100 group-hover:via-white group-hover:to-rescue-100 transition-all duration-300 leading-none tracking-tight"
              >
                VSP
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.path}
                      className="relative px-5 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm group tracking-wide"
                    >
                      <span
                        className={`relative z-10 transition-all duration-300 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-charcoal-300 group-hover:text-white'
                        }`}
                      >
                        {item.label}
                      </span>
                      
                      {/* Active state background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBg"
                          className="absolute inset-0 rounded-xl bg-charcoal-800/60 border border-charcoal-700/40"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover background with gradient */}
                      {!isActive && (
                        <motion.div 
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-charcoal-900/0 via-charcoal-800/0 to-charcoal-900/0 group-hover:from-charcoal-800/40 group-hover:via-charcoal-800/50 group-hover:to-charcoal-800/40 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                        />
                      )}
                      
                      {/* Subtle border on hover */}
                      <div className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? 'border-charcoal-700/40' 
                          : 'border-transparent group-hover:border-charcoal-700/30'
                      }`} />
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Support Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="ml-3"
              >
                <Link 
                  to="/support"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-rescue-600 via-rescue-500 to-rescue-600 hover:from-rescue-500 hover:via-rescue-400 hover:to-rescue-500 text-white rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg shadow-rescue-600/30 hover:shadow-rescue-500/40 hover:shadow-xl flex items-center gap-2 group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                  />
                  <Heart className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">Support</span>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.94 }}
              className="lg:hidden p-2.5 text-charcoal-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-charcoal-900/50 border border-transparent hover:border-charcoal-800/40"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden border-t border-charcoal-800/30 overflow-hidden bg-gradient-to-b from-charcoal-950/98 to-charcoal-950/95 backdrop-blur-xl"
              >
                <div className="py-4 space-y-1">
                  {navLinks.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`relative block px-5 py-3.5 rounded-xl transition-all duration-300 font-semibold text-sm tracking-wide ${
                            isActive
                              ? 'text-white'
                              : 'text-charcoal-300 hover:text-white'
                          }`}
                        >
                          {/* Active state background */}
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileNavBg"
                              className="absolute inset-0 rounded-xl bg-charcoal-800/60 border border-charcoal-700/40"
                              initial={false}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          
                          {/* Hover background */}
                          {!isActive && (
                            <>
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-charcoal-900/0 via-charcoal-800/0 to-charcoal-900/0 hover:from-charcoal-800/40 hover:via-charcoal-800/50 hover:to-charcoal-800/40 transition-all duration-300" />
                              <div className="absolute inset-0 rounded-xl border border-transparent hover:border-charcoal-700/30 transition-all duration-300" />
                            </>
                          )}
                          
                          <span className="relative z-10 flex items-center">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-3 mt-3 border-t border-charcoal-800/30"
                  >
                    <Link 
                      to="/support"
                      onClick={() => setMobileMenuOpen(false)}
                      className="relative block px-5 py-3.5 bg-gradient-to-r from-rescue-600 via-rescue-500 to-rescue-600 hover:from-rescue-500 hover:via-rescue-400 hover:to-rescue-500 text-white rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg shadow-rescue-600/30 flex items-center gap-2 overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
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


