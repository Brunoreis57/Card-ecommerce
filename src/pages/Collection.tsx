import { useState } from 'react';
import { stickers } from '../data/stickers';
import StickerCard from '../components/StickerCard';
import { Search } from 'lucide-react';

export default function Collection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRarity, setSelectedRarity] = useState('all');

  const categories = ['all', ...new Set(stickers.map(s => s.category))];
  const rarities = ['all', 'common', 'rare', 'ultra-rare', 'legendary'];

  const filteredStickers = stickers.filter(sticker => {
    const matchesSearch = sticker.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || sticker.category === selectedCategory;
    const matchesRarity = selectedRarity === 'all' || sticker.rarity === selectedRarity;
    return matchesSearch && matchesCategory && matchesRarity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Card Collection</h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search cards..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
          >
            {rarities.map(rarity => (
              <option key={rarity} value={rarity}>
                {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStickers.map(sticker => (
          <StickerCard key={sticker.id} sticker={sticker} />
        ))}
      </div>

      {filteredStickers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No cards found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}