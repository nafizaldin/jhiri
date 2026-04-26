"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useGSAP";
import styles from "./About.module.scss";

const STATS = [
  { count: 3,  suffix: "",  label: "Room Categories" },
  { count: 6,  suffix: "",  label: "World-class Amenities" },
  { count: null, display: "24/7", label: "Guest Security" },
  { count: 98, suffix: "%", label: "Guest Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = () => {
          cur = Math.min(cur + Math.ceil(value / 60), value);
          setN(cur);
          if (cur < value) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref}>{n}{suffix}</div>;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} id="about" className={styles.section}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto ${styles.wrap}`}>

        {/* Image column */}
        <div className={styles.imgCol} data-reveal>
          <div className={styles.imgFrame}>
            <Image
              src="https://picsum.photos/seed/jhiri-about/500/660"
              alt="Jhiri Resort surrounded by tea gardens at twilight"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
            />
          </div>
          <div className={styles.badge}>
            Nestled in the<br />Tea Capital of<br />Bangladesh
          </div>
        </div>

        {/* Text column */}
        <div className={`text-center ${styles.textCol}`} data-reveal>
          <p className="section-label">Our Story</p>
          <h2 className={`section-heading ${styles.heading}`}>
            A retreat as gentle<br />as a <em>flowing stream</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.para}>
            Named after the soft rivulets that weave through the hills of Sreemangal, Jhiri Resort is a sanctuary where nature&apos;s quiet rhythm becomes your daily companion. Surrounded by emerald tea gardens and ancient forest, we offer a rare escape from the ordinary.
          </p>
          <p className={styles.para}>
            Every corner of Jhiri is thoughtfully crafted to dissolve the boundary between indoors and the lush landscape beyond — where mornings begin with birdsong and evenings close with the scent of rain on earth.
          </p>

          <div className={`grid grid-cols-2 gap-6 ${styles.stats}`}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>
                  {s.count !== null
                    ? <Counter value={s.count} suffix={s.suffix ?? ""} />
                    : s.display}
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
