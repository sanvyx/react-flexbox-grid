import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import { Grid, Col } from "../../src/";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Basic grid", () => (
  <Layout title="Basic grid" code={code}>
    <Grid gaps="1em">
      <Col xs={6}>
        <Content>Lorem, ipsum.</Content>
      </Col>
      <Col xs={6}>
        <Content>Lorem, ipsum dolor.</Content>
      </Col>
      <Col xs={4}>
        <Content>Lorem, ipsum dolor.</Content>
      </Col>
      <Col xs={4}>
        <Content>Lorem ipsum dolor sit amet consectetur.</Content>
      </Col>
      <Col xs={4}>
        <Content>Lorem, ipsum.</Content>
      </Col>
    </Grid>
  </Layout>
));
