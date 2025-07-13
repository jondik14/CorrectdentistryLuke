
import { CheckCircle, Download, Star, Award, FileText, Lock } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface LearningObjectivesProps {
  objectives: string[];
}

const LearningObjectives = ({ objectives }: LearningObjectivesProps) => (
  <Card>
    <CardContent className="p-6">
      <div className="grid md:grid-cols-2 gap-4">
        {objectives.map((objective, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle size={18} className="text-dental-blue flex-shrink-0 mt-0.5" />
            <span className="text-dental-gray text-sm leading-relaxed">{objective}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

interface DownloadsProps {
  downloads: string[];
  cpdHours: number;
  isSubscribed: boolean;
}

const Downloads = ({ downloads, cpdHours, isSubscribed }: DownloadsProps) => (
  <Card>
    <CardContent className="p-6">
      <div className="grid gap-4">
        {/* CPD Certification */}
        <div className="flex items-center justify-between p-4 bg-dental-blue-light/10 rounded-lg border border-dental-blue-light/30">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-dental-blue" />
            <div>
              <div className="font-medium text-dental-blue">CPD Certificate</div>
              <div className="text-sm text-dental-gray">{cpdHours} CPD Hours</div>
            </div>
          </div>
          {isSubscribed ? (
            <Button size="sm" variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white">
              <Download size={16} className="mr-2" />
              Download
            </Button>
          ) : (
            <Lock size={16} className="text-gray-400" />
          )}
        </div>

        {/* Downloadable Resources */}
        <div className="space-y-3">
          <h4 className="font-medium text-dental-blue">Course Resources</h4>
          {downloads.map((download, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-dental-blue" />
                <span className="text-sm text-dental-gray">{download}</span>
              </div>
              {isSubscribed ? (
                <Button size="sm" variant="ghost" className="text-dental-blue hover:bg-dental-blue-light/20">
                  <Download size={14} />
                </Button>
              ) : (
                <Lock size={14} className="text-gray-400" />
              )}
            </div>
          ))}
        </div>

        {!isSubscribed && (
          <div className="text-center text-sm text-dental-gray bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            Subscribe to access all downloadable resources and CPD certification
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

interface TestimonialsProps {
  testimonials: { id: string; name: string; text: string; rating: number; }[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => (
  <div className="space-y-4">
    {testimonials.map((testimonial) => (
      <Card key={testimonial.id}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-dental-blue-light rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-dental-blue font-medium text-sm">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-dental-gray">{testimonial.name}</span>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-dental-gray text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

interface InstructorBioProps {
  instructor: string;
  bio: string;
}

const InstructorBio = ({ instructor, bio }: InstructorBioProps) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-dental-blue-light rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-dental-blue font-semibold text-lg">
            {instructor.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-dental-blue text-lg mb-2">{instructor}</h4>
          <p className="text-dental-gray leading-relaxed">{bio}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CourseInfo = {
  LearningObjectives,
  Downloads,
  Testimonials,
  InstructorBio
};

export default CourseInfo;
