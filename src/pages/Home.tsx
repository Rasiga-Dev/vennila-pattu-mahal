import { Sparkles, Award, Gift, Globe } from 'lucide-react';
import shop from '../../public/uploads/shop.jpg';
import hero from '../../public/uploads/hero.png';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>

    <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2">

    {/* Left Image */}
    <div>
      <img
        src={shop}
        alt="Elegant Silk Sarees"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

    {/* Right Image */}
    <div>
      <img
        src={hero}
        alt="Elegant Silk Sarees Right"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

  </div>
</section>


      <div className="max-w-7xl mx-auto text-center relative z-10 py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Where Tradition Meets <span className="text-orange-600">Elegance</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover timeless silk sarees, elegant bridal wear, and more at Vennila Pattu Mahal,
          your one-stop destination for premium textiles.
        </p>
        <button
          onClick={() => onNavigate('Collections')}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Explore Collection
        </button>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Pure Silk Guarantee</h3>
              <p className="text-gray-600 text-sm">Authentic silk sourced directly from renowned weavers</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Handcrafted Sarees</h3>
              <p className="text-gray-600 text-sm">Exquisite designs from Kanchipuram artisans</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Bridal Collections</h3>
              <p className="text-gray-600 text-sm">Make your special day memorable with our curated collection</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pan India Delivery</h3>
              <p className="text-gray-600 text-sm">Fast and secure shipping across all states</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Art of Traditional Weaving</h2>
          <p className="text-lg mb-8 opacity-90">
            Each piece in our collection tells a story of heritage, craftsmanship, and timeless beauty.
            Visit our store to explore the finest textiles that celebrate India's rich culture.
          </p>
          <button
            onClick={() => onNavigate('Contact Us')}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Visit Our Store
          </button>
        </div>
      </section>
    </div>
  );
}
