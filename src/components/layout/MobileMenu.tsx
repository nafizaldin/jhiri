"use client";

import { NAV_LINKS } from "@/lib/constants";
import { useScrollLock } from "@/hooks/useScrollLock";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useScrollLock(open);

  return (
    <div className={`${styles.menu} ${open ? styles.open : ""}`} aria-modal={open} role="dialog">
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">✕</button>
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {link.label}
        </a>
      ))}
      <a href="#book" onClick={onClose} className={styles.bookLink}>
        Book Now
      </a>
    </div>
  );
}
