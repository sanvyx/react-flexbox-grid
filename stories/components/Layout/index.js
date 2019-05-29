import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Title from "../Title";
import Code from "../Code";
import Grid from "../../../src/components/Grid";
import Col from "../../../src/components/Col";
import theme from "../theme";

const Container = styled.div`
  margin: 20px;
  width: 800px;
  padding: 16px;
  background-color: ${({ theme }) => theme.layoutBg};
`;

const Layout = ({ title, code, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid gaps="16px">
          <Col>
            <Title>{title}</Title>
            {children}
          </Col>
          <Col>
            <Title>Code</Title>
            <Code>{code}</Code>
          </Col>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
