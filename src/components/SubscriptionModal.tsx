
import { X, Lock, CheckCircle, Award, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
}

const SubscriptionModal = ({ isOpen, onClose, courseTitle = "this course" }: SubscriptionModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubscribe = () => {
    navigate('/course-subscription/1');
    onClose();
  };

  const benefits = [
    'Unlimited access to all premium courses',
    'Downloadable resources and templates', 
    'CPD certificates for all completed courses',
    'Expert-led training from dental specialists',
    'Mobile access for learning on-the-go'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-dental-blue-light/20 to-dental-blue/10 p-6 text-center">
          <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-dental-blue mb-2">
            Subscribe to Unlock Course Access
          </h2>
          <p className="text-dental-gray">
            Get unlimited access to {courseTitle} and our entire course library
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Benefits */}
          <div className="space-y-3 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-sm text-dental-gray leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 p-3 bg-dental-blue-light/10 rounded-lg">
              <BookOpen className="text-dental-blue" size={16} />
              <span className="text-xs font-medium text-dental-blue">On-demand</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-dental-blue-light/10 rounded-lg">
              <Award className="text-dental-blue" size={16} />
              <span className="text-xs font-medium text-dental-blue">CPD Credits</span>
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={handleSubscribe}
            className="w-full h-12 bg-gradient-to-r from-[#3D8BFF] to-[#5BBEFF] hover:from-[#2E7AFF] hover:to-[#4AADFF] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Subscribe & Unlock All Courses
          </Button>
          
          <p className="text-xs text-dental-gray text-center mt-3">
            30-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
