"use client";

import { useState } from "react";
import { useScrollState } from "@/hooks/useScroll";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import styles from "./Navbar.module.scss";
import clsx from "clsx";

export default function Navbar() {
  const { scrolled } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={clsx(styles.nav, { [styles.scrolled]: scrolled })}>
        <a href="#" className={styles.logo}>
          Jhiri <span>Resort</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#book" className={styles.bookLink}>Book Now</a>
          </li>
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
