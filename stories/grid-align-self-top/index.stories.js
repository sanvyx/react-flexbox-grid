import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import { Grid, Col } from "../../src/";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Alignment self top", () => (
  <Layout title="Alignment self top" code={code}>
    <Grid gaps="1em" alignItems="flex-end">
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
      <Col xs={4} alignSelf="flex-start">
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Content>
      </Col>
    </Grid>
  </Layout>
));
