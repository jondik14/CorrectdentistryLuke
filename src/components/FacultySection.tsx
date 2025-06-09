
const FacultySection = () => {
  return (
    <section id="faculty" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-dental-blue mb-4 fade-in">
            Faculty Spotlight
          </h2>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Learn from globally respected specialists with decades of clinical and academic experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-faculty fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Faculty Photo */}
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/1f2e3d4c-5b6a-7c8d-9e0f-1a2b3c4d5e6f.png"
                  alt="Dr. Michael Mandikos"
                  className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Faculty Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-dental-blue mb-2">
                  Dr. Michael Mandikos
                </h3>
                <p className="text-dental-gray font-medium mb-4">
                  BDSc (Hons), MS, Cert Pros, FRACDS, FICD, FPFA
                </p>
                <p className="text-dental-gray leading-relaxed mb-6">
                  Dr. Mandikos is a Specialist Prosthodontist with over 25 years of clinical and academic experience. 
                  He's a globally respected educator, journal reviewer, and founder of the CorrectDentistry library. 
                  His expertise spans advanced restorative procedures, dental implants, and full mouth rehabilitation.
                </p>
                <button className="btn-secondary">
                  Learn More About Dr. Mandikos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
