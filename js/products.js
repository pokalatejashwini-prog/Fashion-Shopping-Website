/**
 * Aura Atelier - Premium Fashion Store
 * Complete Product Database
 */

const PRODUCTS_DATA = [
  // ================= MEN'S COLLECTION =================
  {
    id: "men-01",
    name: "Architectural Wool Overcoat",
    category: "men",
    subCategory: "jackets",
    price: 249.00,
    originalPrice: 320.00,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Best Seller",
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", hex: "#2b2b2b" },
      { name: "Camel", hex: "#c19a6b" },
      { name: "Midnight Navy", hex: "#1c2833" }
    ],
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Tailored to exacting proportions, this wool overcoat features structured shoulders, notched lapels, and a fluid silhouette. Crafted from a heavyweight Italian virgin wool blend designed to insulate while offering refined sophistication.",
    details: [
      "75% Virgin Wool, 20% Polyamide, 5% Cashmere",
      "Full cupro lining with internal welt pockets",
      "Double breasted horn button closure",
      "Dry clean only",
      "Crafted in Italy"
    ]
  },
  {
    id: "men-02",
    name: "Supima Cotton Minimalist Tee",
    category: "men",
    subCategory: "tshirts",
    price: 45.00,
    originalPrice: 58.00,
    rating: 4.8,
    reviewsCount: 310,
    badge: "Trending",
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Optic White", hex: "#ffffff" },
      { name: "Onyx Black", hex: "#111111" },
      { name: "Sage Green", hex: "#7a8b7b" }
    ],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80"
    ],
    description: "The quintessential luxury basic. Woven from 100% American long-staple Supima cotton, this T-shirt boasts a silk-like handfeel, natural breathability, and enduring color saturation wash after wash.",
    details: [
      "100% Certified Supima Cotton",
      "Pre-shrunk jersey knit 220 GSM",
      "Reinforced ribbed collar that retains shape",
      "Tailored modern regular fit",
      "Machine wash cold"
    ]
  },
  {
    id: "men-03",
    name: "Japanese Selvedge Denim Jeans",
    category: "men",
    subCategory: "jeans",
    price: 185.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Sale",
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    sizes: ["30", "32", "34", "36"],
    colors: [
      { name: "Raw Indigo", hex: "#1b2a47" },
      { name: "Washed Slate", hex: "#4a5568" }
    ],
    images: [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Milled in Okayama on vintage shuttle looms. 14oz raw selvedge denim that shapes uniquely to your body over time, cultivating personalized whiskers, honeycombs, and patina.",
    details: [
      "100% Cotton 14oz Raw Selvedge",
      "Red line selvedge ID at outseam",
      "Solid copper rivets and button fly",
      "Slim straight fit",
      "Wash inside out in cold water"
    ]
  },
  {
    id: "men-04",
    name: "Classic Oxford Poplin Shirt",
    category: "men",
    subCategory: "shirts",
    price: 89.00,
    originalPrice: 110.00,
    rating: 4.7,
    reviewsCount: 195,
    badge: "New",
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sky Blue", hex: "#99badd" },
      { name: "Crisp White", hex: "#f8f9fa" },
      { name: "French Stripe", hex: "#ced4da" }
    ],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A sartorial staple woven with double-twisted yarn for a crisp texture that naturally resists creasing. Finished with genuine mother-of-pearl buttons and a button-down roll collar.",
    details: [
      "100% Long-Staple Egyptian Cotton",
      "Mother-of-pearl buttons",
      "Box pleat at back for effortless motion",
      "Semi-spread button-down collar",
      "Machine wash 40°C"
    ]
  },
  {
    id: "men-05",
    name: "Pleated Relaxed Trousers",
    category: "men",
    subCategory: "trousers",
    price: 135.00,
    originalPrice: 165.00,
    rating: 4.6,
    reviewsCount: 76,
    badge: "",
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    sizes: ["30", "32", "34", "36"],
    colors: [
      { name: "Sand Stone", hex: "#d5cbb2" },
      { name: "Espresso", hex: "#3b2f2f" },
      { name: "Black", hex: "#111111" }
    ],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Combining bespoke tailoring with modern ease. Double pleats at the waist give way to a relaxed tapered leg, offering timeless drape whether paired with knitwear or formal blazers.",
    details: [
      "68% Viscose, 28% Wool, 4% Elastane",
      "Side waist adjusters with brass buckles",
      "Slanted side pockets and jetted rear pockets",
      "Relaxed taper silhouette"
    ]
  },
  {
    id: "men-06",
    name: "Handcrafted Chelsea Leather Boots",
    category: "men",
    subCategory: "shoes",
    price: 275.00,
    originalPrice: 340.00,
    rating: 4.9,
    reviewsCount: 220,
    badge: "Best Seller",
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Burnished Tan", hex: "#8c532b" },
      { name: "Matte Black", hex: "#1a1a1a" }
    ],
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582895577934-2e9154746f33?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Goodyear welted Chelsea boots crafted from full-grain calfskin leather. With flexible elastic gussets, pull tabs, and studded Dainite rubber soles for longevity and grip in all seasons.",
    details: [
      "Full-grain European calfskin",
      "Goodyear welted construction (resolable)",
      "Supple calf leather interior lining",
      "Dainite rubber studded outsole",
      "Handcrafted in Portugal"
    ]
  },
  {
    id: "men-07",
    name: "Minimalist Chronograph Watch",
    category: "men",
    subCategory: "accessories",
    price: 195.00,
    originalPrice: 260.00,
    rating: 4.8,
    reviewsCount: 94,
    badge: "Sale",
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    sizes: ["One Size"],
    colors: [
      { name: "Gold / Emerald", hex: "#c5a880" },
      { name: "Silver / White", hex: "#c0c0c0" }
    ],
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
    ],
    description: "An understated Bauhaus aesthetic meets Swiss quartz precision. Housed in a 40mm brushed 316L stainless steel case with anti-reflective sapphire crystal glass and interchangeable leather strap.",
    details: [
      "Swiss Ronda Quartz Chronograph Movement",
      "Sapphire crystal with scratch-resistant coating",
      "5 ATM (50m) Water Resistance",
      "Top-grain vegetable-tanned Italian leather band",
      "Case diameter: 40mm | Thickness: 9.5mm"
    ]
  },
  {
    id: "men-08",
    name: "Vintage Aviator Suede Bomber",
    category: "men",
    subCategory: "jackets",
    price: 295.00,
    originalPrice: 380.00,
    rating: 4.9,
    reviewsCount: 65,
    badge: "New",
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cognac Suede", hex: "#965b38" },
      { name: "Olive Moss", hex: "#4b5320" }
    ],
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Crafted from velvety goat suede with heavy ribbed knit trims at collar, cuffs, and hem. Features custom antique brass hardware and satin twill lining for an iconic silhouette.",
    details: [
      "100% Genuine Goat Suede",
      "Rib-knit cotton-blend storm cuffs and collar",
      "Two-way YKK antique brass zip closure",
      "Dual front snap pockets and zip sleeve pocket",
      "Specialist leather clean only"
    ]
  },

  // ================= WOMEN'S COLLECTION =================
  {
    id: "women-01",
    name: "Silk Satin Draped Evening Gown",
    category: "women",
    subCategory: "dresses",
    price: 285.00,
    originalPrice: 360.00,
    rating: 4.9,
    reviewsCount: 178,
    badge: "Best Seller",
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Champagne Gold", hex: "#e5b869" },
      { name: "Emerald Glaze", hex: "#1d5c42" },
      { name: "Midnight Noir", hex: "#111111" }
    ],
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
    ],
    description: "An ode to quiet luxury. Cut on the bias from 22-momme pure mulberry silk, this maxi dress features a sculptural cowl neckline, low open back, and sweeping column hem that cascades with liquid sheen.",
    details: [
      "100% Grade 6A Pure Mulberry Silk",
      "Bias cut for natural body contouring",
      "Adjustable delicate criss-cross back ties",
      "Floor-grazing length with side slit",
      "Dry clean or hand wash cold with silk detergent"
    ]
  },
  {
    id: "women-02",
    name: "Royal Heritage Banarasi Silk Saree",
    category: "women",
    subCategory: "sarees",
    price: 340.00,
    originalPrice: 420.00,
    rating: 5.0,
    reviewsCount: 112,
    badge: "Trending",
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    sizes: ["Free Size"],
    colors: [
      { name: "Royal Crimson", hex: "#990000" },
      { name: "Mustard Gold", hex: "#d4af37" },
      { name: "Peacock Teal", hex: "#004953" }
    ],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Masterfully handwoven in Varanasi using fine katan silk and intricate gold zari brocade work. Featuring regal floral jaal motifs and an opulent pallu that celebrates centuries of Indian textile artistry.",
    details: [
      "100% Pure Katan Silk with Metallic Zari Weft",
      "Length: 5.5 meters saree + 0.8 meter matching unstitched blouse piece",
      "Certified Silk Mark authentic handloom",
      "Intricate floral kadhwa weave border",
      "Preserve in muslin cloth, dry clean only"
    ]
  },
  {
    id: "women-03",
    name: "Hand-Embroidered Chanderi Kurti Set",
    category: "women",
    subCategory: "kurtis",
    price: 145.00,
    originalPrice: 190.00,
    rating: 4.8,
    reviewsCount: 84,
    badge: "Sale",
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Powder Blush", hex: "#f4c2c2" },
      { name: "Mint Sage", hex: "#a2b89b" },
      { name: "Ivory Pearl", hex: "#fffdd0" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Three-piece ensemble crafted from featherlight Chanderi silk-cotton. Adorned with delicate gota patti hand embroidery, paired with cigarette trousers and an airy scalloped organza dupatta.",
    details: [
      "Kurti & Pants: Chanderi Silk Blend with pure cotton lining",
      "Dupatta: Pure Organza with hand-embroidered border",
      "Three-quarter sleeves with keyhole detail",
      "Dry clean recommended"
    ]
  },
  {
    id: "women-04",
    name: "Luxe Quilted Leather Crossbody Bag",
    category: "women",
    subCategory: "handbags",
    price: 210.00,
    originalPrice: 280.00,
    rating: 4.9,
    reviewsCount: 245,
    badge: "Best Seller",
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    sizes: ["One Size"],
    colors: [
      { name: "Caramel Latte", hex: "#a47148" },
      { name: "Noir Black", hex: "#111111" },
      { name: "Cream White", hex: "#fdfbf7" }
    ],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Iconic diamond quilting meets supple Italian nappa leather. Accented by high-shine 24k gold-tone hardware, a versatile convertible chain strap, and organized multi-compartment interior.",
    details: [
      "100% Genuine Italian Nappa Leather",
      "Gold-plated twist-lock clasp and hardware",
      "Dual interior zip and slip compartments",
      "Dimensions: 26cm W x 16cm H x 8cm D",
      "Includes protective dust bag"
    ]
  },
  {
    id: "women-05",
    name: "Palazzo Cut High-Waist Denim",
    category: "women",
    subCategory: "jeans",
    price: 115.00,
    originalPrice: 145.00,
    rating: 4.7,
    reviewsCount: 96,
    badge: "",
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    sizes: ["26", "28", "30", "32", "34"],
    colors: [
      { name: "Vintage Light Wash", hex: "#7ba7bc" },
      { name: "Deep Indigo", hex: "#23395d" }
    ],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A flattering ultra-high rise combined with an elongating wide-leg palazzo cut. Woven with authentic cotton and 1% comfort stretch for all-day ease without losing structure.",
    details: [
      "99% Organic Cotton, 1% Elastane",
      "12-inch ultra-high rise fit",
      "Raw-cut hem detail",
      "Machine wash cold inside out"
    ]
  },
  {
    id: "women-06",
    name: "Sculpted Pointed Stiletto Pumps",
    category: "women",
    subCategory: "shoes",
    price: 185.00,
    originalPrice: 240.00,
    rating: 4.8,
    reviewsCount: 130,
    badge: "New",
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      { name: "Nude Blush", hex: "#e8c5b8" },
      { name: "Glossy Black", hex: "#111111" },
      { name: "Ruby Red", hex: "#9b111e" }
    ],
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=900&q=80"
    ],
    description: "The definition of feminine power dressing. Crafted with sleek pointed toes, deep cut vamp, cushioned memory foam insole, and an arch-flattering 90mm sculpted heel.",
    details: [
      "Italian patent leather upper",
      "Padded leather footbed with arch support",
      "90mm (3.5 inch) lacquered stiletto heel",
      "Leather sole with non-slip protective rubber cap",
      "Made in Italy"
    ]
  },
  {
    id: "women-07",
    name: "French Rib Knit Mock Neck Top",
    category: "women",
    subCategory: "tops",
    price: 65.00,
    originalPrice: 85.00,
    rating: 4.7,
    reviewsCount: 165,
    badge: "Sale",
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Oatmeal Melange", hex: "#d9d0c7" },
      { name: "Mocha", hex: "#634735" },
      { name: "Jet Black", hex: "#111111" }
    ],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Engineered from a dense, fine-gauge modal blend that holds its shape while contouring effortlessly. Features a high mock neck and elongated cuffs for streamlined layering.",
    details: [
      "70% Modal, 25% Polyamide, 5% Spandex",
      "Seamless rib knit construction",
      "Thermal regulating and pill-resistant",
      "Hand wash cold, dry flat"
    ]
  },
  {
    id: "women-08",
    name: "18K Gold Vermeil Heritage Choker",
    category: "women",
    subCategory: "accessories",
    price: 125.00,
    originalPrice: 160.00,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Trending",
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    sizes: ["Adjustable"],
    colors: [
      { name: "Yellow Gold", hex: "#d4af37" },
      { name: "Rose Gold", hex: "#b76e79" }
    ],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Thick 2.5 micron 18K yellow gold bonded over 925 sterling silver. Herringbone weave design that lies flat against the collarbone with mirror-finish reflection.",
    details: [
      "18K Gold Vermeil over 925 Sterling Silver",
      "Width: 4.5mm | Length: 15 inches + 2 inch extender",
      "Lobster clasp with branded tag",
      "Hypoallergenic and nickel-free",
      "Includes velvet jewelry box"
    ]
  },

  // ================= KIDS' COLLECTION =================
  {
    id: "kids-01",
    name: "Organic Cotton Explorer Set",
    category: "kids",
    subCategory: "boys",
    price: 48.00,
    originalPrice: 62.00,
    rating: 4.8,
    reviewsCount: 92,
    badge: "Best Seller",
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: [
      { name: "Forest Camo", hex: "#556b2f" },
      { name: "Warm Terracotta", hex: "#cc4e46" }
    ],
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Crafted for curious adventures. Two-piece set featuring a breathable graphic pocket tee and relaxed cargo shorts with elastic drawstring waistband. Certified non-toxic organic dyes.",
    details: [
      "100% GOTS Certified Organic Cotton",
      "Scratch-free printed interior tag",
      "Elasticated waistband with functional cotton drawcord",
      "Double-stitched knees for extra playtime durability",
      "Machine wash warm"
    ]
  },
  {
    id: "kids-02",
    name: "Girls Tiered Tulle Party Frock",
    category: "kids",
    subCategory: "girls",
    price: 68.00,
    originalPrice: 88.00,
    rating: 4.9,
    reviewsCount: 104,
    badge: "Trending",
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: [
      { name: "Dusty Rose", hex: "#dcae96" },
      { name: "Starlight Lilac", hex: "#b39eb5" },
      { name: "Cloud Ivory", hex: "#fcfbf7" }
    ],
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Every celebration calls for a sprinkle of wonder. Multi-layered gossamer tulle tiers over a breathable 100% cotton voile slip, adorned with metallic shimmer accents and satin ribbon sash.",
    details: [
      "Outer: Multi-tiered soft French tulle",
      "Lining: 100% Pure breathable cotton (gentle on sensitive skin)",
      "Concealed back zipper with protective fabric flap",
      "Hand wash cold, air dry"
    ]
  },
  {
    id: "kids-03",
    name: "Classic Unisex Kids Denim Jacket",
    category: "kids",
    subCategory: "clothing",
    price: 55.00,
    originalPrice: 70.00,
    rating: 4.7,
    reviewsCount: 78,
    badge: "Sale",
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Medium Vintage Wash", hex: "#4682b4" },
      { name: "Light Bleach Wash", hex: "#a4c2e0" }
    ],
    images: [
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=80"
    ],
    description: "The timeless trucker jacket miniature. Built from rugged yet soft washed denim with snap buttons designed specifically for little hands to easily button and unbutton.",
    details: [
      "100% Pre-washed Cotton Denim",
      "Easy-snap copper buttons",
      "Side hand pockets and buttoned chest flap pockets",
      "Machine washable, gets softer with every wash"
    ]
  },
  {
    id: "kids-04",
    name: "Flexi-Grip Active Kids Sneakers",
    category: "kids",
    subCategory: "shoes",
    price: 52.00,
    originalPrice: 65.00,
    rating: 4.8,
    reviewsCount: 140,
    badge: "Best Seller",
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    sizes: ["28", "29", "30", "31", "32", "33"],
    colors: [
      { name: "Neon Coral / White", hex: "#ff6f61" },
      { name: "Slate Navy", hex: "#1c39bb" }
    ],
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Engineered for growing feet. High-bounce EVA foam midsole absorbs playground shock, while breathable engineered mesh and secure dual hook-and-loop straps make getting dressed effortless.",
    details: [
      "Lightweight engineered knit upper",
      "Non-marking natural rubber traction tread",
      "Dual adjustable velcro straps",
      "Orthopedic antimicrobial insole",
      "Wipe clean with damp cloth"
    ]
  },
  {
    id: "kids-05",
    name: "Floral Embroidered Linen Romper",
    category: "kids",
    subCategory: "girls",
    price: 42.00,
    originalPrice: 55.00,
    rating: 4.9,
    reviewsCount: 62,
    badge: "New",
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y"],
    colors: [
      { name: "Pastel Buttercup", hex: "#fdfd96" },
      { name: "Vintage Bluebell", hex: "#a2c2e8" }
    ],
    images: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1471286174890-9c112ffca56a?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Sun-soaked days made stylish. Pure airy linen romper with delicate hand-stitched floral bouquets along the yoke, flutter ruffle sleeves, and easy bottom snap closures.",
    details: [
      "55% Organic Linen, 45% Cotton",
      "Nickel-free crotch snap closure for rapid changes",
      "Elasticated leg openings with ruffle finish",
      "Machine wash gentle, iron warm"
    ]
  },
  {
    id: "kids-06",
    name: "Kids UV400 Polarized Sunglasses & Case",
    category: "kids",
    subCategory: "accessories",
    price: 24.00,
    originalPrice: 32.00,
    rating: 4.8,
    reviewsCount: 86,
    badge: "",
    isNew: false,
    isTrending: false,
    isBestSeller: false,
    sizes: ["One Size"],
    colors: [
      { name: "Caramel Honey", hex: "#d4a373" },
      { name: "Sky Pastel", hex: "#90e0ef" }
    ],
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Indestructible bendable frames made from food-grade Swiss TR90 silicone. 100% UV400 polarized lenses safeguard delicate eyes during bright outdoor adventures.",
    details: [
      "Unbreakable flexible TPE frame (BPA-free)",
      "100% UVA / UVB Polarized Category 3 lenses",
      "Includes adjustable neoprene strap and felt pouch",
      "Suitable for ages 2 to 9 years"
    ]
  }
];

// Helper functions for accessing products
const ProductStore = {
  getAll: () => PRODUCTS_DATA,
  
  getById: (id) => PRODUCTS_DATA.find(p => p.id === id),
  
  getByCategory: (category) => {
    if (!category || category === "all") return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter(p => p.category.toLowerCase() === category.toLowerCase());
  },
  
  getFeatured: (type = "trending") => {
    switch (type) {
      case "trending":
        return PRODUCTS_DATA.filter(p => p.isTrending);
      case "new":
        return PRODUCTS_DATA.filter(p => p.isNew);
      case "bestseller":
        return PRODUCTS_DATA.filter(p => p.isBestSeller);
      case "sale":
        return PRODUCTS_DATA.filter(p => p.badge.toLowerCase().includes("sale") || p.originalPrice > p.price);
      default:
        return PRODUCTS_DATA.slice(0, 8);
    }
  },

  search: (query) => {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS_DATA.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subCategory.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.ProductStore = ProductStore;
}
