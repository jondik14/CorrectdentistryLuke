
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const courses = [
    {
      title: "Full Courses",
      description: "Comprehensive 1-2 day recorded programs—remixed for an optimal online experience. Watch on demand and revisit top-tier CPD events from the comfort of home.",
      duration: "1-2 days",
      participants: "500+ enrolled",
      status: 'available' as const,
      thumbnailImage: "/lovable-uploads/d3f9d18e-a4a3-4a86-9438-219134d851a6.png"
    },
    {
      title: "Short Courses",
      description: "Focused 30–60 minute lectures on essential clinical topics. No fluff, just expert insights—straight from the specialists.",
      duration: "30-60 min",
      participants: "800+ enrolled",
      status: 'available' as const,
      thumbnailImage: "/lovable-uploads/d3f9d18e-a4a3-4a86-9438-219134d851a6.png"
    },
    {
      title: "5-Minute Refresh",
      description: "Need a quick confidence boost before a procedure? These bite-sized videos walk you through critical steps—just in time for your next appointment.",
      duration: "5 min",
      participants: "1200+ enrolled",
      status: 'available' as const,
      thumbnailImage: "/lovable-uploads/bfd7b331-42d8-440c-849d-0d9900e7cfed.png"
    },
    {
      title: "Product Use",
      description: "Learn how to use new dental products safely and effectively with verified guides straight from the manufacturers.",
      duration: "10-20 min",
      participants: "Coming soon",
      status: 'coming-soon' as const,
      thumbnailImage: "/lovable-uploads/a8e38ffd-605d-41e7-940a-ca2bdd3d19f5.png"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-dental-blue-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-dental-blue mb-4 fade-in">
            Course Categories
          </h2>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Choose from our comprehensive library of specialist-delivered courses designed for every learning need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              duration={course.duration}
              participants={course.participants}
              status={course.status}
              thumbnailImage={course.thumbnailImage}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
