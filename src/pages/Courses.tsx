
import { useState } from 'react';
import { Search, Filter, Clock, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseDetailModal from '../components/CourseDetailModal';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

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
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', ...Array.from(new Set(courses.map(course => course.category)))];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    
    const searchTermMatch = !searchTerm ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchTermMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative border-b">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/b209c229-5f67-414c-8002-904abde37021.png"
            alt="Dental seminar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 py-28 md:py-40">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Development Courses
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Advance your dental expertise with courses designed by specialists for practicing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <div className="bg-white/95 backdrop-blur-sm border-b shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center max-w-4xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search courses by title, category, or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 w-full"
              />
            </div>
            <div className="w-full md:w-auto">
              <Select onValueChange={setSelectedCategory} defaultValue="All">
                <SelectTrigger className="h-12 w-full md:w-[220px]">
                  <Filter size={18} className="mr-2 text-gray-500" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col"
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
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-dental-blue mb-3 group-hover:text-dental-blue-dark transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-dental-gray mb-4 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Metadata */}
                  <div className="flex items-center justify-between text-sm text-dental-gray mt-auto mb-4">
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
