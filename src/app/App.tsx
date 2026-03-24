import { RouterProvider, useLocation } from '@/app/RouterContext';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { ServicesSection } from '@/app/components/ServicesSection';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { CaseStudyDetail } from '@/app/components/CaseStudyDetail';
import { EngineeringServices } from '@/app/components/EngineeringServices';
import { ScanToBIMPage } from '@/app/components/ScanToBIMPage';
import { ConstructionServicesPage } from '@/app/components/ConstructionServicesPage';
import { TestimonialsCarousel } from '@/app/components/TestimonialsCarousel';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isEngineeringServices = location.pathname === '/engineering-services';
  const isScanToBIM = location.pathname === '/scan-to-bim';
  const isConstructionServices = location.pathname === '/construction-services';

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-secondary selection:text-primary">
      <Header />
      {isHomePage ? (
        <main>
          <Hero />
          <About />
          <ServicesSection />
          <TestimonialsCarousel />
          <Contact />
        </main>
      ) : isEngineeringServices ? (
        <main>
          <EngineeringServices />
          <Contact />
        </main>
      ) : isScanToBIM ? (
        <main>
          <ScanToBIMPage />
          <Contact />
        </main>
      ) : isConstructionServices ? (
        <main>
          <ConstructionServicesPage />
          <Contact />
        </main>
      ) : (
        <CaseStudyDetail />
      )}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}