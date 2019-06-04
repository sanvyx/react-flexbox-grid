import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import { Grid, Col } from "../../src/";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Custom column width", () => (
  <Layout title="Custom column width" code={code}>
    <Grid gaps="1em">
      <Col width="50%">
        <Content>50%</Content>
      </Col>
      <Col>
        <Content>auto</Content>
      </Col>
      <Col width={1 / 2}>
        <Content>1/2</Content>
      </Col>
      <Col width={1 / 4}>
        <Content>1/4</Content>
      </Col>
      <Col width={1 / 4}>
        <Content>1/4</Content>
      </Col>
      <Col width="300px">
        <Content>300px</Content>
      </Col>
      <Col>
        <Content>auto</Content>
      </Col>
    </Grid>
  </Layout>
));
