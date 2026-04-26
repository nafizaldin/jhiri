"use client";

import { useState } from "react";
import { useToastStore } from "@/lib/stores/useToastStore";
import styles from "./Footer.module.scss";

const EXPLORE = [
  { href: "#about", label: "About Us" },
  { href: "#rooms", label: "Rooms & Suites" },
  { href: "#amenities", label: "Amenities" },
  { href: "#reviews", label: "Guest Reviews" },
  { href: "#location", label: "Location" },
];

const SERVICES = [
  { href: "#amenities", label: "Dining" },
  { href: "#amenities", label: "Conferences" },
  { href: "#amenities", label: "Swimming Pool" },
  { href: "#amenities", label: "Kids Zone" },
  { href: "#amenities", label: "24/7 Security" },
];

const INFO = [
  { href: "#", label: "Guest Policy" },
  { href: "#", label: "Cancellation" },
  { href: "#", label: "Privacy Policy" },
  { href: "#book", label: "Book Now" },
  { href: "#location", label: "Getting There" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const showToast = useToastStore((s) => s.showToast);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      showToast("Please enter a valid email address.", "error");
      return;
    }
    showToast("Thank you for subscribing! Exclusive offers are on their way.", "success");
    setEmail("");
  };

  return (
    <>
      {/* Contact strip */}
      <div className={styles.contactStrip}>
        <div className={styles.ci}>
          <div className={styles.ciIcon}>📞</div>
          <div><span>Reservations</span><p>+880 1234 567890</p></div>
        </div>
        <div className={styles.ci}>
          <div className={styles.ciIcon}>✉️</div>
          <div><span>Email</span><p>stay@jhiriresort.com</p></div>
        </div>
        <div className={styles.ci}>
          <div className={styles.ciIcon}>💬</div>
          <div><span>WhatsApp</span><p>+880 1234 567890</p></div>
        </div>
        <div className={styles.ci}>
          <div className={styles.ciIcon}>🕐</div>
          <div><span>Check-In / Out</span><p>2:00 PM / 12:00 PM</p></div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.brand}>
          <a href="#">Jhiri <span>Resort</span></a>
          <p>A sanctuary of stillness in the heart of Sreemangal&apos;s tea country. Where nature and luxury meet in quiet harmony.</p>
          <div className={styles.newsletter}>
            <p>Subscribe for exclusive offers:</p>
            <form className={styles.nlForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <FooterCol title="Explore" links={EXPLORE} />
        <FooterCol title="Services" links={SERVICES} />
        <FooterCol title="Info" links={INFO} />
      </footer>

      <div className={styles.bottom}>
        <p>© 2024 Jhiri Resort. All rights reserved. Sreemangal, Bangladesh.</p>
        <div className={styles.socials}>
          <a href="#" title="Facebook" aria-label="Facebook">f</a>
          <a href="#" title="Instagram" aria-label="Instagram">ig</a>
          <a href="#" title="LinkedIn" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className={styles.col}>
      <h4>{title}</h4>
      <ul>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
