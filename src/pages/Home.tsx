import Hero from '../components/Hero';
import StickerCard from '../components/StickerCard';
import { stickers } from '../data/stickers';

export default function Home() {
  const featuredStickers = stickers.filter(sticker => sticker.featured);

  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStickers.map(sticker => (
            <StickerCard key={sticker.id} sticker={sticker} />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Cards</h3>
                <p className="text-gray-600">All cards are verified for authenticity and condition</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Transactions</h3>
                <p className="text-gray-600">Safe and secure payment methods for your peace of mind</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-600">Our team of experts is here to help with any questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}