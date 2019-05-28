import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Row from "../../src/components/Row";
import Cell from "../../src/components/Cell";

import code from "./code-example";
import "../index.css";

storiesOf("Row", module).add("Custom column width", () => (
  <Layout title="Custom column width" code={code}>
    <Row gaps="1em">
      <Cell width="50%">
        <Content>50%</Content>
      </Cell>
      <Cell>
        <Content>auto</Content>
      </Cell>
      <Cell width={1 / 2}>
        <Content>1/2</Content>
      </Cell>
      <Cell width={1 / 4}>
        <Content>1/4</Content>
      </Cell>
      <Cell width={1 / 4}>
        <Content>1/4</Content>
      </Cell>
      <Cell width="300px">
        <Content>300px</Content>
      </Cell>
      <Cell>
        <Content>auto</Content>
      </Cell>
    </Row>
  </Layout>
));
