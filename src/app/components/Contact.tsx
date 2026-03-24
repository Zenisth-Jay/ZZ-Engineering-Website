import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-734039a7/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
          setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again or call us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">
            Start Your Consultation
          </h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6 font-heading uppercase">
            Let's Discuss Your Project
          </h3>
          <p className="text-lg text-slate-600">
            Reach out for a consultation, quote, or to learn more about our engineering services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h4 className="font-bold text-primary mb-6 text-xl font-heading uppercase">Get in Touch</h4>
              <div className="space-y-6">
                <a
                  href="tel:3102186216"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-secondary hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1 uppercase tracking-wide font-bold">Phone</div>
                    <div className="font-semibold text-primary">(310) 218-6216</div>
                  </div>
                </a>

                <a
                  href="mailto:pesteban@zionengineeringllc.com"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-secondary hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1 uppercase tracking-wide font-bold">Email</div>
                    <div className="font-semibold text-primary text-sm break-all">
                      pesteban@zionengineeringllc.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1 uppercase tracking-wide font-bold">Service Areas</div>
                    <div className="font-semibold text-primary">California & Nevada</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-slate-900 p-8 rounded-xl text-white shadow-lg border-l-4 border-secondary">
              <h4 className="font-bold mb-2 text-secondary uppercase tracking-wide">Licensed Professional Engineer</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Paul Esteban, P.E. leads every project with expertise, integrity, and a commitment to excellence.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-200">
              {status === 'success' ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-3xl font-bold text-primary mb-2 font-heading">Thank You!</h4>
                  <p className="text-slate-600 mb-8">
                    We've received your message and will get back to you shortly.
                  </p>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStatus('idle')}
                    className="border-2 border-slate-200 text-slate-600 hover:text-primary hover:border-primary"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  {status === 'error' && (
                     <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start gap-3">
                       <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                       <p className="text-sm">{errorMessage}</p>
                     </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        disabled={status === 'loading'}
                        className="w-full bg-slate-50 border-slate-200 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        disabled={status === 'loading'}
                        className="w-full bg-slate-50 border-slate-200 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(310) 123-4567"
                        disabled={status === 'loading'}
                        className="w-full bg-slate-50 border-slate-200 focus:border-secondary focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-secondary text-primary disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="scan-to-bim">Scan-to-BIM Services</option>
                        <option value="structural">Structural Engineering</option>
                        <option value="plan-review">Plan Review & Consulting</option>
                        <option value="retrofit">Retrofit & Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      rows={6}
                      disabled={status === 'loading'}
                      className="w-full bg-slate-50 border-slate-200 focus:border-secondary focus:ring-secondary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full bg-secondary hover:bg-amber-600 text-primary font-bold uppercase tracking-wide text-lg py-6 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
