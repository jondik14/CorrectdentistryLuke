
const FacultySection = () => {
  return (
    <section id="faculty" className="py-20 bg-dental-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-dental-blue fade-in">
            Learn from the Best
          </h2>
          <p className="text-lg text-dental-gray max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Our faculty consists of globally recognized specialists with decades of clinical and academic experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-faculty fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Faculty photo placeholder */}
              <div className="w-48 h-48 bg-gradient-to-br from-dental-blue to-dental-blue-dark rounded-lg flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Faculty info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-dental-blue mb-2">
                  Dr. Michael Mandikos
                </h3>
                
                <p className="text-dental-gray text-lg mb-4">
                  BDSc (Hons), MS, Cert Pros, FRACDS, FICD, FPFA
                </p>

                <div className="space-y-4 text-dental-gray leading-relaxed">
                  <p>
                    Dr. Mandikos is a Specialist Prosthodontist with over 25 years of clinical and academic experience. He's a globally respected educator, journal reviewer, and founder of the CorrectDentistry library.
                  </p>
                  
                  <p>
                    His expertise in advanced prosthodontics and commitment to evidence-based practice has made him a sought-after speaker at international conferences and a trusted mentor to dental professionals worldwide.
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    View Faculty Profile
                  </button>
                  <button className="btn-secondary">
                    Browse Dr. Mandikos' Courses
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional faculty teaser */}
          <div className="text-center mt-12 fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-dental-gray mb-4">
              More world-class faculty joining our platform soon.
            </p>
            <button className="btn-secondary">
              Meet the Full Faculty
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
