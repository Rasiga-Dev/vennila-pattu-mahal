import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { getCartItemCount } from '../utils/cart';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  'Home',
  'About Us',
  'Collections',
  'Gallery',
  'Testimonials',
  'Contact Us'
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    updateCartCount();
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener('cart-updated', handleCartUpdate);
    return () => window.removeEventListener('cart-updated', handleCartUpdate);
  }, []);

  const updateCartCount = () => {
    setCartCount(getCartItemCount());
  };

  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('Home')}>
            {/* <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center"> */}
              {/* <span className="text-white font-bold text-xl">VP</span> */}
             <img src="../public/uploads/logo.jpg" alt="Vennila Pattu Mahal Logo" className="w-12 h-12 rounded-[80%]" />
            {/* </div> */}
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">Vennila Pattu Mahal</h1>
              <p className="text-xs text-gray-600 italic">Elegance in Every Thread</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <button
              onClick={() => onNavigate('Cart')}
              className="relative p-2 hover:bg-orange-100 rounded-full transition-colors"
            >
              <ShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors ${
                  currentPage === item
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
