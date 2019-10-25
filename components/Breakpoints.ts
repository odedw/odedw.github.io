type BreakPoints<T = string> = {
  desktop: T;
  tablet: T;
  mobile: T;
};

export const BREAK_POINTS_DIMENSIONS_VALUES_IN_PX: BreakPoints<number> = {
  desktop: 1024,
  tablet: 768,
  mobile: 0
};

// @ts-ignore
const BreakPoints: Breakpoints = Object.entries(
  BREAK_POINTS_DIMENSIONS_VALUES_IN_PX
).reduce((a: any, [key, value]) => {
  a[key] = `(min-width: ${value}px)`;
  return a;
}, {});

export default BreakPoints;
