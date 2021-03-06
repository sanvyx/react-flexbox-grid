import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import { Grid, Col } from "../../src/";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Nonuniform gaps", () => (
  <Layout title="Nonuniform gaps" code={code}>
    <Grid gaps="2em 1em">
      <Col xs={3}>
        <Content />
      </Col>
      <Col xs={3}>
        <Content />
      </Col>
      <Col xs={3}>
        <Content />
      </Col>
      <Col xs={3}>
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

      <Col xs={6}>
        <Content />
      </Col>
      <Col xs={6}>
        <Content />
      </Col>

      <Col>
        <Content />
      </Col>
    </Grid>
  </Layout>
));
