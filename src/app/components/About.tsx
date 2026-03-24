import { Award, Shield, Users, TrendingUp } from 'lucide-react';
import principalPhoto from 'figma:asset/de97510f486e18908d9dac6867ddcaffdfc659d6.png';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'Delivering engineering solutions that meet and exceed client expectations.',
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Building long-lasting relationships based on honesty and clear communication.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your project success is our priority, every step of the way.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology like Scan-to-BIM for better outcomes.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main content with text and photo */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          {/* Left: Text content */}
          <div className="flex flex-col lg:col-span-7 md:pt-2">
            <h2 className="text-lg font-bold text-secondary uppercase tracking-widest mb-4">
              Our Legacy
            </h2>
            <h3 className="text-3xl lg:text-6xl font-extrabold text-primary mb-6 font-heading uppercase leading-tight">
              Legacy of Licensed Excellence
            </h3>
            <p className="text-2xl text-slate-600 mb-6 leading-relaxed">
              Zion Engineering Services, LLC is a privately owned engineering firm providing services
              to the states of California and Nevada. Our principal, <strong>Paul Esteban, P.E.</strong>,
              is committed to providing high-quality services that meet and exceed clients' expectations.
            </p>
            <p className="text-2xl text-slate-600 leading-relaxed">
              We specialize in structural engineering, plan review, and innovative reality capture
              solutions. With our new Scan-to-BIM service, we're helping clients transform existing
              structures into accurate digital models, reducing risk and accelerating project timelines.
            </p>
          </div>

          {/* Right: Photo and info card */}
          <div className="flex flex-col lg:col-span-5 md:pt-2" >
            <div className="relative overflow-hidden shadow-xl rounded-sm">
              <img
                src={principalPhoto}
                alt="Paul Esteban, P.E."
                className="w-full aspect-[2/2] object-cover object-top"
              />
            </div>

            {/* Info card below photo */}
            <div className="mt-4 bg-white p-5 rounded-lg border-l-4 border-secondary shadow-md flex items-center gap-4 shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="font-bold text-primary text-sm mt-0.5">Paul Esteban, P.E.</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Principal Engineer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:border-secondary group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <value.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h4 className="font-bold text-primary mb-2 font-heading uppercase tracking-wide text-sm">{value.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}