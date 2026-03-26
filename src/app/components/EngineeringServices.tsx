import { ArrowRight, Building2, Layers3, Home, Wrench, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { TestimonialsCarousel } from '@/app/components/TestimonialsCarousel';
import heroImage from 'figma:asset/d522a823ecc00c4b530485c18f8ffedb2eb4a8ef.png';
import service1Image from 'figma:asset/Service 1.png';
import service2Image from 'figma:asset/service 2.png';
import service3Image from 'figma:asset/service 3.png';
import service4Image from 'figma:asset/service 4.png';

export function EngineeringServices() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      id: 1,
      title: 'Develop Plans & Process Permits',
      icon: Building2,
      image: service1Image,
      description: 'From initial design to final approvals, we prepare accurate, permit-ready plans that meet local regulations and help you move forward without delays.',
      items: [
        'Residential & Commercial Buildings',
        'Accessory Dwelling Unit (ADU)',
        'Garage Conversion',
        'Renovation & Extension',
        'After the Fact Permit - Resolve Notice of Violation'
      ],
      size: 'large' // 2x2
    },
    {
      id: 2,
      title: 'Land Development',
      icon: Layers3,
      image: service2Image,
      description: "We plan and design land development solutions that are compliant, efficient, and ready for execution ensuring smooth approvals and practical site outcomes.",
      items: [
        'Lot Split (SB9 & Conventional)',
        'Grading Plan',
        'Public Improvement Plan (Utilities)',
        'Retaining wall',
        'Parking Lot',
        'Driveway & Access Road',
        'Low Impact Development (LID Design)'
      ],
      size: 'large' // 2x2
    },
    {
      id: 3,
      title: 'Foundation Inspection',
      icon: Home,
      image: service3Image,
      description: "Identify structural issues early and ensure your foundation is safe, compliant, and ready for repair or certification.",
      items: [
        'Slab Foundation Inspection (cracks, water damage, distress)',
        'Raised Foundation Evaluation (piers, beams, structural integrity)',
        'Engineering Reports with clear findings & recommendations',
        'Foundation Certification by a Licensed Engineer'
      ],
      size: 'wide' // 2x1
    },
    {
      id: 4,
      title: 'Other Services',
      icon: Wrench,
      image: service4Image,
      description:"Additional engineering support to resolve compliance issues, support design changes, and enhance project planning.",
      items: [
        'Code Violation Resolution',
        'Structural Design (Beam, Column & Footing)',
        'Balcony Inspection & Permit (SB 721 & SB 326)',
        '3D Modeling & Rendering',
        'Landscape Planning'
      ],
      size: 'wide' // 2x1
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="engineering-hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={heroImage}
            alt="Engineering Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Licensed Engineering Across California & Nevada
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight font-heading uppercase tracking-tight">
              Engineering <br />
              <span className="text-secondary">Services</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
             We provide end-to-end engineering support from plans and permits to land development and foundation inspection ensuring every decision is backed by accuracy, compliance, and real-world feasibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-secondary hover:bg-amber-400 text-primary font-bold px-8 py-6 text-lg uppercase tracking-wide shadow-lg shadow-secondary/20 rounded-lg"
              >
                View Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-slate-500 text-white hover:bg-white/10 hover:border-white px-8 py-6 text-lg uppercase tracking-wide rounded-lg"
              >
                Get Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Layout */}
      <section id="services" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-4 font-heading uppercase">
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert engineering services tailored to your project needs
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
            {services.map((service) => {
              const Icon = service.icon;
              const isLarge = service.size === 'large';

              return (
                <div
                  key={service.id}
                  className={`
                    ${isLarge ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-2 lg:row-span-1'}
                    bg-white rounded-2xl border border-slate-200 hover:border-secondary hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col
                  `}
                >
                  {service.image ? (
                    <div className="relative h-72 w-full overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Icon overlay on absolute top-left like the reference image */}
                      <div className="absolute top-6 left-6 w-14 h-14 bg-secondary/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  ) : null}

                  <div className={`flex flex-col flex-1 ${service.image ? 'p-8 pt-6' : 'p-8'}`}>
                    {!service.image && (
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                        <Icon className="w-7 h-7 text-secondary" />
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-primary mb-4 font-heading group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>

                    {service.description && (
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    )}

                    <ul className="space-y-3 flex-1 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="text-secondary font-semibold text-sm uppercase tracking-wide hover:text-amber-600 transition-colors flex items-center gap-2 group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <TestimonialsCarousel />

      {/* Call-to-Action Section */}
      <section className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-primary font-heading uppercase">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary/80 leading-relaxed">
              Contact us today for a consultation and estimate. Our team of licensed engineers is ready to help you achieve your project goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-primary hover:bg-slate-900 text-white font-bold px-8 py-6 text-lg uppercase tracking-wide shadow-lg rounded-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <a
                href="tel:3102186216"
                className="flex items-center gap-3 text-primary hover:text-slate-900 transition-colors"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold uppercase tracking-wide">Call Us</div>
                  <div className="text-lg font-bold">(310) 218-6216</div>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-primary/20">
              <p className="text-primary/70 text-sm">
                <strong>Email:</strong> pesteban@zionengineeringllc.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}