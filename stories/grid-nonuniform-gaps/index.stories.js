import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Row from "../../src/components/Row";
import Cell from "../../src/components/Cell";

import code from "./code-example";
import "../index.css";

storiesOf("Row", module).add("Nonuniform gaps", () => (
  <Layout title="Nonuniform gaps" code={code}>
    <Row gaps="2em 1em">
      <Cell width={1 / 4}>
        <Content />
      </Cell>
      <Cell width={1 / 4}>
        <Content />
      </Cell>
      <Cell width={1 / 4}>
        <Content />
      </Cell>
      <Cell width={1 / 4}>
        <Content />
      </Cell>

      <Cell width={1 / 3}>
        <Content />
      </Cell>
      <Cell width={1 / 3}>
        <Content />
      </Cell>
      <Cell width={1 / 3}>
        <Content />
      </Cell>

      <Cell width={1 / 2}>
        <Content />
      </Cell>
      <Cell width={1 / 2}>
        <Content />
      </Cell>

      <Cell width={1}>
        <Content />
      </Cell>
    </Row>
  </Layout>
));
