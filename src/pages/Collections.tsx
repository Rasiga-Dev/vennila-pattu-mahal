

// import { useState } from 'react';
// import { ShoppingCart } from 'lucide-react';
// import { products } from '../data/products';
// import { addToCart } from '../utils/cart';
// import { Product } from '../types';

// // Helper to normalize size input to array of trimmed strings
// function normalizeSizes(size: any): string[] {
//   if (size === null || size === undefined) return [];
//   if (Array.isArray(size)) return size.map(s => String(s).trim()).filter(Boolean);
//   if (typeof size === 'string') {
//     // split on comma or whitespace (handles "18 , 20 ,22" or "18 20 22")
//     return size
//       .split(/[,\\s]+/)
//       .map(s => s.trim())
//       .filter(Boolean);
//   }
//   // number or other primitive
//   return [String(size)];
// }

// export default function Collections() {
//   const categories = ['Frock', 'Child Shirt','Saree','Night Dress'];

//   const [activeTab, setActiveTab] = useState<string>(categories[0]);
//   const [addedToCart, setAddedToCart] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   const filteredProducts = products.filter((product) => {
//     const matchCategory = product.category === activeTab;

//     // normalize sizes for this product
//     const sizes = normalizeSizes(product.size); // always an array of strings
//     const matchSize = selectedSize ? sizes.includes(selectedSize) : true;

//     return matchCategory && matchSize;
//   });

//   const getCategoryThumb = (category: string) => {
//     const found = products.find((p) => p.category === category && p.imageUrl);
//     return found ? found.imageUrl : '/images/placeholder-thumb.webp';
//   };

//   const handleAddToCart = (product: Product) => {
//     addToCart(product);
//     setAddedToCart(product.id);
//     setTimeout(() => setAddedToCart(null), 2000);
//   };

//   return (
//     <div className="bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen">
//       <section className="py-2 px-1">
//         <div className="max-w-7xl mx-auto">

//           {/* ===== CATEGORIES: grid with 6 per row on md+ ===== */}
//           <div className="mb-8">
//             <div
//               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
//               role="tablist"
//             >
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveTab(category)}
//                   role="tab"
//                   aria-selected={activeTab === category}
//                   className={`w-full flex items-center gap-3 px-3 py-2 rounded-2xl border transition-all ${activeTab === category
//                     ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105'
//                     : 'bg-white text-gray-700 hover:shadow-md'
//                     }`}
//                 >
//                   <img
//                     src={getCategoryThumb(category)}
//                     alt={`${category} thumbnail`}
//                     className="w-12 h-12 rounded-md object-cover flex-shrink-0 shadow-sm"
//                   />
//                   <div className="text-left overflow-hidden">
//                     <div className="font-semibold truncate">{category}</div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <hr />

//           {/* Size Filter */}
//           <div className="flex justify-end mb-4">
//             <select
//               value={selectedSize || ""}
//               onChange={(e) => setSelectedSize(e.target.value || null)}
//               className="px-4 py-2 rounded-xl border bg-white shadow-sm text-gray-700"
//             >
//               <option value="">All Sizes</option>
//               <option value="16">Size 16</option>
//               <option value="18">Size 18</option>
//               <option value="20">Size 20</option>
//               <option value="Free Size">Free Size</option>

//             </select>
//           </div>

//           {/* Products grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
//               >
//                 <div className="relative h-80 overflow-hidden">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
//                   />
//                   <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
//                     ₹{product.price.toFixed(2)}
//                   </div>
//                 </div>
//                 <div className="p-6">

//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
//                   <span className="text-gray-900 mb-2">({product.id})</span>

//                   <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center gap-2">
//                     <span>Size :</span>
//                     <div className="flex gap-2 flex-wrap">
//                       {normalizeSizes(product.size).map((s, index) => (
//                         <span
//                           key={index}
//                           className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
//                         >
//                           {s}
//                         </span>
//                       ))}
//                     </div>
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     disabled={addedToCart === product.id}
//                     className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${addedToCart === product.id
//                       ? 'bg-green-500 text-white'
//                       : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg transform hover:-translate-y-1'
//                       }`}
//                   >
//                     <ShoppingCart size={20} />
//                     {addedToCart === product.id ? 'Added to Cart!' : 'Add to Cart'}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center py-16">
//               <p className="text-xl text-gray-600">No products found in this category.</p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }





import { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../utils/cart';
import { Product } from '../types';

// Helper to normalize size input to array of trimmed strings
function normalizeSizes(size: any): string[] {
  if (size === null || size === undefined) return [];
  if (Array.isArray(size)) return size.map(s => String(s).trim()).filter(Boolean);
  if (typeof size === 'string') {
    // split on comma or whitespace (handles "18 , 20 ,22" or "18 20 22")
    return size
      .split(/[,\\s]+/)
      .map(s => s.trim())
      .filter(Boolean);
  }
  // number or other primitive
  return [String(size)];
}

export default function Collections() {
  const categories = ['Saree'];

  const [activeTab, setActiveTab] = useState<string>(categories[0]);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchCategory = product.category === activeTab;

    // normalize sizes for this product
    const sizes = normalizeSizes(product.size); // always an array of strings
    const matchSize = selectedSize ? sizes.includes(selectedSize) : true;

    return matchCategory && matchSize;
  });

  const getCategoryThumb = (category: string) => {
    const found = products.find((p) => p.category === category && p.imageUrl);
    return found ? found.imageUrl : '/images/placeholder-thumb.webp';
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen">
      <section className="py-2 px-1">
        <div className="max-w-7xl mx-auto">

          {/* ===== CATEGORIES: grid with 6 per row on md+ ===== */}
          <div className="mb-8">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
              role="tablist"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  role="tab"
                  aria-selected={activeTab === category}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-2xl border transition-all ${activeTab === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md'
                    }`}
                >
                  <img
                    src={getCategoryThumb(category)}
                    alt={`${category} thumbnail`}
                    className="w-12 h-12 rounded-md object-cover flex-shrink-0 shadow-sm"
                  />
                  <div className="text-left overflow-hidden">
                    <div className="font-semibold truncate">{category}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <hr />

          {/* Products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
                  />
                  {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    ₹{product.price.toFixed(2)}
                  </div> */}

                  <div className="absolute top-4 right-4 px-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {product.oldPrice && (
                      <div className="text-lg relative inline-block text-white mb-1 line-through opacity-75 mr-2">
                        Rs.{product.oldPrice}
                        {/* <span className="absolute inset-0 flex items-center justify-center">
                          <X className="text-gray-200" size={30} />
                        </span> */}
                      </div>
                    )}
                    <div className="text-lg font-bold text-white">
                      Rs.{product.price}
                    </div>
                    {/* {product.oldPrice && (
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {Math.round(
                          ((product.oldPrice - product.price) / product.oldPrice) * 100
                        )}% OFF
                      </div>
                    )} */}
                  

                  </div>

                </div>
                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <span className="text-gray-900 mb-2">({product.id})</span>


                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addedToCart === product.id}
                    className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${addedToCart === product.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                      }`}
                  >
                    <ShoppingCart size={20} />
                    {addedToCart === product.id ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
