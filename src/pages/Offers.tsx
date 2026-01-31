import { Tag, Gift, Scissors, Sparkles } from 'lucide-react';

export default function Offers() {
  const offers = [
    {
      icon: Crown,
      title: 'Flat 20% OFF on all Bridal Sarees',
      description: 'Make your wedding day extra special with our premium bridal collection at unbeatable prices.',
      discount: '20% OFF',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Gift,
      title: 'Buy 2 Get 1 Free – Cotton Sarees',
      description: 'Stock up on comfortable, elegant cotton sarees perfect for daily wear and festive occasions.',
      discount: 'BUY 2 GET 1',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Scissors,
      title: 'Free Blouse Stitching on Designer Sarees',
      description: 'Get complimentary blouse stitching with every designer saree purchase. Perfect fit guaranteed!',
      discount: 'FREE SERVICE',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Sparkles,
      title: 'Special Diwali Collection Available',
      description: 'Explore our exclusive festive collection with stunning designs perfect for the celebration season.',
      discount: 'NEW ARRIVAL',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
              LIMITED TIME OFFERS
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Festive Offers 2025
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Don't miss out on these incredible deals! Hurry, offers valid till stocks last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${offer.color} p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <Icon size={48} strokeWidth={1.5} />
                      <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                        {offer.discount}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-8 md:p-12 shadow-2xl text-white text-center">
            <Tag size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Exclusive In-Store Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Easy Exchange</h3>
                <p className="text-sm opacity-90">7-day hassle-free exchange policy</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="text-sm opacity-90">100% authentic products guaranteed</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                <p className="text-sm opacity-90">Personalized styling consultation</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
            <p className="text-gray-800 font-semibold flex items-center">
              <Tag className="mr-2" size={24} />
              Hurry! Offers valid till stocks last. Visit our store today to explore the full collection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Crown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}
