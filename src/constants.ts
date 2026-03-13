import { MenuItem, Review, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Espresso',
    description: 'Rich and bold espresso shot with a velvety crema.',
    price: 4.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso.',
    price: 5.75,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Earl Grey Reserve',
    description: 'Premium black tea infused with bergamot orange oil.',
    price: 4.25,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Artisan Croissant',
    description: 'Flaky, buttery pastry baked fresh every morning.',
    price: 3.95,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Dark Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean gelato.',
    price: 8.50,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Matcha Latte',
    description: 'Ceremonial grade matcha whisked with creamy steamed milk.',
    price: 5.50,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sophia Laurent',
    rating: 5,
    comment: 'The atmosphere is simply divine. The signature espresso is the best I\'ve had in the city.',
    avatar: 'https://i.pravatar.cc/150?u=sophia',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    rating: 5,
    comment: 'A perfect spot for both working and relaxing. The staff is incredibly knowledgeable about their beans.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    rating: 4,
    comment: 'The desserts are a work of art. The chocolate lava cake is a must-try!',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800', title: 'Interior Design' },
  { id: '2', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', title: 'Barista at Work' },
  { id: '3', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800', title: 'Fresh Beans' },
  { id: '4', url: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800', title: 'Latte Art' },
  { id: '5', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', title: 'Cozy Corner' },
  { id: '6', url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800', title: 'Coffee Selection' },
];
