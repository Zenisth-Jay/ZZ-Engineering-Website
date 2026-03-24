import { useEffect } from 'react';
import { useParams, Link, useNavigate } from '@/app/RouterContext';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  FileText,
  Layers,
  Wrench,
  CheckSquare,
  AlertTriangle,
  Target,
  Home
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Separator } from '@/app/components/ui/separator';
import { caseStudies } from '@/app/data/caseStudies';

export function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the study
  const studyIndex = caseStudies.findIndex(s => s.id === Number(id));
  const study = caseStudies[studyIndex];
  
  // Find next/prev studies for navigation
  const nextStudy = studyIndex < caseStudies.length - 1 ? caseStudies[studyIndex + 1] : caseStudies[0];
  const prevStudy = studyIndex > 0 ? caseStudies[studyIndex - 1] : caseStudies[caseStudies.length - 1];

  // Scroll to top when id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center pt-32">
        <h2 className="text-3xl font-bold text-primary mb-4">Case Study Not Found</h2>
        <Button onClick={() => navigate('/')}>Return Home</Button>
      </div>
    );
  }

  // Filter other studies for the "More Case Studies" section
  const otherStudies = caseStudies.filter(s => s.id !== study.id);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Navigation Bar / Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 mb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/#scan-to-bim')}
            className="text-slate-600 hover:text-primary hover:bg-slate-100 font-medium pl-0 md:pl-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Projects
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/case-study/${prevStudy.id}`)}
              className="text-slate-600 border-slate-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate(`/case-study/${nextStudy.id}`)}
              className="text-slate-600 border-slate-200"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-slate-900 overflow-hidden">
        <img 
          src={study.image} 
          alt={study.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12 md:pb-20">
          <div className="flex flex-col items-start animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 text-primary bg-secondary hover:bg-secondary/90 border-none px-4 py-1.5 text-sm font-bold tracking-wide uppercase">
              {study.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-heading max-w-5xl leading-tight mb-6 drop-shadow-lg">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light leading-relaxed drop-shadow-md">
              {study.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
          {study.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-secondary/30 pl-4">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1">{stat.label}</span>
              <span className="text-lg md:text-xl font-bold text-primary break-words">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6 font-heading border-l-4 border-secondary pl-4">Project Overview</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
            {study.fullDescription}
          </p>
        </div>

        {/* Secondary Images Grid */}
        {study.secondaryImages && study.secondaryImages.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {study.secondaryImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96 border border-slate-100 group">
                <img 
                  src={img} 
                  alt={`Project detail ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
        )}

        <Separator className="my-16" />

        {/* Detailed Breakdown */}
        {study.details && (
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Brief */}
              {study.details.brief && (
                <div>
                  <h3 className="flex items-center gap-3 font-bold text-primary mb-6 text-2xl font-heading">
                    <FileText className="w-6 h-6 text-secondary" />
                    Client Brief
                  </h3>
                  <ul className="space-y-4">
                    {study.details.brief.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-700 leading-relaxed text-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solution */}
              {study.details.solution && (
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                  <h3 className="flex items-center gap-3 font-bold text-primary mb-4 text-xl font-heading">
                    <CheckSquare className="w-6 h-6 text-green-600" />
                    Our Solution
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg italic">
                    {study.details.solution}
                  </p>
                </div>
              )}

              {/* Scope */}
              {study.details.scope && (
                <div>
                  <h3 className="flex items-center gap-3 font-bold text-primary mb-6 text-2xl font-heading">
                    <Target className="w-6 h-6 text-secondary" />
                    Scope of Work
                  </h3>
                  <ul className="space-y-4">
                    {study.details.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-700 leading-relaxed text-lg">
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Deliverables */}
              {study.details.deliverables && (
                <div>
                  <h3 className="flex items-center gap-3 font-bold text-primary mb-6 text-2xl font-heading">
                    <Layers className="w-6 h-6 text-secondary" />
                    Key Deliverables
                  </h3>
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <ul className="space-y-4">
                      {study.details.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Challenges */}
              {study.details.challenges && (
                <div>
                  <h3 className="flex items-center gap-3 font-bold text-primary mb-6 text-2xl font-heading">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                    Challenges & Execution
                  </h3>
                  <ul className="space-y-4">
                    {study.details.challenges.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-700 leading-relaxed text-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Tools */}
              {study.details.tools && (
                <div>
                  <h3 className="flex items-center gap-3 font-bold text-primary mb-6 text-2xl font-heading">
                    <Wrench className="w-6 h-6 text-secondary" />
                    Tools & Technology
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {study.details.tools.map((tool, i) => (
                      <Badge key={i} variant="outline" className="border-slate-200 text-slate-700 px-4 py-2 text-base hover:bg-slate-50 transition-colors">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-20 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.1.0&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need similar results for your project?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            We specialize in high-precision Scan-to-BIM services for complex industrial and heritage projects.
          </p>
          <Button 
            size="lg"
            className="bg-secondary text-primary hover:bg-white hover:text-primary px-10 py-6 text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/#contact')}
          >
            Request a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Other Case Studies */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary font-heading uppercase tracking-wide">
                Explore Other Projects
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 rounded-full"></div>
            </div>
            <Button variant="outline" onClick={() => navigate('/#scan-to-bim')} className="hidden md:flex">
              View All Projects
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStudies.slice(0, 3).map((other) => (
              <div 
                key={other.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => navigate(`/case-study/${other.id}`)}
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img 
                    src={other.image} 
                    alt={other.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-white/90 text-primary hover:bg-white border-none shadow-sm backdrop-blur-sm">
                      {other.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors font-heading line-clamp-2">
                    {other.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                    {other.shortDescription}
                  </p>
                  <div className="flex items-center text-primary font-bold text-sm tracking-wide mt-auto group/btn">
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-secondary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" onClick={() => navigate('/#scan-to-bim')} className="w-full">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}