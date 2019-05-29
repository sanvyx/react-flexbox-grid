import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Grid from "../../src/components/Grid";
import Col from "../../src/components/Col";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Alignment items center", () => (
  <Layout title="Alignment items center" code={code}>
    <Grid gaps="1em" alignItems="center">
      <Col xs={4}>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          tempore?
        </Content>
      </Col>
      <Col xs={4}>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          consectetur, veniam quia modi expedita officiis quaerat dolores dicta
          esse earum dolore voluptate? Temporibus, assumenda quo blanditiis vel
          voluptates autem laudantium?
        </Content>
      </Col>
      <Col xs={4}>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Content>
      </Col>
    </Grid>
  </Layout>
));
