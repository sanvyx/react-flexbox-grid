import styled from "styled-components";

const breakpoints = {
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px"
};

const makeWidthRule = width =>
  `width: ${+width ? 100 * width + "%" : width}; flex: none;`;

const standardBreakpoints = (xs, sm, md, lg, xl) => {
  let css = "";
  if (xs) css += makeWidthRule(xs / 12);
  if (sm)
    css += `@media (min-width: ${breakpoints.sm}) {${makeWidthRule(sm / 12)}}`;
  if (md)
    css += `@media (min-width: ${breakpoints.md}) {${makeWidthRule(md / 12)}}`;
  if (lg)
    css += `@media (min-width: ${breakpoints.lg}) {${makeWidthRule(lg / 12)}}`;
  if (xl)
    css += `@media (min-width: ${breakpoints.xl}) {${makeWidthRule(xl / 12)}}`;
  return css;
};

const customBreakpoints = width => {
  const isObject = typeof width === "object";

  return isObject
    ? Object.entries(width)
        .sort(([thA], [thB]) => {
          if (thA === "all") return -1;
          if (thB === "all") return 1;
          return parseInt(thA) < parseInt(thB) ? 1 : -1;
        })
        .map(([th, value]) => {
          if (th === "all") return makeWidthRule(value);
          return `@media (max-width: ${th}) {${makeWidthRule(value)}}`;
        })
        .join("\n")
    : makeWidthRule(width);
};

const width = ({ width, xs, sm, md, lg, xl }) => {
  if (xs || sm || md || lg || xl)
    return standardBreakpoints(xs, sm, md, lg, xl);
  if (width) return customBreakpoints(width);
  return "";
};

const Col = styled.div`
  flex: 1 1 0%;
  ${width};
`;

export default Col;
