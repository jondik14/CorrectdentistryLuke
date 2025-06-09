
import { Play, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  participants: string;
  status?: 'available' | 'coming-soon';
  delay?: number;
}

const CourseCard = ({ title, description, duration, participants, status = 'available', delay = 0 }: CourseCardProps) => {
  return (
    <div 
      className="card-course fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Course thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-dental-blue to-dental-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {status === 'available' && (
          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="text-white ml-1" size={24} />
            </div>
          </div>
        )}
        {status === 'coming-soon' && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Course content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dental-blue mb-3">
          {title}
        </h3>
        
        <p className="text-dental-gray mb-4 leading-relaxed">
          {description}
        </p>

        {/* Course metadata */}
        <div className="flex items-center justify-between text-sm text-dental-gray mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{participants}</span>
          </div>
        </div>

        {/* CTA */}
        {status === 'available' ? (
          <button className="btn-primary w-full">
            Start Learning
          </button>
        ) : (
          <button className="btn-secondary w-full" disabled>
            Notify When Available
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
