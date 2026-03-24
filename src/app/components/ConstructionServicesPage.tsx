import { useNavigate } from '@/app/RouterContext';
import { 
  ArrowRight, 
  HardHat,
  Home,
  Paintbrush,
  Wrench,
  ClipboardCheck,
  Users,
  Building,
  CheckCircle2,
  Hammer,
  PenTool,
  Drill,
  CircleDot
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ConstructionServicesPage() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      icon: Building,
      title: "Residential & Commercial Building Construction",
      items: [
        "Ground-up construction",
        "Additions, expansions, and conversions",
        "ADUs (Accessory Dwelling Units)",
        "Garage conversions",
        "Structural and non-structural remodels",
        "Tenant improvements"
      ]
    },
    {
      icon: Paintbrush,
      title: "Interior & Exterior Renovations",
      items: [
        "Kitchens, bathrooms, and whole-home remodels",
        "Flooring, drywall, painting, and finish carpentry",
        "Window and door replacement",
        "Roofing, siding, stucco (when part of a multi-trade project)"
      ]
    },
    {
      icon: Users,
      title: "Coordination of Multiple Trades",
      items: [
        "Plumbing (C-36)",
        "Electrical (C-10)",
        "HVAC (C-20)",
        "Concrete (C-8)",
        "Masonry (C-29)",
        "Carpentry (C-5, C-6)",
        "Roofing (C-39)",
        "Landscaping (C-27)",
        "Tile (C-54)",
        "Painting (C-33)"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Project Management & Construction Administration",
      items: [
        "Scheduling and coordinating subcontractors",
        "Managing inspections and code compliance",
        "Overseeing safety and site operations",
        "Providing cost estimates and project budgets"
      ]
    },
    {
      icon: Home,
      title: "Home Improvement Contracting",
      items: [
        "Remodels",
        "Repairs",
        "Alterations",
        "Improvements to existing structures"
      ]
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Meet with our team to discuss your project vision, requirements, and budget constraints.',
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Develop detailed plans, obtain necessary permits, and create a comprehensive project timeline.',
    },
    {
      number: '03',
      title: 'Pre-Construction',
      description: 'Finalize contracts, schedule trades, order materials, and prepare the site for construction.',
    },
    {
      number: '04',
      title: 'Construction Phase',
      description: 'Execute the build with quality craftsmanship, regular inspections, and proactive communication.',
    },
    {
      number: '05',
      title: 'Quality Control',
      description: 'Conduct thorough inspections, address punch list items, and ensure all work meets our standards.',
    },
    {
      number: '06',
      title: 'Project Closeout',
      description: 'Final walkthrough, documentation delivery, warranty information, and ongoing support.',
    },
  ];

  const whyChoose = [
    {
      title: 'Licensed B-Contractor',
      description: 'Fully licensed and insured to handle comprehensive construction projects across California and Nevada.',
    },
    {
      title: 'Integrated Engineering & Construction',
      description: 'Unique advantage of in-house engineering expertise ensuring structurally sound and code-compliant builds.',
    },
    {
      title: 'Multi-Trade Coordination',
      description: 'Single point of contact managing all trades, reducing delays and ensuring seamless project execution.',
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Commitment to excellence in every detail, from foundation to finish work, backed by comprehensive warranties.',
    },
  ];

  const capabilities = [
    { icon: Hammer, name: 'New Construction' },
    { icon: Home, name: 'ADUs & Conversions' },
    { icon: PenTool, name: 'Remodeling' },
    { icon: Drill, name: 'Tenant Improvements' },
    { icon: Wrench, name: 'Multi-Trade Projects' },
    { icon: CircleDot, name: 'Site Development' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-slate-900 to-primary overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 font-heading uppercase tracking-tight">
              Construction Services<br />
              <span className="text-secondary">Building Excellence from Ground Up</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-10">
              Zion Engineering's licensed B-contractor services deliver comprehensive construction solutions 
              for residential and commercial projects throughout California and Nevada. From ground-up builds 
              to complete renovations, we coordinate all trades and manage every phase with precision and 
              professionalism.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-secondary text-primary hover:bg-white px-10 py-6 text-lg uppercase tracking-wide font-bold shadow-2xl"
            >
              Request a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">
              What We Build
            </h2>
            <h3 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6 font-heading uppercase leading-tight">
              Comprehensive Construction Services
            </h3>
            <p className="text-lg text-slate-600 font-light">
              Licensed B-contractor capabilities covering all aspects of residential and commercial construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border border-slate-200 p-8 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:border-secondary hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon className="w-24 h-24 text-primary" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-4 font-heading uppercase tracking-wide">
                    {service.title}
                  </h4>
                  
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-secondary mt-1.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center font-heading uppercase">
            Our Construction Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-xl border border-slate-200 hover:border-secondary transition-all hover:shadow-xl group"
              >
                <div className="text-6xl font-bold text-slate-200 absolute top-4 right-4 group-hover:text-slate-300 transition-colors">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 relative z-10 group-hover:text-secondary transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 relative z-10 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading uppercase">Core Capabilities</h3>
          <p className="text-lg text-slate-600 mb-10 max-w-4xl">
            As a licensed B-contractor, we have the authority and expertise to handle the full spectrum 
            of construction work, from new builds to complex renovations requiring coordination across 
            multiple specialized trades.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 hover:border-secondary hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <capability.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <span className="text-sm font-bold text-slate-700">{capability.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center font-heading uppercase">
            Why Choose Zion for Construction?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary to-slate-800 p-8 rounded-xl text-white border-l-4 border-secondary shadow-xl"
              >
                <h4 className="text-xl font-bold mb-3 text-secondary">{item.title}</h4>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* License & Compliance */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading uppercase">License & Compliance</h3>
          <div className="bg-slate-50 p-8 lg:p-12 rounded-2xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Licensed B-Contractor</h4>
                <p className="text-slate-600 leading-relaxed">
                  Authorized to perform and coordinate comprehensive construction projects, including 
                  all structural and non-structural work across residential and commercial applications.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Bonded & Insured</h4>
                <p className="text-slate-600 leading-relaxed">
                  Fully bonded and insured with comprehensive liability coverage, protecting both our 
                  clients and our team throughout every project phase.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Code Compliance</h4>
                <p className="text-slate-600 leading-relaxed">
                  Expert knowledge of California Building Code (CBC), Title 24 energy standards, and 
                  local jurisdictional requirements ensuring permit-ready construction.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Safety Standards</h4>
                <p className="text-slate-600 leading-relaxed">
                  OSHA-compliant safety protocols on every job site, with regular safety training and 
                  documentation to protect workers and property.
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic border-t border-slate-200 pt-6">
              All work performed under appropriate permits and inspections, ensuring compliance with 
              state and local building codes.
            </p>
          </div>
        </div>
      </section>

      {/* Trade Coordination */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading uppercase">
            Multi-Trade Coordination
          </h3>
          <div className="bg-primary p-8 lg:p-12 rounded-2xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
            
            <p className="text-slate-200 mb-8 text-lg relative z-10 leading-relaxed">
              As a licensed B-contractor, we can self-perform or coordinate specialized licensed subcontractors 
              across all major construction trades, providing seamless project execution:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {[
                'Plumbing (C-36)',
                'Electrical (C-10)',
                'HVAC (C-20)',
                'Concrete (C-8)',
                'Masonry (C-29)',
                'Carpentry (C-5, C-6)',
                'Roofing (C-39)',
                'Landscaping (C-27)',
                'Tile (C-54)',
                'Painting (C-33)',
                'Drywall (C-9)',
                'Insulation (C-2)'
              ].map((trade, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary font-bold shadow-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-slate-200 pt-1 font-medium">{trade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary to-amber-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-primary">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 font-heading uppercase">Ready to Build?</h3>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-medium">
              Contact us to discuss your construction project. We'll provide a comprehensive scope and competitive quote.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary text-white hover:bg-slate-800 px-10 py-6 text-lg uppercase tracking-wide font-bold shadow-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
