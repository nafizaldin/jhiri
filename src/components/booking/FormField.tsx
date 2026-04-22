import styles from "./FormField.module.scss";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function FormField({ label, children, fullWidth }: FormFieldProps) {
  return (
    <div className={`${styles.field} ${fullWidth ? "md:col-span-2" : ""}`}>
      <label>{label}</label>
      {children}
    </div>
  );
}
