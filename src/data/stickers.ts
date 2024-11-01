import { Sticker } from '../types';

export const stickers: Sticker[] = [
  {
    id: '1',
    name: 'Charizard Holo 1st Edition',
    price: 1200.00,
    description: 'Rare 1st edition Charizard holographic card in mint condition. PSA 9 grade.',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=800',
    featured: true,
    category: 'Pokemon',
    rarity: 'legendary'
  },
  {
    id: '2',
    name: 'Black Lotus MTG',
    price: 15000.00,
    description: 'Alpha Edition Black Lotus. The most iconic Magic: The Gathering card ever printed.',
    image: 'https://images.unsplash.com/photo-1593759608142-e9b18c0dbe86?auto=format&fit=crop&q=80&w=800',
    featured: true,
    category: 'Magic',
    rarity: 'legendary'
  },
  {
    id: '3',
    name: 'Blue-Eyes White Dragon',
    price: 500.00,
    description: 'First edition Blue-Eyes White Dragon from Yu-Gi-Oh! TCG.',
    image: 'https://images.unsplash.com/photo-1614785000805-ceeb1f0c0a39?auto=format&fit=crop&q=80&w=800',
    featured: true,
    category: 'Yu-Gi-Oh',
    rarity: 'ultra-rare'
  }
];