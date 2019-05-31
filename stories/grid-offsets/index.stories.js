import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Grid from "../../src/components/Grid";
import Col from "../../src/components/Col";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Offsets", () => (
  <Layout title="Offsets" code={code}>
    <Grid gaps="1em">
      <Col xs={4} offset={8}>
        <Content />
      </Col>
      <Col xs={4} offset={4}>
        <Content />
      </Col>
      <Col xs={4}>
        <Content />
      </Col>
      <Col xs={4}>
        <Content />
      </Col>
      <Col xs={4}>
        <Content />
      </Col>
      <Col xs={4}>
        <Content />
      </Col>
    </Grid>
  </Layout>
));
