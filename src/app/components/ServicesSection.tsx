import { ArrowRight, Building2, Scan, HardHat } from 'lucide-react';
import { useNavigate } from '@/app/RouterContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import scanToBimImage from 'figma:asset/618699b4604f5c52113287ba7d7feda084de58fb.png';
import engineeringImage from 'figma:asset/aa9e7be125f580d53c5e2fe8dade98513be1ef41.png';

export function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading uppercase text-center">
          Our Services
        </h3>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Integrated solutions across data capture, engineering, and construction designed to move your project forward with clarity and confidence.  
        </p>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Engineering Services Card */}
          <button
            onClick={() => navigate('/engineering-services')}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 text-left bg-white hover:scale-[1.02] flex flex-col h-full"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={engineeringImage}
                alt="Engineering Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Icon Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-secondary/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                Engineering Services
              </h4>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Designs that are not just compliant but practical, efficient, and ready for execution. We deliver civil, structural, and MEP engineering with a focus on accuracy and real-world application.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Planning & Permit-Ready Drawings</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Land & Site Development</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Structural & Foundation Analysis</span>
                </li>
              </ul>
              
              <div className="mt-auto flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </button>

          {/* Scan-to-BIM Card */}
          <button
            onClick={() => navigate('/scan-to-bim')}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 text-left bg-white hover:scale-[1.02]"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={scanToBimImage}
                alt="Scan-to-BIM Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Icon Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-secondary/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Scan className="w-7 h-7 text-primary" />
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                Scan-to-BIM
              </h4>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Capture real-world conditions with precision and transform them into reliable digital models. Our Scan-to-BIM process reduces guesswork and improves decision-making from the start.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Reality Capture & LiDAR Scanning</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>As-Built & Revit Models</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Digital Twin Creation</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Visualization & Presentation</span>
                </li>
              </ul>
              
              <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>View Details</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </button>

          {/* Construction Services Card */}
          <button
            onClick={() => navigate('/construction-services')}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 text-left bg-white hover:scale-[1.02]"
          >
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763665814538-8ba04597286c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2VycyUyMGJ1aWxkaW5nJTIwcmVzaWRlbnRpYWx8ZW58MXx8fHwxNzcxOTQ0NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Icon Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-secondary/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <HardHat className="w-7 h-7 text-primary" />
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                Construction Services
              </h4>
              <p className="text-slate-700 mb-4 leading-relaxed">
                From planning to execution, we bring projects to life with structured processes and hands-on expertise. Built with coordination, efficiency, and attention to detail.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Residential & Commercial Building</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Renovations & Upgrades</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Multi-Trade Coordination</span>
                </li>
                <li className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-secondary mt-1">•</span>
                  <span>Project Management</span>
                </li>
              </ul>
              
              <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}