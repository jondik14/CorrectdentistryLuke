
import { Play, Clock, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  status?: 'available' | 'coming-soon';
  delay?: number;
  thumbnailImage?: string;
  courseType?: 'Quick' | 'Core' | 'Full';
}

const CourseCard = ({ 
  title, 
  description, 
  duration, 
  participants, 
  status = 'available', 
  delay = 0, 
  thumbnailImage,
  courseType = 'Core'
}: CourseCardProps) => {
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Quick':
        return 'bg-emerald-500 text-white';
      case 'Full':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-dental-blue text-white';
    }
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      className="group fade-in bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-[2px] flex flex-col cursor-pointer border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => console.log('Navigate to course:', title)}
      onKeyPress={(e) => e.key === 'Enter' && console.log('Navigate to course:', title)}
    >
      {/* Course thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        {thumbnailImage ? (
          <img 
            src={thumbnailImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dental-blue to-dental-blue-dark"></div>
        )}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Course type badge */}
        <div className="absolute top-3 left-3">
          <Badge className={`${getTypeColor(courseType)} border-none text-xs font-medium px-2 py-1 shadow-sm`}>
            {courseType}
          </Badge>
        </div>
        
        {status === 'available' && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play className="text-white ml-1" size={24} />
            </div>
          </div>
        )}
        {status === 'coming-soon' && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-yellow-400 text-yellow-900 border-none">
              Coming Soon
            </Badge>
          </div>
        )}
      </div>

      {/* Course content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-dental-blue mb-3 font-inter">
          {title}
        </h3>
        
        <p className="text-dental-gray mb-4 leading-relaxed flex-grow font-inter">
          {description}
        </p>

        {/* Course metadata */}
        <div className="flex items-center flex-wrap gap-2 text-sm text-dental-gray mb-6">
          <Badge variant="outline" className="font-normal border-gray-200 font-inter">
            <Clock size={14} className="mr-1.5" />
            {duration}
          </Badge>
          <Badge variant="outline" className="font-normal border-gray-200 font-inter">
            <Users size={14} className="mr-1.5" />
            {participants}
          </Badge>
        </div>

        {/* CTA */}
        {status === 'available' ? (
          <button className="btn-primary w-full mt-auto font-inter" tabIndex={-1}>
            View Course
          </button>
        ) : (
          <button className="btn-secondary w-full mt-auto font-inter" disabled tabIndex={-1}>
            Notify When Available
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
