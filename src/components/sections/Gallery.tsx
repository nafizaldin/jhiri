"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";
import Lightbox from "@/components/ui/Lightbox";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNav = useCallback((dir: -1 | 1) => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + dir + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
    );
  }, []);

  return (
    <>
      <div className={styles.grid} id="gallery">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={item.id}
            className={`${styles.cell} ${i === 0 ? styles.wide : ""}`}
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${item.caption}`}
          >
            <Image
              src={item.image}
              alt={item.caption}
              fill
              sizes={i === 0 ? "60vw" : "25vw"}
              style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
            />
            <span className={styles.label}>{item.caption}</span>
            <span className={styles.zoom} aria-hidden>⤢ Expand</span>
          </button>
        ))}
      </div>

      {/* Quote divider */}
      <div className={styles.quote}>
        <span className={styles.qMark}>"</span>
        <p className={styles.qText}>
          Sreemangal is where the earth breathes slowly.<br />
          Jhiri invites you to breathe with it.
        </p>
        <p className={styles.qAttr}>— Jhiri Resort, Sreemangal, Bangladesh</p>
      </div>

      <Lightbox
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNav={handleNav}
      />
    </>
  );
}
