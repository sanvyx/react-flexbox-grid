import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  padding: 0.5em;
  border-radius: 1px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.contentBgNormal};

  ${({ darker, theme }) =>
    darker && `background-color: ${theme.contentBgDarker}`};
  ${({ darkest, theme }) =>
    darkest && `background-color: ${theme.contentBgDarkest}`};
`;
