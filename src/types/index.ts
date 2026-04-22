export type RoomType = "standard" | "junior" | "presidency";
export type PaymentMethod = "card" | "bkash" | "nagad";
export type ToastType = "" | "error" | "success";

export interface Room {
  id: RoomType;
  tier: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  tags: string[];
  image: string;
}

export interface Amenity {
  icon: string;
  name: string;
  description: string;
}

export interface AmenityPhoto {
  label: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  caption: string;
  image: string;
}

export interface Testimonial {
  id: number;
  stars: number;
  text: string;
  authorName: string;
  initials: string;
  date: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface BookingData {
  room: RoomType | null;
  rate: number;
  nights: number;
  checkIn: string;
  checkOut: string;
  guests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requests: string;
  source: string;
  paymentMethod: PaymentMethod;
  total: number;
  subtotal: number;
  tax: number;
  reference: string;
}
