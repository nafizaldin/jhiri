import styles from "./SummaryBox.module.scss";

interface SummaryBoxProps {
  children: React.ReactNode;
  title?: string;
}

export function SummaryBox({ children, title }: SummaryBoxProps) {
  return (
    <div className={styles.summaryBox}>
      {title && <p className={styles.summaryTitle}>{title}</p>}
      {children}
    </div>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
  green?: boolean;
  total?: boolean;
}

export function SummaryRow({ label, value, green, total }: SummaryRowProps) {
  return (
    <div className={`${styles.summaryRow} ${total ? styles.totalRow : ""}`}>
      <span>{label}</span>
      <span className={green ? styles.greenVal : total ? styles.totalVal : ""}>{value}</span>
    </div>
  );
}
