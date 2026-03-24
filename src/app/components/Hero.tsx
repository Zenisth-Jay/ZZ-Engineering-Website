import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroImage from 'figma:asset/d522a823ecc00c4b530485c18f8ffedb2eb4a8ef.png';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={heroImage}
          alt="Modern Construction Site with BIM Overlay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 text-secondary rounded-full text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Licensed in California & Nevada
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight font-heading uppercase tracking-tight">
              Precision Engineering <br />
              <span className="text-secondary">Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl font-light">
              Zion Engineering Services, LLC delivers integrated engineering, design, and reality-capture solutions for residential, commercial, and land development projects. We provide precise site data, permit-ready plans, and accurate digital models that move projects efficiently from documentation to construction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-secondary hover:bg-amber-400 text-primary font-bold px-8 py-6 text-lg uppercase tracking-wide shadow-lg shadow-secondary/20 rounded-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-slate-500 text-white hover:bg-white/10 hover:border-white px-8 py-6 text-lg uppercase tracking-wide rounded-lg"
              >
                Start Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white font-heading">15+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years Exp.</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white font-heading">500+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Projects</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>Licensed P.E.</span>
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold pl-7">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Abstract/Technical Graphic Side */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-primary/40 backdrop-blur-md rounded-2xl border border-white/10 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
               <ImageWithFallback 
                src={heroImage}
                alt="Architecture"
                className="rounded-xl w-full object-cover h-[500px]"
              />
              {/* Technical Overlays */}
              <div className="absolute top-8 right-8 bg-black/80 text-white p-4 rounded border-l-4 border-secondary backdrop-blur-sm">
                <div className="text-xs text-slate-400 uppercase mb-1">Status</div>
                <div className="font-mono text-secondary">SCAN_COMPLETE</div>
                <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                  <div className="bg-secondary w-[85%] h-full" />
                </div>
              </div>
            </div>
            
            {/* Background Decor Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}