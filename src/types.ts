export interface NavigationItem {
  name: string;
  path: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Silk' | 'Cotton' | 'Designer' | 'Bridal' | 'Men' | 'Kids';
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutFormData {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}
