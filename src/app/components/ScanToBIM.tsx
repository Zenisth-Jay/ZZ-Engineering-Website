import { useState } from 'react';
import { useNavigate } from '@/app/RouterContext';
import { 
  ArrowRight, 
  Building2, 
  Layers, 
  Gauge,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  PlusCircle
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { caseStudies } from '@/app/data/caseStudies';

export function ScanToBIM() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const process = [
    {
      number: '01',
      title: 'Project Scoping & QA Plan',
      description: 'Define LOD, coordinate system, tolerances, and deliverable list tailored to your project needs.',
    },
    {
      number: '02',
      title: 'On-Site Capture',
      description: 'Deploy terrestrial LiDAR, mobile LiDAR, or photogrammetry to collect geo-referenced point clouds.',
    },
    {
      number: '03',
      title: 'Registration & Cleaning',
      description: 'Align scans, remove noise, and verify control and accuracy to ensure data quality.',
    },
    {
      number: '04',
      title: 'Modeling (Scan → BIM)',
      description: 'Convert point cloud to intelligent Revit elements (walls, floors, structural members, MEP) to agreed LOD.',
    },
    {
      number: '05',
      title: 'QA & Validation',
      description: 'Perform clash checks, dimensional checks against point cloud, and client review cycles.',
    },
    {
      number: '06',
      title: 'Delivery & Handover',
      description: 'Provide Revit models, point cloud files, 2D as-builts, and optional digital twin packages.',
    },
  ];

  const deliverables = [
    'Registered point cloud (E57 / LAS / RCP) with panoramic imagery',
    'Revit model (LOD 200–300 / element classification and parameter mapping)',
    '2D CAD floor plans, elevations, and sections (as-built)',
    'As-built BIM report (accuracy, tolerances, control points)',
    'Quantity takeoffs and area schedules (optional)',
    'Digital twin export for FM (IFC / COBie / asset CSV)',
  ];

  const industries = [
    { icon: Building2, name: 'Architecture & Multi-Family Housing' },
    { icon: Layers, name: 'Historic Preservation' },
    { icon: Gauge, name: 'Colleges & Universities' },
  ];

  const whyChoose = [
    {
      title: 'Local, Licensed Engineering Oversight',
      description: 'California/Nevada practice led by a P.E., ensuring deliverables are practical for permitting and construction.',
    },
    {
      title: 'Survey + BIM Integration',
      description: 'We combine reality-capture best practices with CAD/BIM workflows for usable models, not just point clouds.',
    },
    {
      title: 'Quality & Traceability',
      description: 'Every model is QC\'d against the point cloud with clear accuracy reporting and documentation.',
    },
    {
      title: 'Turnkey Deliverables',
      description: 'Choose your service level: from raw point clouds and 2D as-builts to coordinated Revit models and digital twins.',
    },
  ];

  const visibleStudies = caseStudies.slice(0, visibleCount);

  return (
    <section id="scan-to-bim" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-primary mb-6 font-heading">
            Scan-to-BIM — Convert Reality into Reliable 3D-Models
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Bring the built world into your BIM workflows. Zion Engineering's Scan-to-BIM service converts 
            high-accuracy point cloud surveys into intelligent, construction-ready Revit models and as-built 
            documentation — reducing guesswork, rework, and project delays on complex retrofit, renovation, 
            and historic preservation projects across California.
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-10 text-center font-heading uppercase">
            Recent Case Studies
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {visibleStudies.map((study) => (
              <div 
                key={study.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                onClick={() => navigate(`/case-study/${study.id}`)}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-secondary/90 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors font-heading">
                    {study.title}
                  </h4>
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                    {study.shortDescription}
                  </p>
                  <div className="flex items-center text-primary font-bold uppercase text-sm tracking-wide group/btn">
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-secondary" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {visibleCount < caseStudies.length && (
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setVisibleCount(caseStudies.length)}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold tracking-wide uppercase transition-all"
              >
                View All Case Studies
                <PlusCircle className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center font-heading uppercase">
            Our Scan → Model Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-xl border border-slate-200 hover:border-secondary transition-all hover:shadow-xl group"
              >
                <div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-slate-50 transition-colors">
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

        {/* Deliverables */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading uppercase">Deliverables</h3>
          <div className="bg-primary p-8 lg:p-12 rounded-2xl text-white relative overflow-hidden">
            {/* Background Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary font-bold shadow-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-slate-200 pt-1 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading uppercase">Industries We Serve</h3>
          <p className="text-lg text-slate-600 mb-10 max-w-4xl">
            Serving California projects with seismic-aware coordination and code-compliant deliverables. 
            Our modeling approach supports CBC/Title-24 workflows for projects that require accurate 
            as-built documentation before design or permitting.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 hover:border-secondary hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                  <industry.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <span className="text-sm font-bold text-slate-700">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center font-heading uppercase">
            Why Choose Zion for Scan-to-BIM?
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

        {/* Timeline & Pricing */}
        <div className="mb-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading uppercase">
            Typical Project Timeline & Pricing
          </h3>
          <div className="bg-slate-50 p-8 lg:p-12 rounded-2xl border border-slate-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Small Building / TI</h4>
                <p className="text-slate-600">Capture + modeling in 1–2 weeks (depending on access)</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Mid-Size Commercial</h4>
                <p className="text-slate-600">2–4 weeks for full Revit deliverables</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-lg">Industrial & Campus</h4>
                <p className="text-slate-600">Timed to scope and site control; fixed quote after scoping</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic border-t border-slate-200 pt-6">
              Exact schedule and pricing are site-dependent — submit your project brief and we'll respond 
              with a clear scope and cost estimate.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-secondary to-amber-600 p-12 lg:p-16 rounded-2xl text-center text-primary shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 font-heading uppercase">Ready to Get Started?</h3>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto font-medium">
            Send us project details or an RFP and we'll reply with a clear scope and fixed quote.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-primary text-white hover:bg-slate-800 px-10 py-6 text-lg uppercase tracking-wide font-bold shadow-lg"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}