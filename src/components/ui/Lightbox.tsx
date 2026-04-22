"use client";

import { useEffect } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";
import { useScrollLock } from "@/hooks/useScrollLock";
import styles from "./Lightbox.module.scss";

interface LightboxProps {
  index: number | null;
  onClose: () => void;
  onNav: (direction: -1 | 1) => void;
}

export default function Lightbox({ index, onClose, onNav }: LightboxProps) {
  const open = index !== null;
  const item = open ? GALLERY_ITEMS[index] : null;

  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose, onNav]);

  if (!open || !item) return null;

  return (
    <div
      className={styles.lightbox}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

      <div className={styles.imgWrap}>
        <Image
          src={item.image}
          alt={item.caption}
          fill
          sizes="85vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <p className={styles.caption}>{item.caption}</p>

      <div className={styles.nav}>
        <button className={styles.navBtn} onClick={() => onNav(-1)}>← Previous</button>
        <button className={styles.navBtn} onClick={() => onNav(1)}>Next →</button>
      </div>
    </div>
  );
}
