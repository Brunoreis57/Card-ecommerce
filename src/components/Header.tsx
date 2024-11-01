import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">CardCollect</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/collection" className="text-gray-700 hover:text-indigo-600">Collection</Link>
            <Link to="/admin" className="text-gray-700 hover:text-indigo-600">Admin</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600">
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              Home
            </Link>
            <Link 
              to="/collection" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              Collection
            </Link>
            <Link 
              to="/admin" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}