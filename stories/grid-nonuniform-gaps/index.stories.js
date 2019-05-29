import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Grid from "../../src/components/Grid";
import Col from "../../src/components/Col";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Nonuniform gaps", () => (
  <Layout title="Nonuniform gaps" code={code}>
    <Grid gaps="2em 1em">
      <Col width={1 / 4}>
        <Content />
      </Col>
      <Col width={1 / 4}>
        <Content />
      </Col>
      <Col width={1 / 4}>
        <Content />
      </Col>
      <Col width={1 / 4}>
        <Content />
      </Col>

      <Col width={1 / 3}>
        <Content />
      </Col>
      <Col width={1 / 3}>
        <Content />
      </Col>
      <Col width={1 / 3}>
        <Content />
      </Col>

      <Col width={1 / 2}>
        <Content />
      </Col>
      <Col width={1 / 2}>
        <Content />
      </Col>

      <Col width={1}>
        <Content />
      </Col>
    </Grid>
  </Layout>
));
