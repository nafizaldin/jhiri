export function formatCurrency(amount: number): string {
  return `BDT ${amount.toLocaleString()}`;
}

export function calcNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  if (d2 <= d1) return 0;
  return Math.round((d2.getTime() - d1.getTime()) / 86_400_000);
}

export function calcPricing(
  rate: number,
  nights: number
): { subtotal: number; tax: number; total: number } {
  const subtotal = rate * nights;
  const tax = Math.round(subtotal * 0.1);
  return { subtotal, tax, total: subtotal + tax };
}

export function generateRef(): string {
  return "JHR-" + String(Math.floor(Math.random() * 900_000) + 100_000);
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
