export interface Sticker {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  featured: boolean;
  category: string;
  rarity: 'common' | 'rare' | 'ultra-rare' | 'legendary';
}

export interface AdminCredentials {
  username: string;
  password: string;
}