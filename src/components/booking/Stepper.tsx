import styles from "./Stepper.module.scss";
import clsx from "clsx";

const STEPS = [
  { n: 1, label: "Dates & Room" },
  { n: 2, label: "Your Details" },
  { n: 3, label: "Confirm & Pay" },
];

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className={styles.stepper} aria-label="Booking progress">
      {STEPS.map((step, i) => {
        const done = currentStep > step.n;
        const active = currentStep === step.n;
        return (
          <div key={step.n} className={styles.stepGroup}>
            <div className={styles.step}>
              <div
                className={clsx(styles.num, {
                  [styles.active]: active,
                  [styles.done]: done,
                })}
                aria-current={active ? "step" : undefined}
              >
                {done ? "✓" : step.n}
              </div>
              <span
                className={clsx(styles.label, {
                  [styles.activeLabel]: active,
                  [styles.doneLabel]: done,
                })}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={clsx(styles.line, { [styles.doneLine]: done })} />
            )}
          </div>
        );
      })}
    </div>
  );
}
