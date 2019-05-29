import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Title from "../Title";
import Code from "../Code";
import Grid from "../../../src/components/Grid";
import Col from "../../../src/components/Col";
import theme from "../theme";
import Content from "../Content";

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
        <Grid>
          <Col xs={6}>
            <Title>{title}</Title>
            <Grid>
              <Col>{children}</Col>
            </Grid>
          </Col>
          <Col xs={6}>
            <Title>Code</Title>
            <Code>{code}</Code>
          </Col>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
