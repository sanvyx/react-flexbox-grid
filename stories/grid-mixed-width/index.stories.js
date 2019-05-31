import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Grid from "../../src/components/Grid";
import Col from "../../src/components/Col";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Mixed width", () => (
  <Layout title="Mixed width" code={code}>
    <Grid gaps="1em">
      <Col width="50%">
        <Content>50%</Content>
      </Col>
      <Col xs={12}>
        <Content>12 Cols</Content>
      </Col>
      <Col width={1 / 2}>
        <Content>1/2</Content>
      </Col>
      <Col xs={7}>
        <Content>7 Cols</Content>
      </Col>
      <Col width={5 / 12}>
        <Content>5 / 12</Content>
      </Col>
    </Grid>
  </Layout>
));
