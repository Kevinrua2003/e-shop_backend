import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Apple MacBook Pro 14" M3 Pro',
    description:
      'Chip M3 Pro, 18GB RAM, 512GB SSD, Pantalla Liquid Retina XDR, Space Black',
    price: 1999.0,
    brand: 'Apple',
    category: 'Laptops',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Dell XPS 15 Intel Core i7',
    description:
      '32GB RAM, 1TB SSD, NVIDIA RTX 4050, Pantalla 15.6" FHD+, Windows 11',
    price: 1799.99,
    brand: 'Dell',
    category: 'Laptops',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'HP Spectre x360 14',
    description:
      'Intel Core Ultra 7, 16GB RAM, 512GB SSD, Pantalla 13.5" OLED Touch, Windows 11',
    price: 1449.0,
    brand: 'HP',
    category: 'Laptops',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    description:
      'Intel Core i7-1365U, 16GB RAM, 512GB SSD, Pantalla 14" 2.8K OLED',
    price: 1649.0,
    brand: 'Lenovo',
    category: 'Laptops',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'ASUS ROG Strix G16',
    description:
      'Intel Core i9-13980HX, 16GB RAM, 1TB SSD, NVIDIA RTX 4070, 165Hz',
    price: 1899.0,
    brand: 'ASUS',
    category: 'Laptops',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Apple iMac 24" M3',
    description:
      'Chip M3, 8GB RAM, 256GB SSD, Pantalla 4.5K Retina, Magic Keyboard',
    price: 1299.0,
    brand: 'Apple',
    category: 'Desktop',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Dell XPS Desktop Special Edition',
    description:
      'Intel Core i9-13900K, 32GB RAM, 1TB SSD + 2TB HDD, NVIDIA RTX 4080',
    price: 2499.99,
    brand: 'Dell',
    category: 'Desktop',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'HP Omen 45L GT15',
    description:
      'Intel Core i7-13700K, 32GB RAM, 1TB SSD, NVIDIA RTX 4070 Ti, RGB',
    price: 1899.99,
    brand: 'HP',
    category: 'Desktop',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Lenovo Legion Tower 7i',
    description:
      'Intel Core i9-13900KF, 32GB RAM, 1TB SSD, NVIDIA RTX 4080, 850W',
    price: 2699.0,
    brand: 'Lenovo',
    category: 'Desktop',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'MSI MEG Trident X 13th',
    description:
      'Intel Core i7-13700K, 32GB RAM, 1TB SSD, NVIDIA RTX 4070, Compact',
    price: 1999.99,
    brand: 'MSI',
    category: 'Desktop',
    inStock: false,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Samsung Galaxy Watch 6 Classic',
    description:
      '47mm, Bluetooth, Smartwatch con monitor de salud, running, sleep tracking',
    price: 399.99,
    brand: 'Samsung',
    category: 'Watch',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Apple Watch Series 9 GPS 45mm',
    description:
      'Caja de aluminio Midnight, Correa sport loop, watchOS, health tracking',
    price: 429.0,
    brand: 'Apple',
    category: 'Watch',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Fitbit Sense 2',
    description:
      'Smartwatch health, GPS, Alexa built-in, 6+ dias de bateria, Azul',
    price: 249.95,
    brand: 'Fitbit',
    category: 'Watch',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Garmin Fenix 7X Pro',
    description: 'Multideporte con GPS, solar charging, 51mm, maps preloaded',
    price: 899.99,
    brand: 'Garmin',
    category: 'Watch',
    inStock: false,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Samsung Galaxy Watch 5 Pro',
    description: '45mm, GPS, LTE, Body composition sensor, Negro',
    price: 329.99,
    brand: 'Samsung',
    category: 'Watch',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'LG C3 OLED 55" 4K Smart TV',
    description: 'OLED55C3PUB, Dolby Vision, webOS 23, Gaming, AI Processor',
    price: 1496.99,
    brand: 'LG',
    category: 'TV',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Samsung OLED 65" 4K Smart TV',
    description: 'S90C, Neural Quantum Processor, Dolby Atmos, Gaming Hub',
    price: 1799.99,
    brand: 'Samsung',
    category: 'TV',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Sony A95L QD-OLED 65"',
    description: 'Google TV, Dolby Vision, Acoustic Surface Audio+, Netflix',
    price: 2498.0,
    brand: 'Sony',
    category: 'TV',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'TCL Class S4 55" 4K LED TV',
    description: '55S450G, Smart TV Roku, Dolby Digital, HDR',
    price: 248.0,
    brand: 'TCL',
    category: 'TV',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Hisense U8 Mini-LED 65"',
    description: '65U8K, Quantum Dot, 144Hz, Dolby Vision IQ, Game Mode Pro',
    price: 1099.99,
    brand: 'Hisense',
    category: 'TV',
    inStock: false,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Apple iPhone 15 Pro Max 256GB',
    description:
      'Titanium, A17 Pro Chip, Pantalla Super Retina XDR 6.7", Camera Pro',
    price: 1199.0,
    brand: 'Apple',
    category: 'Phone',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Samsung Galaxy S24 Ultra 512GB',
    description:
      'Titanium Black, Snapdragon 8 Gen 3, 12GB RAM, 200MP Camera, S Pen',
    price: 1399.99,
    brand: 'Samsung',
    category: 'Phone',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Google Pixel 8 Pro 256GB',
    description: 'Obsidian, Tensor G3, 12GB RAM, 50MP Camera, 7 years updates',
    price: 999.0,
    brand: 'Google',
    category: 'Phone',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'OnePlus 12 512GB',
    description:
      'Flowy Emerald, Snapdragon 8 Gen 3, 16GB RAM, 50MP Hasselblad Camera',
    price: 799.99,
    brand: 'OnePlus',
    category: 'Phone',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Xiaomi 14 Pro 512GB',
    description:
      'Titanium, Snapdragon 8 Gen 3, 16GB RAM, 50MP Leica Camera, 120W charging',
    price: 1099.99,
    brand: 'Xiaomi',
    category: 'Phone',
    inStock: false,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Apple AirPods Pro (2nd Gen)',
    description:
      'USB-C, Active Noise Cancellation, Adaptive Audio, Personalized Spatial Audio',
    price: 249.0,
    brand: 'Apple',
    category: 'Accesories',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Wireless, ANC, 24-bit Hi-Fi sound, IPX7 water resistant',
    price: 229.99,
    brand: 'Samsung',
    category: 'Accesories',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Sony WH-1000XM5',
    description:
      'Wireless Noise Canceling Headphones, 30hr battery, multipoint connection',
    price: 399.99,
    brand: 'Sony',
    category: 'Accesories',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Anker 737 Power Bank 24,000mAh',
    description:
      '140W, PowerCore 24K, compatible with MacBook, laptop, fast charging',
    price: 149.99,
    brand: 'Anker',
    category: 'Accesories',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Logitech MX Master 3S',
    description: 'Wireless mouse, 8000 DPI, silent clicks, USB-C, Bluetooth',
    price: 99.99,
    brand: 'Logitech',
    category: 'Accesories',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Samsung T7 Shield 2TB Portable SSD',
    description: 'USB 3.2 Gen 2, 1050MB/s read, IP65 water/dust resistant',
    price: 179.99,
    brand: 'Samsung',
    category: 'Accesories',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
  {
    name: 'Belkin USB-C Hub 6-in-1',
    description: 'HDMI 4K, 2x USB-A, SD/microSD, 100W PD, compact design',
    price: 49.99,
    brand: 'Belkin',
    category: 'Accesories',
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61f1c-GBLNL._AC_SL1500_.jpg',
  },
];

async function main() {
  console.log('Starting product seed...');

  for (const product of products) {
    const created = await prisma.product.upsert({
      where: { id: product.name.toLowerCase().replace(/\s+/g, '-') },
      update: product,
      create: product,
    });
    console.log(`Created/updated: ${created.name}`);
  }

  console.log(`Seeded ${products.length} products successfully!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
