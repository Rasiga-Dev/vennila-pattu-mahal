import { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { getCart, updateCartItemQuantity, removeFromCart, clearCart, getCartTotal } from '../utils/cart';
import { CartItem, CheckoutFormData } from '../types';

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    loadCart();
    const handleCartUpdate = () => loadCart();
    window.addEventListener('cart-updated', handleCartUpdate);
    return () => window.removeEventListener('cart-updated', handleCartUpdate);
  }, []);

  const loadCart = () => {
    setCartItems(getCart());
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateCartItemQuantity(productId, newQuantity);
    loadCart();
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    loadCart();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setOrderPlaced(true);
  //   clearCart();
  //   loadCart();
  //   setTimeout(() => {
  //     setOrderPlaced(false);
  //     setShowCheckout(false);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       address: '',
  //       city: '',
  //       state: '',
  //       zipCode: '',
  //     });
  //   }, 3000);
  // };


  // place these near the top of the component (after state declarations)
  const whatsappNumber = "919629659686"; // shop WhatsApp number (country code only)
// your WhatsApp number
  // const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  // <- change to shop whatsapp number (country code + number, no + or spaces)

  const openWhatsAppWithMessage = (message: string) => {
  const encoded = encodeURIComponent(message);

  // Mobile deep link (for phones)
  const mobileUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encoded}`;

  // Browser fallback
  const webUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;

  const popup = window.open(mobileUrl, "_blank");

  setTimeout(() => {
    if (!popup || popup.closed || popup.location.href === "about:blank") {
      window.open(webUrl, "_blank");
    }
  }, 600);
};


  // UPDATED handleSubmit
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  let message = `🛍️ New Order Received\n\n`;
  message += `👤 Name: ${formData.name}\n`;
  message += `📞 Phone: ${formData.phone}\n`;

  message += `📦 Order Items:\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: ₹${(item.product.price * item.quantity).toFixed(2)}\n`;
    message += `   Image ID: ${item.product.id}\n\n`;
  });

  message += `🏠 Address:\n${formData.address}, ${formData.city}, ${formData.state} - ${formData.zipCode}\n\n`;
  message += `💰 Total Amount: ₹${total.toFixed(2)}\n`;

  // 🔥 Open WhatsApp with message
  openWhatsAppWithMessage(message);

  // Clear cart & show success UI
  setOrderPlaced(true);
  clearCart();
  loadCart();

  // Reset fields
  setTimeout(() => {
    setOrderPlaced(false);
    setShowCheckout(false);
    setFormData({
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
  }, 3000);
};



  const total = getCartTotal();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (orderPlaced) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 text-lg">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md text-center">
          <ShoppingBag className="text-gray-400 mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 text-lg mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <a
            href="/collections"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Browse Collections
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Shopping Cart
        </h1>

        {!showCheckout ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row gap-6"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.product.name}</h3>
                    <p className="text-gray-600 mb-4">{item.product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-gray-900">
                          ₹{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({itemCount})</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between text-2xl font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back to Cart
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
