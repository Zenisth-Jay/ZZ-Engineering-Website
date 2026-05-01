import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';
import { useLocation, useNavigate } from '@/app/RouterContext';
import logo from 'figma:asset/logo.svg';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handlePageNavigation = (path: string) => {
    navigate(path);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Zion Engineering" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading tracking-wide">ZZ DESIGN & BUILD INC.</span>
                {/* <span className="text-[10px] text-secondary font-semibold uppercase tracking-widest">Engineering LLC</span> */}
              </div>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Providing high-quality engineering services to California and Nevada with integrity,
              expertise, and innovation.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('about')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('services')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('testimonials')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handlePageNavigation('/engineering-services')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm text-left"
                >
                  Engineering Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation('/scan-to-bim')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm text-left"
                >
                  Scan-to-BIM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation('/construction-services')}
                  className="text-slate-400 hover:text-secondary transition-colors text-sm text-left"
                >
                  Construction Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:3102186216"
                  className="text-slate-400 hover:text-secondary transition-colors flex items-center gap-3 text-sm group"
                >
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  (310) 218-6216
                </a>
              </li>
              <li>
                <a
                  href="mailto:pesteban@zionengineeringllc.com"
                  className="text-slate-400 hover:text-secondary transition-colors flex items-start gap-3 text-sm group"
                >
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all pt-1">pe@zzdesignbuild.com</span>
                </a>
              </li>
              <li className="text-slate-400 flex items-start gap-3 text-sm group">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-colors flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="pt-1">California & Nevada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs text-center md:text-left">
              © {currentYear} Zion Engineering Services, LLC. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs text-center md:text-right font-medium">
              Licensed Professional Engineer in California & Nevada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}