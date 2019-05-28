import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Row from "../../src/components/Row";
import Cell from "../../src/components/Cell";

import code from "./code-example";
import "../index.css";

storiesOf("Row", module).add("Basic grid", () => (
  <Layout title="Basic grid" code={code}>
    <Row>
      <Cell>
        <Content />
      </Cell>
      <Cell>
        <Content darker />
      </Cell>
      <Cell>
        <Content darkest />
      </Cell>
    </Row>
    <Row>
      <Cell>
        <Content darkest />
      </Cell>
      <Cell>
        <Content darker />
      </Cell>
    </Row>
  </Layout>
));
