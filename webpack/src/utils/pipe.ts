export function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return fns.reduce((prevFn, nextFn) => (value) => nextFn(prevFn(value)));
}
