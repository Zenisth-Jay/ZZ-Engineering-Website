import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading uppercase text-center lg:text-left">What We Do</h3>
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 lg:p-12 order-2 lg:order-1 flex flex-col justify-center">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              We capture existing site conditions with survey-grade reality capture (terrestrial LiDAR / 
              mobile LiDAR / photogrammetry where applicable) and transform point clouds into clear, 
              parametric BIM deliverables tailored to your project's required LOD.
            </p>
            <h4 className="font-bold text-primary mb-6 text-lg uppercase tracking-wide">Typical Outcomes:</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700">Certified as-built Revit models (LOD 200–300+ as required)</span>
              </div>
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700">Registered point cloud files (E57/LAS/RCP) and colorized panoramic photos</span>
              </div>
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700">2D CAD plans and annotated as-built drawings for permitting & construction</span>
              </div>
              <div className="flex items-start gap-3 group">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700">Digital twin packages for facilities and asset management</span>
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] order-1 lg:order-2">
             <ImageWithFallback 
               src="https://images.unsplash.com/photo-1735448214380-f3f9818f74a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaURBUiUyMHNjYW5uZXIlMjBjb25zdHJ1Y3Rpb24lMjBwb2ludCUyMGNsb3VkJTIwM2QlMjBtb2RlbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODgzMTU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
               alt="Scan-to-BIM Reality Capture"
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
             <div className="absolute bottom-6 left-6 right-6 lg:hidden">
               <span className="text-white font-bold text-lg drop-shadow-md">Precision Reality Capture</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}