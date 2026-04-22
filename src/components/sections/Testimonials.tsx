"use client";

import { useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useGSAP";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} id="reviews" className={styles.section}>
      <div className={styles.inner}>
        <div className={`text-center mb-16 ${styles.header}`} data-reveal>
          <p className="section-label">Guest Stories</p>
          <h2 className="section-heading">
            What Our <em>Guests Say</em>
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${styles.grid}`}>
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className={styles.card} data-reveal>
              <div className={styles.stars}>
                {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <p className={styles.name}>{t.authorName}</p>
                  <p className={styles.date}>{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
