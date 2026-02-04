const outfits = [
  {
    id: 1,
    title: "Casual Summer Outfit",
    category: "Casual",
    season: "Summer",
    description: "Light t-shirt and shorts perfect for hot summer days.",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5c0",
    price: 12000,
    keywords: ["casual", "summer", "light"]
  },
  {
    id: 2,
    title: "Beach Day Vibes",
    category: "Casual",
    season: "Summer",
    description: "Sleeveless top with linen shorts and sandals for the beach.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    price: 15000,
    keywords: ["summer", "beach", "linen", "casual"]
  },
  {
    id: 3,
    title: "Urban Streetwear Set",
    category: "Streetwear",
    season: "All",
    description: "Oversized hoodie and joggers with sneakers for a relaxed city look.",
    image: "https://images.unsplash.com/photo-1520974735194-b0ae316ea2be",
    price: 18000,
    keywords: ["streetwear", "hoodie", "joggers", "sneakers"]
  },
  {
    id: 4,
    title: "Smart Casual Office Look",
    category: "Business Casual",
    season: "All",
    description: "Button‑up shirt with chinos and loafers for office days.",
    image: "https://images.unsplash.com/photo-1520975914233-20b19fba396b",
    price: 25000,
    keywords: ["business", "office", "smart casual"]
  },
  {
    id: 5,
    title: "Evening Dinner Outfit",
    category: "Formal",
    season: "All",
    description: "Dark shirt with tailored trousers for a classy dinner.",
    image: "https://images.unsplash.com/photo-1520975914233-20b19fba396b",
    price: 32000,
    keywords: ["formal", "dinner", "evening"]
  },
  {
    id: 6,
    title: "Winter Layered Look",
    category: "Casual",
    season: "Winter",
    description: "Knit sweater, coat, and jeans for cold winter days.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    price: 28000,
    keywords: ["winter", "coat", "sweater", "layers"]
  },
  {
    id: 7,
    title: "Workout Gym Fit",
    category: "Sport",
    season: "All",
    description: "Breathable t‑shirt and leggings/shorts for gym workouts.",
    image: "https://images.unsplash.com/photo-1517960413843-7e8e0e38d412",
    price: 10000,
    keywords: ["sport", "gym", "fitness"]
  },
  {
    id: 8,
    title: "Spring Picnic Outfit",
    category: "Casual",
    season: "Spring",
    description: "Light sweater and jeans perfect for a cool spring picnic.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    price: 16000,
    keywords: ["spring", "picnic", "casual"]
  },
  {
    id: 9,
    title: "Autumn Street Style",
    category: "Streetwear",
    season: "Autumn",
    description: "Denim jacket, hoodie, and chinos for crisp autumn days.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    price: 22000,
    keywords: ["autumn", "denim jacket", "street"]
  },
  {
    id: 10,
    title: "Minimal Monochrome Fit",
    category: "Casual",
    season: "All",
    description: "Monochrome t‑shirt and pants combo for a clean minimal look.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    price: 19000,
    keywords: ["minimal", "monochrome", "casual"]
  },
  {
    id: 11,
    title: "Summer Brunch Outfit",
    category: "Smart Casual",
    season: "Summer",
    description: "Short‑sleeve shirt and light trousers for brunch outings.",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5c0",
    price: 21000,
    keywords: ["summer", "brunch", "smart casual"]
  },
  {
    id: 12,
    title: "Chill Loungewear Set",
    category: "Loungewear",
    season: "All",
    description: "Soft sweatshirt and sweatpants for relaxing at home.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    price: 9000,
    keywords: ["loungewear", "home", "cozy"]
  },
  {
    id: 13,
    title: "Rainy Day Essentials",
    category: "Casual",
    season: "Rainy",
    description: "Waterproof jacket, hoodie, and jeans for rainy weather.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    price: 23000,
    keywords: ["rainy", "jacket", "hoodie"]
  },
  {
    id: 14,
    title: "Date Night Look",
    category: "Smart Casual",
    season: "All",
    description: "Fitted shirt and slim‑fit trousers for a sleek date outfit.",
    image: "https://images.unsplash.com/photo-1520975914233-20b19fba396b",
    price: 30000,
    keywords: ["date", "night", "smart casual"]
  },
  {
    id: 15,
    title: "Festival Street Outfit",
    category: "Streetwear",
    season: "Summer",
    description: "Graphic tee, shorts, and sneakers for festivals and concerts.",
    image: "https://images.unsplash.com/photo-1517960413843-7e8e0e38d412",
    price: 17000,
    keywords: ["festival", "streetwear", "summer"]
  },
  {
    id: 16,
    title: "Business Meeting Suit",
    category: "Formal",
    season: "All",
    description: "Classic blazer and tailored pants for professional meetings.",
    image: "https://images.unsplash.com/photo-1520975914233-20b19fba396b",
    price: 45000,
    keywords: ["business", "formal", "suit"]
  },
  {
    id: 17,
    title: "Weekend Errand Fit",
    category: "Casual",
    season: "All",
    description: "Basic tee, jeans, and sneakers for running errands.",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5c0",
    price: 11000,
    keywords: ["weekend", "casual", "jeans"]
  },
  {
    id: 18,
    title: "Cozy Winter Knit Set",
    category: "Loungewear",
    season: "Winter",
    description: "Thick knit sweater and warm joggers for cold days indoors.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    price: 20000,
    keywords: ["winter", "knit", "cozy", "loungewear"]
  },
  {
    id: 19,
    title: "Summer Street Shorts",
    category: "Streetwear",
    season: "Summer",
    description: "Oversized tee with cargo shorts and chunky sneakers.",
    image: "https://images.unsplash.com/photo-1517960413843-7e8e0e38d412",
    price: 14000,
    keywords: ["streetwear", "summer", "shorts"]
  },
  {
    id: 20,
    title: "Spring Office Look",
    category: "Business Casual",
    season: "Spring",
    description: "Light blazer, shirt, and chinos ideal for spring offices.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    price: 26000,
    keywords: ["spring", "office", "business casual"]
  }
];
export default outfits