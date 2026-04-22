import styles from "./Location.module.scss";

const ITEMS = [
  { icon: "📍", text: "Sreemangal, Moulvibazar" },
  { icon: "🚗", text: "~4 hours from Dhaka" },
  { icon: "🚂", text: "Railway Station nearby" },
  { icon: "✈️", text: "Osmani Airport, Sylhet (1.5h)" },
];

export default function Location() {
  return (
    <div id="location" className={styles.strip}>
      <div className={styles.left}>
        <p className={`section-label ${styles.labelAlt}`}>Find Us</p>
        <h3 className={styles.title}>Sreemangal, Bangladesh</h3>
        <div className={styles.items}>
          {ITEMS.map((item) => (
            <div key={item.text} className={styles.item}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mapWrap} aria-label="Map showing Jhiri Resort location">
        {/* Grid background */}
        <div className={styles.mapLines} aria-hidden />

        {/* Road SVG */}
        <svg
          className={styles.roads}
          viewBox="0 0 320 210"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M0 105 Q80 95 160 105 Q240 115 320 105" stroke="rgba(139,184,176,.4)" strokeWidth="2" fill="none" />
          <path d="M160 0 Q150 50 160 105 Q170 160 160 210" stroke="rgba(139,184,176,.3)" strokeWidth="2" fill="none" />
          <path d="M0 60 Q60 55 120 70 Q160 80 180 105" stroke="rgba(139,184,176,.2)" strokeWidth="1.5" fill="none" />
          <path d="M320 150 Q260 140 200 150 Q170 155 160 160" stroke="rgba(139,184,176,.2)" strokeWidth="1.5" fill="none" />
          <circle cx="160" cy="105" r="4" fill="rgba(139,184,176,.5)" />
          <circle cx="60" cy="105" r="2.5" fill="rgba(139,184,176,.3)" />
          <circle cx="260" cy="105" r="2.5" fill="rgba(139,184,176,.3)" />
          <text x="68" y="98" fontSize="7" fill="rgba(255,255,255,.25)" fontFamily="sans-serif">Sylhet</text>
          <text x="240" y="98" fontSize="7" fill="rgba(255,255,255,.25)" fontFamily="sans-serif">Moulvibazar</text>
        </svg>

        <div className={styles.pin}>
          <div className={styles.dot} />
          <span>Jhiri Resort</span>
        </div>
        <p className={styles.mapLabel}>Sreemangal · Bangladesh</p>
      </div>
    </div>
  );
}
