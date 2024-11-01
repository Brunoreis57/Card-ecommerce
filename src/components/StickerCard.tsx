import { Sticker } from '../types';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface StickerCardProps {
  sticker: Sticker;
}

export default function StickerCard({ sticker }: StickerCardProps) {
  return (
    <Link to={`/sticker/${sticker.id}`} className="group">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        {sticker.featured && (
          <div className="absolute top-2 right-2 bg-yellow-400 rounded-full p-1">
            <Star className="h-4 w-4 text-white" />
          </div>
        )}
        <img 
          src={sticker.image} 
          alt={sticker.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{sticker.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-indigo-600">
              ${sticker.price.toLocaleString()}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              sticker.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
              sticker.rarity === 'ultra-rare' ? 'bg-purple-100 text-purple-800' :
              sticker.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {sticker.rarity}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}