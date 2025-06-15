
import { Microscope, GraduationCap, Target } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Evidence-Based',
    description: 'Our curriculum is built on the latest peer-reviewed research and clinical studies to ensure you receive the most current and effective training.',
  },
  {
    icon: GraduationCap,
    title: 'Specialist-Led',
    description: 'Learn directly from leading prosthodontists and specialists who bring decades of real-world clinical and academic experience.',
  },
  {
    icon: Target,
    title: 'Practical Focus',
    description: 'Gain skills and techniques that you can immediately apply in your practice for better patient outcomes and professional growth.',
  },
];

const TrustedCpdSection = () => {
  return (
    <section id="trusted-cpd" className="py-20 bg-clinical-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-dental-blue mb-4 fade-in">
            Trusted CPD. Taught by Specialists.
          </h2>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Elevate your practice with our core principles for continuing professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 fade-in"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100/50 rounded-full p-4">
                  <feature.icon className="text-blue-600" size={48} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dental-blue mb-4">{feature.title}</h3>
              <p className="text-dental-gray leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCpdSection;
