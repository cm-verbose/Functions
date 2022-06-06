let cmb = (n = 0, k = 0): number | null => {
  let f = (x = 0): number => x < 0 ? -1 : x == 0 ? 1 : x * f(x - 1);
  return k <= n && k % 1 === 0 && n % 1 === 0 && (n > 0) && (k > 0) ? (f(n) / (f(k) * f(n - k))) : k > n ? 0 : null;
};
