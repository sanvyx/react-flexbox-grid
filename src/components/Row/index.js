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

const Row = styled.div`
  & > * {
    box-sizing: border-box;
  }

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  ${gaps};
`;

export default Row;
