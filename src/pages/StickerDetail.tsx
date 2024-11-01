import { useParams } from 'react-router-dom';
import { stickers } from '../data/stickers';
import { Phone, Mail, Star } from 'lucide-react';

export default function StickerDetail() {
  const { id } = useParams<{ id: string }>();
  const sticker = stickers.find(s => s.id === id);

  if (!sticker) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-500 text-lg">Card not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2">
            <img
              className="h-96 w-full object-cover md:h-full"
              src={sticker.image}
              alt={sticker.name}
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">{sticker.name}</h2>
              {sticker.featured && (
                <Star className="h-6 w-6 text-yellow-400" />
              )}
            </div>
            
            <div className="mt-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                sticker.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                sticker.rarity === 'ultra-rare' ? 'bg-purple-100 text-purple-800' :
                sticker.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {sticker.rarity}
              </span>
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800">
                {sticker.category}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-4xl font-bold text-indigo-600">
                ${sticker.price.toLocaleString()}
              </h3>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900">Description</h4>
              <p className="mt-2 text-gray-600">{sticker.description}</p>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Contact Seller</h4>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>contact@cardcollect.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}