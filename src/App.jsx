import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <WhyUs />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}