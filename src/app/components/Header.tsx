import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from '@/app/RouterContext';
import logo from 'figma:asset/logo.svg';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopServicesDropdownOpen, setIsDesktopServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Handle hash navigation when loading the page or changing routes
  useEffect(() => {
    if (isHomePage && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Slight delay to ensure render
      }
    }
  }, [location, isHomePage]);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);

    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  const handlePageNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
    navigate(path);
  };

  const navItems = [
    { label: 'Home', id: 'home', type: 'scroll' },
    { label: 'About', id: 'about', type: 'scroll' },
  ];

  const serviceItems: Array<{ label: string; path?: string; id?: string }> = [
    { label: 'Engineering Services', path: '/engineering-services' },
    { label: 'Scan-to-BIM', path: '/scan-to-bim' },
    { label: 'Construction Services', path: '/construction-services' },
  ];

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDesktopServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDesktopServicesDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-primary shadow-lg border-b border-white/10' : 'bg-primary/95 backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img src={logo} alt="Zion Engineering LLC" className="h-10 w-auto" />
            <div className="hidden sm:flex flex-col items-start">
              <span className="text-xl font-bold text-white tracking-wide">ZZ DESIGN & BUILD INC.</span>
             
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-sm font-medium text-slate-300 hover:text-secondary transition-colors uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={() => setIsDesktopServicesDropdownOpen(!isDesktopServicesDropdownOpen)}
                className="text-sm font-medium text-slate-300 hover:text-secondary transition-colors uppercase tracking-wider flex items-center gap-1"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDesktopServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-slate-800 rounded-lg shadow-xl border border-white/10 py-2 min-w-[220px] z-50">
                  {serviceItems.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => {
                        if (service.path) {
                          handlePageNavigation(service.path);
                        } else if (service.id) {
                          handleNavigation(service.id);
                        }
                      }}
                      className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-secondary hover:bg-white/5 transition-colors"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavigation('contact')}
              className="text-sm font-medium text-slate-300 hover:text-secondary transition-colors uppercase tracking-wider"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center gap-6">
            <a
              href="tel:3102186216"
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 text-secondary" />
              (310) 218-6216
            </a>
            <button
              onClick={() => handleNavigation('contact')}
              className="px-5 py-2 bg-secondary text-primary font-bold text-sm rounded hover:bg-white hover:text-primary transition-colors uppercase tracking-wide"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-secondary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-primary shadow-2xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.id);
                  }}
                  className="block w-full text-left text-slate-300 hover:text-secondary active:text-secondary transition-colors font-medium py-3 px-4 uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}

              {/* Services Section in Mobile */}
              <div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
                  }}
                  className="flex items-center justify-between w-full text-left text-slate-300 hover:text-secondary active:text-secondary transition-colors font-medium py-3 px-4 uppercase tracking-wide"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesDropdownOpen && (
                  <div className="bg-slate-800/50 py-2 border-y border-white/5">
                    {serviceItems.map((service) => (
                      <a
                        key={service.label}
                        href={service.path || `#${service.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          if (service.path) {
                            handlePageNavigation(service.path);
                          } else if (service.id) {
                            handleNavigation(service.id);
                          }
                        }}
                        className="block w-full text-left text-slate-400 hover:text-secondary active:text-secondary transition-colors text-sm py-3 px-8 font-medium"
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('contact');
                }}
                className="block w-full text-left text-slate-300 hover:text-secondary active:text-secondary transition-colors font-medium py-3 px-4 uppercase tracking-wide"
              >
                Contact
              </a>

              <div className="pt-4 border-t border-white/10 space-y-4 px-4 mt-2">
                <a
                  href="tel:3102186216"
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-secondary active:text-secondary p-2 -ml-2 rounded-lg"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  (310) 218-6216
                </a>
                <a
                  href="mailto:pesteban@zionengineeringllc.com"
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-secondary active:text-secondary p-2 -ml-2 rounded-lg break-all"
                >
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  pesteban@zionengineeringllc.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}