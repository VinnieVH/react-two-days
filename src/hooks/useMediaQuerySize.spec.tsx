import { Breakpoints } from "../models/breakpoints-enum";
import { BREAKPOINT_LARGE } from "../utils/constants";
import { calculateSizeFromBreakpoint } from "./useMediaQuerySize";

test("calculateSizeFromBreakpoint gives correct size", () => {
  expect(calculateSizeFromBreakpoint(Breakpoints.l)).toBe(BREAKPOINT_LARGE);
});
