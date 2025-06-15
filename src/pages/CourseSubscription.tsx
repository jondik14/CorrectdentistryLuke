
import { useParams, useNavigate } from 'react-router-dom';
import { Check, Star, Shield, Clock, Users, Award, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const CourseSubscription = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Mock course data - in real app this would come from your backend
  const course = {
    title: 'Impressions for Veneers',
    subtitle: 'Master the art of creating precise impressions for veneer procedures',
    price: '$149',
    originalPrice: '$199',
    instructor: 'Dr. Michael Mandikos',
    rating: 4.9,
    students: '1,200+',
    duration: '45 min'
  };

  const features = [
    {
      icon: <Check className="text-green-500" size={20} />,
      title: 'Lifetime Access',
      description: 'Watch anytime, anywhere, on any device'
    },
    {
      icon: <Check className="text-green-500" size={20} />,
      title: 'Expert Instruction',
      description: 'Learn from renowned dental specialists'
    },
    {
      icon: <Check className="text-green-500" size={20} />,
      title: 'CPD Certificate',
      description: 'Earn continuing education credits'
    },
    {
      icon: <Check className="text-green-500" size={20} />,
      title: 'Downloadable Resources',
      description: 'Access course materials and templates'
    },
    {
      icon: <Check className="text-green-500" size={20} />,
      title: '30-Day Guarantee',
      description: 'Full refund if not completely satisfied'
    },
    {
      icon: <Check className="text-green-500" size={20} />,
      title: '24/7 Support',
      description: 'Get help whenever you need it'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'General Dentist',
      content: 'This course completely transformed my approach to veneer impressions. The techniques are practical and immediately applicable.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Prosthodontist',
      content: 'Excellent content delivered by true experts. The step-by-step approach makes complex procedures manageable.',
      rating: 5
    }
  ];

  const handleSubscribe = () => {
    // In a real app, this would integrate with your Stripe checkout
    console.log('Redirecting to Stripe checkout...');
    // Example: window.open(stripeCheckoutUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center gap-2 text-dental-blue hover:text-dental-blue-dark transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Courses
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Course Header */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-start gap-6">
                  <img
                    src="/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png"
                    alt={course.title}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-dental-blue mb-2">
                      {course.title}
                    </h1>
                    <p className="text-lg text-dental-gray mb-4">
                      {course.subtitle}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-dental-gray">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        {course.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-current" size={16} />
                        {course.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What You'll Get */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-dental-blue mb-6">
                  What You'll Get
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {feature.icon}
                      <div>
                        <h3 className="font-semibold text-dental-blue mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-dental-gray">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="text-2xl font-bold text-dental-blue mb-6">
                  What Other Dentists Say
                </h2>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 bg-dental-blue-light/10 rounded-xl">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={16} />
                        ))}
                      </div>
                      <p className="text-dental-gray italic mb-4">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold text-dental-blue">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-dental-gray">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dental-blue/20">
                  
                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-dental-blue">
                        {course.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      Save $50 - Limited Time Offer
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Shield className="text-green-500" size={20} />
                      <span className="text-sm font-medium text-green-700">
                        30-Day Money-Back Guarantee
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Award className="text-dental-blue" size={20} />
                      <span className="text-sm font-medium text-dental-blue">
                        CPD Accredited Course
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={handleSubscribe}
                    className="w-full h-14 text-lg font-semibold bg-dental-blue hover:bg-dental-blue-dark mb-4"
                  >
                    Subscribe & Start Learning
                  </Button>

                  <p className="text-xs text-dental-gray text-center">
                    Secure payment powered by Stripe
                  </p>

                  {/* Instructor Info */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <img
                        src="/lovable-uploads/be0a9319-69c6-47c3-9019-671d5ffc8fd6.png"
                        alt={course.instructor}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-dental-blue">
                          {course.instructor}
                        </p>
                        <p className="text-sm text-dental-gray">
                          Professor of Prosthodontics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseSubscription;
