export const PRODUCTCATEGORY = [
  // {
  //   id: 1,
  //   name: "Home",
  //   // description: "Devices and gadgets",
  //   url: "",
  //   icon: "bi bi-house-door", // Home icon
  // },
  {
    id: 2,
    name: "Electronics",
    description: "Devices and gadgets",
    url: "electronics",
    icon: "bi bi-tv", // TV icon
  },
  {
    id: 3,
    name: "Clothing",
    description: "Apparel and accessories",
    url: "clothing",
    icon: "bi bi-shop", // Shop icon
  },
  {
    id: 4,
    name: "Home & Kitchen",
    description: "Furniture and kitchenware",
    url: "home-kitchen",
    icon: "bi bi-cup", // Cup icon
  },
  {
    id: 5,
    name: "Books",
    description: "Literature and educational materials",
    url: "books",
    icon: "bi bi-book", // Book icon
  },
  {
    id: 6,
    name: "Beauty & Personal Care",
    description: "Cosmetics, skincare, and grooming products",
    url: "beauty-personal-care",
    icon: "bi bi-heart", // Heart icon
  },
  {
    id: 7,
    name: "Sports & Outdoors",
    description: "Sporting goods, fitness equipment, and outdoor gear",
    url: "sports-outdoors",
    icon: "bi bi-bicycle", // Bicycle icon
  },
  {
    id: 8,
    name: "Toys & Games",
    description: "Children's toys, board games, and puzzles",
    url: "toys-games",
    icon: "bi bi-controller", // Controller icon
  },
  {
    id: 9,
    name: "Health & Wellness",
    description: "Healthcare products, supplements, and wellness items",
    url: "health-wellness",
    icon: "bi bi-activity", // Activity icon
  },
  {
    id: 10,
    name: "Automotive",
    description: "Car accessories, parts, and tools",
    url: "automotive",
    icon: "bi bi-car-front", // Car icon
  },
  {
    id: 11,
    name: "Jewelry & Watches",
    description: "Jewelry, watches, and accessories",
    url: "jewelry-watches",
    icon: "bi bi-gem", // Gem icon
  },
  {
    id: 12,
    name: "Groceries",
    description: "Food, beverages, and household essentials",
    url: "groceries",
    icon: "bi bi-basket", // Basket icon
  },
  {
    id: 13,
    name: "Office Supplies",
    description: "Office furniture, supplies, and stationery",
    url: "office-supplies",
    icon: "bi bi-briefcase", // Briefcase icon
  },
  {
    id: 14,
    name: "Pet Supplies",
    description: "Products for pets including food, toys, and grooming items",
    url: "pet-supplies",
    icon: "bi bi-paw", // Paw icon
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Nike Air Max 270",
    description:
      "The Nike Air Max 270 is a stylish and comfortable sneaker with a large Air Max unit for exceptional cushioning. Perfect for both casual wear and athletic activities.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/7381602/1.jpg?8228",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/7381602/3.jpg?8228",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/7381602/4.jpg?8228",
    ],
    categoryId: 2,
    price: 59.99,
    originalPrice: 79.99,
    featured: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description:
      "The Samsung Galaxy S21 features a stunning display, powerful processor, and an impressive triple camera setup for capturing high-quality photos and videos.",
    images: [
      "https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/7043632/1.jpg?1512",
    ],
    categoryId: 2,
    price: 799.99,
    originalPrice: 999.99,
    featured: true,
  },
  {
    id: 3,
    name: "Apple MacBook Air",
    description:
      "The Apple MacBook Air offers a sleek design, fast performance with the M1 chip, and a long-lasting battery. Ideal for professionals and students alike.",
    images: [
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/5884931/1.jpg?0805",
      "https://gh.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/95/5884931/3.jpg?0805",
      "https://gh.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/95/5884931/2.jpg?0805",
    ],
    categoryId: 2,
    price: 999.99,
    originalPrice: 1249.99,
    featured: true,
  },
  {
    id: 4,
    name: "Sony WH-1000XM4",
    description:
      "Experience industry-leading noise cancellation with the Sony WH-1000XM4 headphones, featuring superior sound quality and long battery life for uninterrupted listening.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/8563702/1.jpg?6628",
    ],
    categoryId: 4,
    price: 349.99,
    originalPrice: 399.99,
    featured: true,
  },
  {
    id: 5,
    name: "Adidas Ultraboost 21",
    description:
      "The Adidas Ultraboost 21 offers exceptional energy return and comfort, making it perfect for running and casual wear.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/8485241/1.jpg?6534",
    ],
    categoryId: 6,
    price: 129.99,
    originalPrice: 149.99,
    featured: false, // Not featured
  },
  {
    id: 6,
    name: "Dell XPS 13",
    description:
      "The Dell XPS 13 is a high-performance laptop with a stunning 13.4-inch display, perfect for professionals and creative work.",
    images: [
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/7586351/1.jpg?5092",
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/7586351/2.jpg?5092",
    ],
    categoryId: 2,
    price: 1099.99,
    originalPrice: 1299.99,
    featured: false, // Not featured
  },
  {
    id: 7,
    name: "Bose QuietComfort 35 II",
    description:
      "The Bose QuietComfort 35 II offers world-class noise cancellation and balanced audio performance for an immersive listening experience.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/6028702/1.jpg?1834",
    ],
    categoryId: 4,
    price: 299.99,
    originalPrice: 349.99,
    featured: false, // Not featured
  },
  {
    id: 8,
    name: "Huawei P40 Pro",
    description:
      "The Huawei P40 Pro features a 50MP Ultra Vision Camera, 5G support, and a stunning design, making it a top choice for smartphone enthusiasts.",
    images: [
      "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/6284331/1.jpg?1347",
    ],
    categoryId: 2,
    price: 899.99,
    originalPrice: 1099.99,
    featured: false, // Not featured
  },
  {
    id: 9,
    name: "Canon EOS 90D",
    description:
      "The Canon EOS 90D is a versatile DSLR camera with a 32.5MP sensor and 4K video recording, ideal for photographers and videographers.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/9675941/1.jpg?2887",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/9675941/2.jpg?2887",
    ],
    categoryId: 2,
    price: 1199.99,
    originalPrice: 1399.99,
    featured: false, // Not featured
  },
  {
    id: 10,
    name: "PlayStation 5",
    description:
      "The PlayStation 5 delivers lightning-fast loading, immersive 3D audio, and stunning graphics for the ultimate gaming experience.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/8163701/1.jpg?3334",
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/8163701/2.jpg?3334",
    ],
    categoryId: 3,
    price: 499.99,
    originalPrice: 599.99,
    featured: false, // Not featured
  },
  {
    id: 11,
    name: "Maybelline Fit Me Foundation",
    description:
      "The Maybelline Fit Me Foundation provides a natural, flawless finish, suitable for all skin types and tones.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/6835731/1.jpg?3137",
    ],
    categoryId: 7,
    price: 9.99,
    originalPrice: 14.99,
    featured: false, // Not featured
  },
  {
    id: 12,
    name: "Nerf Elite 2.0 Commander RD-6 Blaster",
    description:
      "The Nerf Elite 2.0 Commander RD-6 Blaster offers tactical rail customization, rotating drum, and firepower for action-packed fun.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/8273612/1.jpg?2156",
    ],
    categoryId: 9,
    price: 24.99,
    originalPrice: 29.99,
    featured: false, // Not featured
  },
  {
    id: 13,
    name: "Under Armour Men's Tech 2.0 T-Shirt",
    description:
      "The Under Armour Men's Tech 2.0 T-Shirt is made from quick-drying, ultra-soft fabric, perfect for workouts and everyday wear.",
    images: [
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/9848521/1.jpg?1143",
    ],
    categoryId: 6,
    price: 25.99,
    originalPrice: 29.99,
    featured: false, // Not featured
  },
];
