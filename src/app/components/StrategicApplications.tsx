import {
  ClipboardList,
  FileCheck,
  Database,
  Camera,
} from "lucide-react";

export function StrategicApplications() {
  const applications = [
    {
      icon: ClipboardList,
      title: "Renovation & Estimation",
      description:
        "High-fidelity scans to assess existing conditions, define project scope, and provide accurate cost estimates.",
    },
    {
      icon: FileCheck,
      title: "Real Estate Transactions",
      description:
        "Detailed digital documentation to support due diligence during the purchase or sale of a building.",
    },
    {
      icon: Database,
      title: "Digital Twin & BIM",
      description:
        'Accurate 3D modeling to create a functional "Digital Twin" for structural analysis and facility management.',
    },
    {
      icon: Camera,
      title: "Visualization & Presentation",
      description:
        "Precise reality capture for architectural presentations and marketing.",
    },
  ];

  return (
    <section
      id="applications"
      className="py-20 lg:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">
            Our Services
          </h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 font-heading uppercase leading-tight">
            Strategic Applications
          </h3>
          <p className="text-lg text-slate-400 font-light">
            Deploying precision technology to solve complex
            engineering and real estate challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-secondary/50 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <app.icon className="w-24 h-24 text-white" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 border border-secondary/30 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <app.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3 font-heading uppercase tracking-wide">
                  {app.title}
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {app.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}