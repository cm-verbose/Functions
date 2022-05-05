const sgn = (x: number): number | null => {
  return (x < 0) ? -1 : (x === 0) ? 0 : (x > 0) ? 1 : null;
}
