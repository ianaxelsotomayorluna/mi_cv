/**
 * Formatea un número como una cadena de texto en formato de moneda.
 *
 * @param {number} amount - El número que se desea formatear como moneda.
 * @returns {string} La cadena de texto formateada en formato de moneda, por ejemplo, $100,000.00.
 *
 * @example
 * const price = 100000;
 * console.log(formatCurrency(price)); // Imprime: $100,000.00
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
