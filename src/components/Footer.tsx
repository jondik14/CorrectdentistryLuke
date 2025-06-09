
const Footer = () => {
  return (
    <footer className="bg-dental-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              CorrectDentistry
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Elevating dental expertise through evidence-based, specialist-delivered continuing education.
            </p>
            <div className="text-sm text-white/60">
              © 2024 CorrectDentistry. All rights reserved.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-3 text-white/80">
              <a href="#courses" className="block hover:text-white transition-colors">
                Courses
              </a>
              <a href="#faculty" className="block hover:text-white transition-colors">
                Faculty
              </a>
              <a href="#about" className="block hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Log In
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3 text-white/80">
              <a href="#" className="block hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>
            Professional dental education for the modern practitioner.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
