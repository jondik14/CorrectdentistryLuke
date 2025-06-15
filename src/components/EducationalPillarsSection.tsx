
import React from 'react';

const EducationalPillarsSection = () => {
  return (
    <section className="py-20 bg-dental-blue-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-dental-blue mb-4">Trusted CPD. Taught by Specialists.</h2>
          <p className="text-lg text-dental-gray max-w-3xl mx-auto">
            Our educational approach is built on three fundamental pillars that ensure 
            the highest quality of dental continuing education.
          </p>
        </div>

        {/* Three Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Evidence-Based Pillar */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            {/* Lordicon - Evidence-Based */}
            <div className="mb-6 flex justify-center">
              <lord-icon 
                src="https://cdn.lordicon.com/wjyqkiew.json" 
                trigger="hover" 
                colors="primary:#9cc2f4,secondary:#0066cc" 
                style={{width: '80px', height: '80px'}}
              />
            </div>
            
            <h3 className="text-dental-blue font-bold mb-4">Evidence-Based</h3>
            <p className="text-dental-gray leading-relaxed">
              Every course is grounded in the latest scientific research and 
              clinical evidence, ensuring you learn techniques that are proven 
              to deliver superior patient outcomes.
            </p>
          </div>

          {/* Specialist-Led Pillar */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            {/* Lordicon - Specialist-Led */}
            <div className="mb-6 flex justify-center">
              <lord-icon 
                src="https://cdn.lordicon.com/shcfcebj.json" 
                trigger="hover" 
                colors="primary:#9cc2f4,secondary:#0066cc" 
                style={{width: '80px', height: '80px'}}
              />
            </div>
            
            <h3 className="text-dental-blue font-bold mb-4">Specialist-Led</h3>
            <p className="text-dental-gray leading-relaxed">
              Learn directly from recognized specialists and experts in their 
              respective fields, gaining insights that only come from years 
              of specialized practice and teaching.
            </p>
          </div>

          {/* Practical Focus Pillar */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            {/* Lordicon - Practical Focus */}
            <div className="mb-6 flex justify-center">
              <lord-icon 
                src="https://cdn.lordicon.com/weqkkuwt.json" 
                trigger="hover" 
                colors="primary:#9cc2f4,secondary:#0066cc" 
                style={{width: '80px', height: '80px'}}
              />
            </div>
            
            <h3 className="text-dental-blue font-bold mb-4">Practical Focus</h3>
            <p className="text-dental-gray leading-relaxed">
              Our courses emphasize real-world application with hands-on 
              techniques, case studies, and practical skills you can 
              immediately implement in your practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalPillarsSection;
