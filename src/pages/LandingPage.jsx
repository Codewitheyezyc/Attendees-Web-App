import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
}

export default LandingPage;
