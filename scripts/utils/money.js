//THIS FILE CONTAIN UTILITIES THAT ARE RELATED TO MONEY
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}