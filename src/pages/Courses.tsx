
import { useState } from 'react';
import { Search, Filter, Clock, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseDetailModal from '../components/CourseDetailModal';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  enrolled: string;
  thumbnail: string;
  category: string;
  level: string;
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Impressions for Veneers',
      description: 'Master the art of creating precise impressions for veneer procedures with advanced techniques.',
      duration: '45 min',
      enrolled: '1,200+',
      thumbnail: '/lovable-uploads/a789cbd9-0692-4db5-9658-3da85ff73e3e.png',
      category: 'Restorative',
      level: 'Intermediate'
    },
    {
      id: '2',
      title: 'Resin Bonded Bridges - Metal and Zirconia',
      description: 'Comprehensive guide to metal and zirconia resin bonded bridges for optimal patient outcomes.',
      duration: '1.5 hours',
      enrolled: '950+',
      thumbnail: '/lovable-uploads/4bd9d5d8-b153-4b4d-bd4d-fe5fdfe884b2.png',
      category: 'Prosthodontics',
      level: 'Advanced'
    },
    {
      id: '3',
      title: 'Digital Dentistry Workflows',
      description: 'Learn modern digital workflows for enhanced precision and patient comfort in dental procedures.',
      duration: '2 hours',
      enrolled: '800+',
      thumbnail: '/lovable-uploads/368c6b6a-e95a-4dd2-b51a-e03063a74279.png',
      category: 'Digital',
      level: 'Intermediate'
    },
    {
      id: '4',
      title: 'Understanding Occlusion and Splints',
      description: 'Complete understanding of occlusion principles and effective splint therapy techniques.',
      duration: '90 min',
      enrolled: '1,100+',
      thumbnail: '/lovable-uploads/10aa0220-71b9-474c-ad0a-0656b85e32c9.png',
      category: 'Occlusion',
      level: 'Advanced'
    },
    {
      id: '5',
      title: 'Advanced Endodontic Procedures',
      description: 'Cutting-edge endodontic techniques for complex cases and improved success rates.',
      duration: '2.5 hours',
      enrolled: '600+',
      thumbnail: '/lovable-uploads/368c6b6a-e95a-4dd2-b51a-e03063a74279.png',
      category: 'Endodontics',
      level: 'Expert'
    },
    {
      id: '6',
      title: 'Periodontal Surgery Fundamentals',
      description: 'Essential surgical techniques for periodontal treatment and tissue regeneration.',
      duration: '3 hours',
      enrolled: '750+',
      thumbnail: '/lovable-uploads/4bd9d5d8-b153-4b4d-bd4d-fe5fdfe884b2.png',
      category: 'Periodontics',
      level: 'Advanced'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-blue mb-6">
              Professional Development Courses
            </h1>
            <p className="text-xl text-dental-gray mb-8">
              Advance your dental expertise with courses designed by specialists for practicing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 items-center max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search courses by title, category, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Filter size={20} className="mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedCourse(course)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-dental-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-dental-blue px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dental-blue mb-3 group-hover:text-dental-blue-dark transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-dental-gray mb-4 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Metadata */}
                  <div className="flex items-center justify-between text-sm text-dental-gray mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{course.enrolled} enrolled</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full group-hover:bg-dental-blue-dark transition-colors">
                    Explore Course
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-dental-gray">No courses found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          isOpen={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
};

export default Courses;
