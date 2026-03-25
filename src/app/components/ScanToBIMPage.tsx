import { useState } from 'react';
import { useNavigate } from '@/app/RouterContext';
import {
  ArrowRight,
  Building2,
  Layers,
  Gauge,
  CheckCircle2,
  PlusCircle,
  Scan,
  FileStack,
  Box,
  FileImage,
  TrendingUp,
  Image as ImageIcon,
  BarChart3
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { caseStudies } from '@/app/data/caseStudies';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import flow1Image from 'figma:asset/Flow 1.png';
import flow2Image from 'figma:asset/flow 2.png';
import flow3Image from 'figma:asset/flow 3.png';
import flow4Image from 'figma:asset/flow 4.png';

export function ScanToBIMPage() {
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
      title: '3D Data Capture',
      image: flow1Image,
      description: 'Deploy terrestrial laser scanners (Leica, Faro, Trimble), mobile LiDAR, drone photogrammetry, or iPhone/iPad LiDAR to capture point cloud data (.rcp, .e57, .las).',
    },
    {
      number: '02',
      title: 'Point Cloud Registration',
      image: flow2Image,
      description: 'Align all scans into a single coordinate system using Leica Cyclone, Faro Scene, Trimble RealWorks, or Autodesk ReCap for a clean, unified point cloud.',
    },
    {
      number: '03',
      title: 'BIM Modeling',
      image: flow3Image,
      description: 'Trace and interpret point cloud data to create structural elements (beams, columns, slabs), architectural geometry, MEP systems, and site topography in Revit or ArchiCAD.',
    },
    {
      number: '04',
      title: 'QA/QC & Validation',
      image: flow4Image,
      description: 'Check tolerances (typically ±1/8" to ±1/4"), perform clash detection between existing and proposed elements, and generate deviation maps.',
    },
  ];

  const deliverables = [
    'Registered Point Cloud (.RCP, .E57, .LAS) with noise reduction and coordinate setup',
    'BIM Model (Revit/ArchiCAD) – LOD 200–400 with structural framing, walls, floors, roofs, and MEP',
    '2D Drawings – Floor plans, roof plans, structural plans, sections, elevations, and framing diagrams',
    'Deviation/Heat Maps – Slab deflection, out-of-plumb walls, beam sag, roof warping, settlement patterns',
    'Clash Detection Reports – New vs. existing conflicts (beams, ducts, walls, plumbing, utilities)',
    'Quantities & Schedules – Structural member schedules, door/window schedules, material takeoffs, area calculations',
    '3D Visualizations – Walkthroughs, rendered views, and annotated snapshots (optional)',
  ];

  const industries = [
    { icon: Building2, name: 'Renovations & Retrofits' },
    { icon: Layers, name: 'Soft Story Retrofits' },
    { icon: Gauge, name: 'As-Built Verification' },
  ];

  const whyChoose = [
    {
      title: 'Structural Engineering Expertise',
      description: 'Led by a licensed P.E., our Scan-to-BIM service is perfect for reverse engineering beam sizes, undocumented modifications, and complex structural geometry.',
    },
    {
      title: 'Accurate As-Built Documentation',
      description: 'Eliminate guesswork with survey-grade accuracy. Our point clouds reveal irregular geometry, offsets, and hidden conditions critical to retrofit and renovation projects.',
    },
    {
      title: 'Tolerances You Can Trust',
      description: 'Every model is QC\'d with tolerances of ±1/8" to ±1/4", providing dimensional accuracy you can rely on for design and permitting.',
    },
    {
      title: 'Comprehensive Deliverables',
      description: 'From point clouds to full Revit models, 2D plans, and clash detection—choose the service level that matches your project requirements.',
    },
  ];

  const coreProducts = [
    {
      icon: Scan,
      title: "Registered Point Cloud",
      description: "Unified 3D data (.RCP, .E57, .LAS) with noise reduction, true-color visuals, floor-leveling, and coordinate setup."
    },
    {
      icon: Box,
      title: "BIM Model (Revit)",
      description: "LOD 200–400 models including structural framing, architectural geometry, MEP systems, and site topography."
    },
    {
      icon: FileStack,
      title: "2D Drawings",
      description: "Floor plans, sections, elevations, structural plans, and framing diagrams extracted from the BIM model."
    },
    {
      icon: TrendingUp,
      title: "Deviation/Heat Maps",
      description: "Visual analysis of slab deflection, beam sag, out-of-plumb walls, and settlement patterns to justify retrofit decisions."
    },
    {
      icon: BarChart3,
      title: "Clash Detection",
      description: "Identify conflicts between new and existing elements—beams, ducts, walls, plumbing, and utilities."
    },
    {
      icon: FileImage,
      title: "Quantities & Visualizations",
      description: "Automated material takeoffs, schedules, and optional 3D walkthroughs for presentations."
    }
  ];

  const packages = [
    {
      title: 'Base Package',
      items: [
        'Registered point cloud',
        'LOD 200–300 Revit model (architectural + structural)',
        'Floor plans + sections'
      ]
    },
    {
      title: 'Structural Add-Ons',
      items: [
        'Framing model (LOD 300–350)',
        'Deviation maps for slabs, beams, and roofs',
        'Structural plan sheets',
        'Clash detection with proposed retrofit elements'
      ]
    },
    {
      title: 'Premium Package',
      items: [
        'Full LOD 350–400 model',
        'MEP integration',
        '3D walkthroughs',
        'Quantity takeoffs'
      ]
    }
  ];

  const visibleStudies = caseStudies.slice(0, visibleCount);

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
              Scan-to-BIM<br />
              <span className="text-secondary">Convert Reality into Reliable 3D-Models</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light mb-10">
              Bring the built world into your BIM workflows. Zion Engineering's Scan-to-BIM service converts
              high-accuracy point cloud surveys into intelligent, construction-ready Revit models and as-built
              documentation — reducing guesswork, rework, and project delays on complex retrofit, renovation,
              and historic preservation projects across California.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-secondary text-primary hover:bg-white px-10 py-6 text-lg uppercase tracking-wide font-bold shadow-2xl"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              What We Provide
            </h2>
            <h3 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6 font-heading uppercase leading-tight">
              Scan-to-BIM Services
            </h3>
            <p className="text-lg text-slate-600 font-light">
              Deploying precision technology to solve complex engineering and real estate challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreProducts.map((service, index) => (
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

                  <h4 className="text-xl font-bold text-primary mb-3 font-heading uppercase tracking-wide">
                    {service.title}
                  </h4>

                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
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
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center font-heading uppercase">
            Our Scan → Model Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl border border-slate-200 hover:border-secondary transition-all hover:shadow-xl group overflow-hidden flex flex-col"
              >
                {step.image && (
                  <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}

                <div className={`p-8 relative flex-1 flex flex-col ${step.image ? 'pt-6' : ''}`}>
                  <div className="text-6xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-slate-200 transition-colors pointer-events-none">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3 relative z-10 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 relative z-10 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
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
      </section>

      {/* Industries We Serve */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
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
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
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
      </section>

      {/* Service Packages */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 font-heading uppercase">
            Service Packages
          </h3>
          <p className="text-lg text-slate-600 mb-12 max-w-4xl">
            Choose the package that best fits your project needs. Each package is tailored to deliver
            the right level of detail for your engineering and construction requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-secondary transition-all hover:shadow-xl"
              >
                <h4 className="text-2xl font-bold text-primary mb-6 font-heading uppercase">
                  {pkg.title}
                </h4>
                <ul className="space-y-3">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline & Pricing */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
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
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary to-amber-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-primary">
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
    </div>
  );
}