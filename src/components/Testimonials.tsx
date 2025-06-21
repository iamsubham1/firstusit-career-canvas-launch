
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150",
      content: "FirstUsit transformed my career completely. The personalized training and real-world projects gave me the confidence to land my dream job at Google. The mentorship was invaluable!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "DevOps Engineer at Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      content: "The hands-on approach and industry connections at FirstUsit are unmatched. I went from zero coding experience to a senior role in just 8 months. Highly recommend!",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Data Scientist at Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "What sets FirstUsit apart is their commitment to each student's success. The personalized curriculum and job placement support made all the difference in my career transition.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Frontend Developer at Netflix",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content: "The project-based learning approach helped me build a portfolio that impressed employers. FirstUsit's network opened doors I never thought possible.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Cybersecurity Analyst at Meta",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      content: "From career counseling to technical training, FirstUsit provided everything I needed to succeed. The support didn't end after placement - they truly care about long-term success.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Cloud Architect at Tesla",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      content: "The industry-relevant curriculum and expert mentors at FirstUsit gave me the skills and confidence to excel in my new role. Best investment I've made in my career!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have successfully transformed their careers and landed positions at top tech companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Success Stories</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to write your own success story? Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
