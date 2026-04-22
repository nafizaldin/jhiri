"use client";

import { useRef } from "react";
import type { RoomType } from "@/types";
import type { BookingHandle } from "@/components/sections/Booking";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const bookingRef = useRef<BookingHandle>(null);

  const handleQuickBook = (roomId: RoomType) => {
    bookingRef.current?.quickBook(roomId);
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Rooms onQuickBook={handleQuickBook} />
      <Amenities />
      <Testimonials />
      <Location />
      <Booking ref={bookingRef} />
      <Footer />
    </main>
  );
}
