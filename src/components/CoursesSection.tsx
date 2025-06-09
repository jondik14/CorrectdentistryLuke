
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const courses = [
    {
      title: "Full Courses",
      description: "Comprehensive 1-2 day recorded programs—remixed for an optimal online experience. Watch on demand and revisit top-tier CPD events from the comfort of home.",
      duration: "6-12 hours",
      participants: "2.5k+ enrolled",
      status: 'available' as const
    },
    {
      title: "Short Courses", 
      description: "Focused 30–60 minute lectures on essential clinical topics. No fluff, just expert insights—straight from the specialists.",
      duration: "30-60 min",
      participants: "5k+ enrolled", 
      status: 'available' as const
    },
    {
      title: "5-Minute Refresh",
      description: "Need a quick confidence boost before a procedure? These bite-sized videos walk you through critical steps—just in time for your next appointment.",
      duration: "5 min",
      participants: "8k+ enrolled",
      status: 'available' as const
    },
    {
      title: "Product Use",
      description: "Learn how to use new dental products safely and effectively with verified guides straight from the manufacturers.",
      duration: "10-15 min",
      participants: "Coming soon",
      status: 'coming-soon' as const
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-dental-blue fade-in">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-dental-gray max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            From comprehensive programs to quick refreshers, find the perfect format for your continuing education needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard
              key={course.title}
              {...course}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-dental-gray mb-6">
            Ready to advance your practice with specialist-led education?
          </p>
          <button className="btn-primary text-lg px-8 py-3">
            Browse All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
