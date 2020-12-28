export function compose(...fns) {
  if (fns.length === 0) {
    return (arg) => arg;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return fns.reduce((a, b) => (arg) => a(b(arg)));
}

// compose(f1, f2, f3)
