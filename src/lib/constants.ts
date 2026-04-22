import type { Room, Amenity, AmenityPhoto, GalleryItem, Testimonial, NavLink } from "@/types";

export const ROOMS: Room[] = [
  {
    id: "standard",
    tier: "Entry Luxury · Garden View",
    name: "Standard Deluxe",
    price: 1000,
    description:
      "A serene retreat immersed in Sreemangal's verdant tea gardens. Featuring a large picture window opening to curated garden views, our Standard Deluxe rooms blend natural textures with refined comfort. Ideal for solo travellers and couples seeking a peaceful escape.",
    features: [
      "King or twin bed configuration",
      "Garden panorama view",
      "High-speed WiFi included",
      "Complimentary daily breakfast",
      'Smart 40" LED television',
      "In-room safe & minibar",
      "Tea & coffee station",
      "24-hour room service",
      "Air conditioning & ceiling fan",
      "Private en-suite bathroom",
    ],
    tags: ["Garden View", "WiFi", "Breakfast"],
    image: "https://picsum.photos/seed/jhiri-std/800/600",
  },
  {
    id: "junior",
    tier: "Signature Suite · Lake View",
    name: "Junior Suite",
    price: 5000,
    description:
      "Experience elevated luxury with a separate living area and breathtaking lake views that stretch across Sreemangal's shimmering wetlands. The Junior Suite is perfect for couples seeking a romantic escape or discerning travellers who want that extra space.",
    features: [
      "Separate living and sleeping areas",
      "Panoramic lake-facing windows",
      "Complimentary pool access",
      "Premium breakfast included",
      '55" Smart TV in both rooms',
      "Nespresso coffee machine",
      "Complimentary minibar",
      "Soaking bathtub & rain shower",
      "Butler-on-call service",
      "Dedicated check-in & checkout",
    ],
    tags: ["Lake View", "Living Area", "Pool Access"],
    image: "https://picsum.photos/seed/jhiri-junior/800/600",
  },
  {
    id: "presidency",
    tier: "Ultra Premium · Panoramic",
    name: "Presidency Suite",
    price: 15000,
    description:
      "The pinnacle of Jhiri Resort's hospitality. A palatial 2,200 sqft suite with a grand arched window framing an unobstructed panorama of tea hills and evening sky. Private butler, candlelit dining, and an experience that redefines luxury in Bangladesh.",
    features: [
      "Palatial 2,200 sqft floor plan",
      "360° panoramic arched windows",
      "Dedicated private butler",
      "Private candlelit dining setup",
      "Cinema-grade home theatre",
      "Jacuzzi & outdoor terrace",
      "Bespoke welcome amenities",
      "Champagne & fruit on arrival",
      "VIP airport transfer included",
      "Complimentary spa treatment",
    ],
    tags: ["Panoramic View", "Butler", "Private Dining"],
    image: "https://picsum.photos/seed/jhiri-pres/800/600",
  },
];

export const AMENITIES: Amenity[] = [
  {
    icon: "🍽️",
    name: "Fine Dining",
    description:
      "Savour authentic Bengali cuisine and international fare, crafted from locally sourced seasonal ingredients in an open-air setting.",
  },
  {
    icon: "🏛️",
    name: "Conference Room",
    description:
      "A fully equipped, acoustically designed conference facility for corporate retreats, board meetings, and special events.",
  },
  {
    icon: "🥐",
    name: "Complimentary Breakfast",
    description:
      "Begin every morning with an elaborate spread — local favourites alongside continental selections, freshly prepared.",
  },
  {
    icon: "🏊",
    name: "Swimming Pool",
    description:
      "A serene, temperature-regulated pool set against the backdrop of Sreemangal's rolling green hills and open skies.",
  },
  {
    icon: "🎠",
    name: "Kids Play Zone",
    description:
      "A safe, joyful space for younger guests to explore, play, and create lasting memories while parents unwind.",
  },
  {
    icon: "🛡️",
    name: "24/7 Security",
    description:
      "Round-the-clock professional security so your family can relax with complete peace of mind throughout the stay.",
  },
];

export const AMENITY_PHOTOS: AmenityPhoto[] = [
  { label: "Fine Dining", image: "https://picsum.photos/seed/jhiri-dining/600/440" },
  { label: "Swimming Pool", image: "https://picsum.photos/seed/jhiri-pool/600/440" },
  { label: "Conference Room", image: "https://picsum.photos/seed/jhiri-conf/600/440" },
  { label: "Kids Play Zone", image: "https://picsum.photos/seed/jhiri-kids/600/440" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 0,
    caption: "Tea Gardens of Sreemangal",
    image: "https://picsum.photos/seed/jhiri-gallery1/1200/860",
  },
  {
    id: 1,
    caption: "Luxury Rooms & Suites",
    image: "https://picsum.photos/seed/jhiri-gallery2/800/860",
  },
  {
    id: 2,
    caption: "Swimming Pool at Night",
    image: "https://picsum.photos/seed/jhiri-gallery3/800/860",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    text: "An extraordinary escape. The Presidency Suite had us speechless — waking up to misty tea gardens through that arched window was a memory I'll treasure forever.",
    authorName: "Rahim Ahmed",
    initials: "RA",
    date: "March 2025 · Presidency Suite",
  },
  {
    id: 2,
    stars: 5,
    text: "We brought our two kids and they loved the play zone while we relaxed by the pool. The breakfast spread was exceptional — fresh, local, and beautifully presented.",
    authorName: "Sumaiya Noor",
    initials: "SN",
    date: "February 2025 · Junior Suite",
  },
  {
    id: 3,
    stars: 4,
    text: "Perfect venue for our corporate retreat. The conference room is world-class and the team's hospitality exceeded all expectations. We'll definitely return.",
    authorName: "Mahbub Hossain",
    initials: "MH",
    date: "January 2025 · Standard Deluxe",
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];
