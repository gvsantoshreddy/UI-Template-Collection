const PRODUCTS = [
  {
    name: 'Nocturne Silk Velvet Evening Gown',
    subtitle: 'Haute Couture Edition',
    category: 'Luxury Evening',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'Étoile Chiffon Red Carpet Gown',
    subtitle: 'Autumn-Winter 2026 Collection',
    category: 'Red Carpet',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'Aurelia Liquid Satin Slip Dress',
    subtitle: 'Atelier Signature Core',
    category: 'Satin',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fb1b?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'Sovereign Structured Column Gown',
    subtitle: 'Atelier Tailoring Line',
    category: 'Designer Gowns',
    price: 3950,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'Seraphina Chantilly Lace Gown',
    subtitle: 'Bridal & Couture Collection',
    category: 'Bridal & Couture',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1594552072238-b8a3da72ae9a?auto=format&fit=crop&w=1200&q=85'
  },
  {
    name: 'Vesper Black Luxury Tuxedo Dress',
    subtitle: 'Atelier Eveningwear',
    category: 'Black Luxury',
    price: 2750,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <div class="group cursor-pointer space-y-4">
      <div class="overflow-hidden bg-[#161616] aspect-[3/4] relative shadow-lg">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <span class="absolute bottom-4 left-4 bg-[#0c0c0c]/85 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-[#f4f2ee]">
          ${p.subtitle}
        </span>
      </div>
      <div class="flex justify-between items-start">
        <div>
          <h3 class="font-serif text-lg font-normal text-[#f4f2ee] group-hover:text-[#c5b39e] transition-colors">${p.name}</h3>
          <p class="text-xs text-[#a0a0a0] capitalize mt-0.5">${p.category}</p>
        </div>
        <p class="text-sm font-serif text-[#dfcca6]">$${p.price.toLocaleString()}</p>
      </div>
    </div>
  `).join('');
});