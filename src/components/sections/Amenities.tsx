"use client";

import { useRef } from "react";
import Image from "next/image";
import { AMENITIES, AMENITY_PHOTOS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useGSAP";
import styles from "./Amenities.module.scss";

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} id="amenities" className={styles.section}>
      <div className={styles.inner}>
        <div className={`text-center ${styles.header}`} data-reveal>
          <p className="section-label">What We Offer</p>
          <h2 className="section-heading">
            Curated <em>Amenities</em><br />for the Discerning Guest
          </h2>
          <p className={styles.desc}>
            From sumptuous dining to energizing recreation, every facility at Jhiri is designed to complement the resort&apos;s natural surroundings while delivering the comforts of modern luxury.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-px ${styles.grid}`}>
          {AMENITIES.map((a) => (
            <div key={a.name} className={styles.card} data-reveal>
              <span className={styles.icon}>{a.icon}</span>
              <h3 className={styles.name}>{a.name}</h3>
              <p className={styles.text}>{a.description}</p>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-px mt-px ${styles.photos}`}>
          {AMENITY_PHOTOS.map((p) => (
            <div key={p.label} className={styles.photo}>
              <Image
                src={p.image}
                alt={p.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover", transition: "transform 0.5s" }}
              />
              <span className={styles.photoLabel}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
