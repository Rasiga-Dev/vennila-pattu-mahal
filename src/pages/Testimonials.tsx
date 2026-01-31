import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya S.',
      rating: 5,
      text: 'The saree quality is excellent and the staff are very friendly. Perfect for weddings!',
      location: 'Chennai'
    },
    {
      name: 'Lakshmi R.',
      rating: 5,
      text: 'Authentic silk collection. Loved their bridal section!',
      location: 'Coimbatore'
    },
    {
      name: 'Meena V.',
      rating: 4,
      text: 'Affordable prices and unique designs. Highly recommend.',
      location: 'Bangalore'
    },
    {
      name: 'Divya M.',
      rating: 5,
      text: 'Beautiful collection of designer sarees. The team helped me find the perfect outfit for my sister\'s wedding.',
      location: 'Salem'
    },
    {
      name: 'Anitha K.',
      rating: 5,
      text: 'Best place for traditional Kanchipuram silks. The quality is unmatched and the service is exceptional.',
      location: 'Madurai'
    },
    {
      name: 'Radha P.',
      rating: 5,
      text: 'Fantastic shopping experience! The staff was patient and showed me many options. Will definitely return.',
      location: 'Trichy'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their experience at Vennila Pattu Mahal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="mb-4">
                  <Quote className="text-orange-500" size={32} />
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-8 md:p-12 shadow-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Happy Customers</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              Experience the same exceptional quality and service that has made Vennila Pattu Mahal
              a trusted name in traditional textiles. Visit us today!
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">10,000+</p>
                <p className="text-sm opacity-90">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">4.8/5</p>
                <p className="text-sm opacity-90">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm opacity-90">Years of Trust</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl p-6 text-center shadow-md">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Share your experience!</span> We'd love to hear from you.
              Visit our store and let us help you create beautiful memories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
