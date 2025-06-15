
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustedCpdSection from '../components/TrustedCpdSection';
import CoursesSection from '../components/CoursesSection';
import FacultySection from '../components/FacultySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedCpdSection />
      <CoursesSection />
      <FacultySection />
      <Footer />
    </div>
  );
};

export default Index;
