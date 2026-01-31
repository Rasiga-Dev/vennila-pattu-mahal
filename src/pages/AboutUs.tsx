import { Heart, Users, Star, Palette } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white">

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            About Vennila Pattu Mahal
          </h1>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Owner Image */}
            <div className="flex justify-center">
              <img
                src="/src/assets/owner.jpg"
                alt="Owner Arumugam"
                className="w-100 h-100 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">Vennila Pattu Mahal</span> was started in the year
                <span className="font-semibold"> 2015</span> by
                <span className="font-semibold"> Mr. Arumugam</span> with a vision to provide
                high-quality textiles and garments at affordable prices.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                From a small store to a trusted textile destination, we have grown with the love
                and support of our customers. Our collection includes a wide range of
                <span className="font-semibold">
                  {" "}pure silk sarees, soft silk, wedding sarees, traditional designs, premium
                  handloom varieties, ready-made garments, fabrics, and all textile products
                </span>
                {" "}for every age and occasion.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Today, even after a decade, Vennila Pattu Mahal continues to run successfully,
                offering elegant collections for weddings, festivals, and everyday wear.
                Our commitment to quality, trust, and customer satisfaction is what keeps us
                moving forward.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">


          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Established with a passion for preserving the elegance of traditional Indian textiles,
              Vennila Pattu Mahal has been a trusted name in silk and designer wear for years.
              From the luxurious Kanchipuram Silks to modern Designer Sarees, we offer collections
              that define grace and culture.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-orange-600 mb-3 flex items-center">
                <Heart className="mr-2" size={28} />
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg">
                To deliver authentic, high-quality fabrics that celebrate India's rich weaving heritage.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                <Palette className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Range of Collections</h3>
              <p className="text-gray-700">
                From traditional silk sarees to contemporary designer wear, we offer an extensive
                variety to suit every occasion and preference.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                <Star className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-700">
                We believe luxury should be accessible. Our competitive pricing ensures you get
                premium quality without breaking the bank.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                <Palette className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Design Support</h3>
              <p className="text-gray-700">
                Have a unique vision? Our team works with you to create bespoke designs that
                reflect your personal style and preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Friendly Staff & Personalized Service</h3>
              <p className="text-gray-700">
                Our experienced team is dedicated to providing personalized attention, helping you
                find the perfect piece for your special moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 to-red-700 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-lg opacity-90">
            Experience the finest textiles and exceptional service at our Salem showroom.
            We look forward to helping you find the perfect outfit for every occasion.
          </p>
        </div>
      </section>
    </div>
  );
}
