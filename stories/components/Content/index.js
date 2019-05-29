import styled from "styled-components";

export default styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.contentBgNormal};
  text-align: center;
  padding: 1em;
  border-radius: 2px;
  ${({ darker, theme }) =>
    darker && `background-color: ${theme.contentBgDarker};`};
  ${({ darkest, theme }) =>
    darkest && `background-color: ${theme.contentBgDarkest};`};
`;
