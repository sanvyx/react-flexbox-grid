import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Title from "../Title";
import Code from "../Code";
import Row from "../../../src/components/Row";
import Cell from "../../../src/components/Cell";
import theme from "../theme";

const Container = styled.div`
  margin: 20px;
  width: 800px;
  padding: 16px;
  background-color: ${({ theme }) => theme.layoutBg};
`;

const Layout = ({ title, code, children }) => {
  return (
    <ThemeProvider theme={theme} active>
      <Container>
        <Row gaps="16px">
          <Cell>
            <Title>{title}</Title>
            {children}
          </Cell>
          <Cell>
            <Title>Code</Title>
            <Code>{code}</Code>
          </Cell>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
