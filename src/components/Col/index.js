import styled from "styled-components";

const makeWidthRule = width =>
  `width: ${+width ? 100 * width + "%" : width}; flex: none;`;

const width = ({ width }) => {
  if (!width) return "";
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
          return `@media (max-width: ${th}) {
      ${makeWidthRule(value)}
    }`;
        })
        .join("\n")
    : makeWidthRule(width);
};

const Col = styled.div`
  flex: 1 1 0%;
  ${width};
`;

export default Col;
