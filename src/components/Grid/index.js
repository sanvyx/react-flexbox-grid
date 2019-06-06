import styled from "styled-components";

const gaps = ({ gaps }) => {
  if (!gaps) return "";

  let [y, x] = gaps.split(" ");
  x = x || y;

  const css = `
    margin: -${y} 0 0 -${x};
    & > * {
      padding: ${y} 0 0 ${x};
    }
  `;

  return css;
};

const Grid = styled.div`
  & > * {
    box-sizing: border-box;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  width: 100%;
  ${gaps};
  justify-content: ${({ justifyContent }) => justifyContent || "normal"};
`;

export default Grid;
