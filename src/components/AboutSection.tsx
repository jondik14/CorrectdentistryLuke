
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dental-blue-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-dental-blue fade-in">
            Trusted CPD. Taught by Specialists.
          </h2>
          
          <div className="text-lg md:text-xl text-dental-gray leading-relaxed space-y-6 slide-up">
            <p>
              Continuing Professional Development (CPD) is more accessible than ever, yet with so many sources—from research to opinion—it can be hard to find what truly works.
            </p>
            
            <p>
              CorrectDentistry offers a curated library of <strong className="text-dental-blue">evidence-based, specialist-delivered resources</strong> designed for practicing dentists. Whether you need a deep dive, a quick refresh, or guidance on a new product, you're in the right place.
            </p>
          </div>

          {/* Key benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 fade-in stagger-delay-1">
              <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h4 className="text-dental-blue mb-2">Evidence-Based</h4>
              <p className="text-dental-gray">All content is grounded in the latest research and proven clinical practices.</p>
            </div>
            
            <div className="text-center p-6 fade-in stagger-delay-2">
              <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h4 className="text-dental-blue mb-2">Specialist-Led</h4>
              <p className="text-dental-gray">Learn directly from recognized experts in their respective fields.</p>
            </div>
            
            <div className="text-center p-6 fade-in stagger-delay-3">
              <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h4 className="text-dental-blue mb-2">Practical Focus</h4>
              <p className="text-dental-gray">Immediately applicable knowledge for your daily practice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
