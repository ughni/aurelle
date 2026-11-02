export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function formatRupiah(value: number): string {
  return "Rp" + new Intl.NumberFormat("id-ID").format(value);
}
