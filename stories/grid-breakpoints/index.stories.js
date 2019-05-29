import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Grid from "../../src/components/Grid";
import Col from "../../src/components/Col";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Responsive - breakpoints", () => (
  <Layout title="Responsive - breakpoints" code={code}>
    <Grid gaps="1em">
      <Col xs={12} sm={6}>
        <Content>Half/Full</Content>
      </Col>
      <Col xs={12} sm={6}>
        <Content>Half/Full</Content>
      </Col>
      <Col xs={6} sm={3}>
        <Content>Quarter/Half</Content>
      </Col>
      <Col xs={6} sm={3}>
        <Content>Quarter/Half</Content>
      </Col>
      <Col xs={6} sm={3}>
        <Content>Quarter/Half</Content>
      </Col>
      <Col xs={6} sm={3}>
        <Content>Quarter/Half</Content>
      </Col>
    </Grid>
  </Layout>
));
