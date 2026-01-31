import { Heart, Users, Home, Sparkles } from 'lucide-react';

export default function Gallery() {
  const categories = [
    {
      title: 'Bridal Moments',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-600',
      description: 'Capturing the elegance of our brides on their special day'
    },
    {
      title: 'Happy Customers',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-600',
      description: 'Smiles and satisfaction from our valued patrons'
    },
    {
      title: 'Shop Interiors',
      icon: Home,
      gradient: 'from-orange-500 to-red-600',
      description: 'A glimpse into our beautiful showroom experience'
    },
    {
      title: 'Latest Saree Launches',
      icon: Sparkles,
      gradient: 'from-purple-500 to-pink-600',
      description: 'Fresh arrivals and trending designs'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Experience the beauty of our collections through moments captured at Vennila Pattu Mahal
            </p>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`bg-gradient-to-br ${category.gradient} h-64 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <Icon className="text-white relative z-10" size={80} strokeWidth={1.5} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-8 md:p-12 shadow-2xl text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Us to See More</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              Our showroom features an extensive collection of sarees, bridal wear, and traditional
              textiles. Experience the quality and craftsmanship in person.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3">
                <p className="font-semibold text-lg">1000+ Designs</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3">
                <p className="font-semibold text-lg">Premium Quality</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl px-6 py-3">
                <p className="font-semibold text-lg">Expert Guidance</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Follow us on social media to see our latest collections and customer stories
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
