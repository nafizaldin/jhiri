"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        y: 35,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.2,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Background */}
      <div ref={parallaxRef} className={styles.parallax}>
        {/* <Image
          src="https://picsum.photos/seed/jhiri-hero/1920/1080"
          alt="Jhiri Resort — Tea Gardens of Sreemangal at dusk"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        /> */}
      </div>


      <div className={styles.overlay} />


      {/* Mist layers */}
      <div className={styles.mist} />
      <div className={`${styles.mist} ${styles.mist2}`} />
      <div className={`${styles.mist} ${styles.mist3}`} />

      {/* Water ripple */}
      <div className={styles.rippleWrap} aria-hidden>
        <div className={styles.ripple} />
        <div className={styles.ripple} />
        <div className={styles.ripple} />
      </div>

      {/* Content */}
      <div ref={contentRef} className={styles.content}>
        <p className={styles.eyebrow} data-hero>
          Sreemangal, Bangladesh &nbsp;·&nbsp; A Nature Retreat
        </p>
        <h1 className={styles.title} data-hero>
          Jhiri<em>Resort</em>
        </h1>
        <p className={styles.sub} data-hero>
          Where Stillness Flows
        </p>
        <div className={`flex gap-4 justify-center`} data-hero>
          <Button as="a" href="#book" variant="solid">Reserve Your Stay</Button>
          <Button as="a" href="#about" variant="ghost">Discover More</Button>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        className={styles.scrollHint}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about section"
      >
        <div className={styles.scrollBar} />
        <span>Scroll</span>
      </button>
    </section>
  );
}
