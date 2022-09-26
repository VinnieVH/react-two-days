import { useEffect, useState } from "react";
import { Breakpoints } from "../models/breakpoints-enum";
import { BREAKPOINT_EXTRASMALL, BREAKPOINT_LARGE, BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from "../utils/constants";

const useMediaQuerySize = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, []);

  return { breakpoint: calculateBreakpoint(innerWidth), breakpointGreaterOrEqualThan };
};
export default useMediaQuerySize;

const calculateBreakpoint = (innerWidth: number) => {
  if (innerWidth >= BREAKPOINT_LARGE) return Breakpoints.l;
  if (innerWidth >= BREAKPOINT_MEDIUM) return Breakpoints.m;
  if (innerWidth >= BREAKPOINT_SMALL) return Breakpoints.s;
  return Breakpoints.xs;
};

export const calculateSizeFromBreakpoint = (breakpoint: Breakpoints) => {
  if (breakpoint === Breakpoints.l) return BREAKPOINT_LARGE;
  if (breakpoint === Breakpoints.m) return BREAKPOINT_MEDIUM;
  if (breakpoint === Breakpoints.s) return BREAKPOINT_SMALL;
  return BREAKPOINT_EXTRASMALL;
};

const breakpointGreaterOrEqualThan = (currentBreakpoint: Breakpoints, compareToBreakpoint: Breakpoints) => {
  const curentBreakpointSize = calculateSizeFromBreakpoint(currentBreakpoint);
  const compareToBreakpointSize = calculateSizeFromBreakpoint(compareToBreakpoint);

  return curentBreakpointSize >= compareToBreakpointSize;
};
