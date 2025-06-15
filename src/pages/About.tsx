
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Microscope, GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-dental-blue-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-blue mb-8">
              Meet Our Expert Faculty
            </h1>
            <p className="text-xl text-dental-gray leading-relaxed">
              Learn from globally respected specialists with decades of clinical and academic experience, 
              dedicated to advancing dental education through evidence-based teaching.
            </p>
          </div>
        </div>
      </section>

      {/* Main Faculty Spotlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="card-faculty">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Faculty Photo */}
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/be0a9319-69c6-47c3-9019-671d5ffc8fd6.png"
                    alt="Dr. Michael Mandikos"
                    className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Faculty Info */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-dental-blue mb-3">
                    Dr. Michael Mandikos
                  </h2>
                  <p className="text-dental-gray font-medium mb-6 text-lg">
                    BDSc (Hons), MS, Cert Pros, FRACDS, FICD, FPFA
                  </p>
                  
                  <div className="space-y-4 text-dental-gray leading-relaxed">
                    <p>
                      Dr. Mandikos is a Specialist Prosthodontist with over 25 years of clinical and academic experience. 
                      He's a globally respected educator, journal reviewer, and founder of the CorrectDentistry library.
                    </p>
                    
                    <p>
                      His expertise spans advanced restorative procedures, dental implants, and full mouth rehabilitation. 
                      Dr. Mandikos has published extensively in peer-reviewed journals and lectures internationally on 
                      evidence-based prosthodontic techniques.
                    </p>
                    
                    <p>
                      As the driving force behind CorrectDentistry, Dr. Mandikos is committed to bridging the gap between 
                      academic research and clinical practice, ensuring dental professionals have access to the most 
                      current and effective treatment protocols.
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="mt-8">
                    <h4 className="text-dental-blue font-semibold mb-4">Key Achievements</h4>
                    <ul className="space-y-2 text-dental-gray">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Fellow of the Royal Australasian College of Dental Surgeons</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Fellow of the International College of Dentists</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Fellow of the Pierre Fauchard Academy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Published researcher in prosthodontics and implant dentistry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-dental-blue-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dental-blue mb-8">
              Our Educational Philosophy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100/50 rounded-full p-4">
                    <Microscope className="text-blue-600" size={48} />
                  </div>
                </div>
                <h4 className="text-dental-blue font-semibold mb-4">Evidence-Based Learning</h4>
                <p className="text-dental-gray">
                  Every course is grounded in the latest peer-reviewed research and proven clinical outcomes, 
                  ensuring you receive only the most reliable and effective techniques.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100/50 rounded-full p-4">
                    <GraduationCap className="text-blue-600" size={48} />
                  </div>
                </div>
                <h4 className="text-dental-blue font-semibold mb-4">Specialist Expertise</h4>
                <p className="text-dental-gray">
                  Learn directly from board-certified specialists who bring decades of clinical experience 
                  and academic excellence to every lesson.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100/50 rounded-full p-4">
                    <Target className="text-blue-600" size={48} />
                  </div>
                </div>
                <h4 className="text-dental-blue font-semibold mb-4">Practical Application</h4>
                <p className="text-dental-gray">
                  Focus on immediately applicable knowledge that enhances your daily practice and 
                  improves patient outcomes from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dental-blue mb-4">
              Ready to Learn from the Experts?
            </h3>
            <p className="text-dental-gray mb-8">
              Join thousands of dental professionals who trust CorrectDentistry for their continuing education needs.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Explore Our Courses
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
