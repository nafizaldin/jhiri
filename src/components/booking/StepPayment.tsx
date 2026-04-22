import { ROOMS } from "@/lib/constants";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { BookingData, PaymentMethod } from "@/types";
import Button from "@/components/ui/Button";
import FormField from "./FormField";
import { SummaryBox, SummaryRow } from "./SummaryBox";
import styles from "./StepPayment.module.scss";
import clsx from "clsx";

interface StepPaymentProps {
  data: BookingData;
  onChange: (patch: Partial<BookingData>) => void;
  onConfirm: () => void;
  onBack: () => void;
}

const PAYMENT_METHODS: { id: PaymentMethod; label: string }[] = [
  { id: "card", label: "💳 Credit / Debit Card" },
  { id: "bkash", label: "📱 bKash" },
  { id: "nagad", label: "💰 Nagad" },
];

export default function StepPayment({ data, onChange, onConfirm, onBack }: StepPaymentProps) {
  const roomName = ROOMS.find((r) => r.id === data.room)?.name ?? "—";

  return (
    <div>
      <div className={styles.paymentBox}>
        <h3>Payment Method</h3>
        <div className={`flex gap-2 flex-wrap ${styles.methods}`}>
          {PAYMENT_METHODS.map((m) => (
            <button
              key={m.id}
              className={clsx(styles.methodBtn, { [styles.active]: data.paymentMethod === m.id })}
              onClick={() => onChange({ paymentMethod: m.id })}
            >
              {m.label}
            </button>
          ))}
        </div>

        {data.paymentMethod === "card" ? (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${styles.cardFields}`}>
            <FormField label="Cardholder Name" fullWidth>
              <input type="text" placeholder="As on card" />
            </FormField>
            <FormField label="Card Number" fullWidth>
              <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} />
            </FormField>
            <FormField label="Expiry Date">
              <input type="text" placeholder="MM / YY" maxLength={7} />
            </FormField>
            <FormField label="CVV">
              <input type="text" placeholder="123" maxLength={4} />
            </FormField>
          </div>
        ) : (
          <div className={styles.mobileField}>
            <FormField label="Mobile Number">
              <input type="tel" placeholder="+880 1XXX XXXXXX" />
            </FormField>
            <p className={styles.otpNote}>
              You will receive an OTP on your registered number to confirm the payment.
            </p>
          </div>
        )}

        <p className={styles.secure}>🔒 Your payment is secured with 256-bit SSL encryption</p>
      </div>

      <SummaryBox title="Order Summary">
        <SummaryRow label="Guest" value={`${data.firstName} ${data.lastName}`} />
        <SummaryRow label="Room" value={roomName} />
        <SummaryRow label="Check-In" value={formatDate(data.checkIn)} />
        <SummaryRow label="Check-Out" value={formatDate(data.checkOut)} />
        <SummaryRow label="Subtotal" value={formatCurrency(data.subtotal)} />
        <SummaryRow label="Taxes (10%)" value={formatCurrency(data.tax)} />
        <SummaryRow label="Total Amount" value={formatCurrency(data.total)} total />
      </SummaryBox>

      <div className={`flex justify-between mt-8 ${styles.btnRow}`}>
        <Button variant="back" onClick={onBack}>← Back</Button>
        <button className={styles.confirmBtn} onClick={onConfirm}>✓ Confirm &amp; Pay</button>
      </div>
    </div>
  );
}
