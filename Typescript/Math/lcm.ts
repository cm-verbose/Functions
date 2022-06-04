const lcd = (x: number, y: number): number => {
  let gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  return Math.abs(x * y) / gcd(x, y);
}
