import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Vennila Pattu Mahal</h3>
          <p className="text-amber-300 italic mb-6">Elegance in Every Thread</p>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              © 2025 Vennila Pattu Mahal. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
