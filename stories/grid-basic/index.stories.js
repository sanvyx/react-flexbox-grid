import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Grid from "../../src/components/Grid";
import Col from "../../src/components/Col";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Basic grid", () => (
  <Layout title="Basic grid" code={code}>
    <Grid>
      <Col>
        <Content />
      </Col>
      <Col>
        <Content darker />
      </Col>
      <Col>
        <Content darkest />
      </Col>
    </Grid>
    <Grid>
      <Col>
        <Content darkest />
      </Col>
      <Col>
        <Content darker />
      </Col>
    </Grid>
  </Layout>
));
