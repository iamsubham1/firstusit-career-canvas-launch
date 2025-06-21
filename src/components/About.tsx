
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FirstUsit
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing IT recruitment by bridging the gap between aspiring professionals 
            and industry demands through personalized training and strategic career guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower aspiring IT professionals with the skills, experience, and connections 
                they need to launch successful careers in technology. We believe everyone deserves 
                a chance to thrive in the digital economy.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We combine cutting-edge training programs with real-world projects and direct 
                connections to hiring companies. Our personalized approach ensures each candidate 
                receives the support they need to succeed.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Join 10,000+ Success Stories</h4>
                <p className="text-gray-600">Transform your career with FirstUsit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h4>
            <p className="text-gray-600">Evaluate your current skills and career goals</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Training</h4>
            <p className="text-gray-600">Personalized learning path with expert mentors</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-pink-600">3</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Projects</h4>
            <p className="text-gray-600">Hands-on experience with real-world challenges</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">4</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Placement</h4>
            <p className="text-gray-600">Connect with top companies actively hiring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
