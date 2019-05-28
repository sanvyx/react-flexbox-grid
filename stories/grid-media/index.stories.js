import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Row from "../../src/components/Row";
import Cell from "../../src/components/Cell";

import code from "./code-example";
import "../index.css";

storiesOf("Row", module).add("Responsive", () => (
  <Layout title="Responsive" code={code}>
    <Row gaps="1em">
      <Cell width={{ all: 1 / 2, "480px": 1, "540px": 3 / 4  }}>
        <Content>Full/Halves</Content>
      </Cell>
      <Cell width={{ all: 1 / 2, "480px": 1, "540px": 1 / 4 }}>
        <Content>Full/Halves</Content>
      </Cell>
      <Cell width={{ all: 1 / 3, "480px": 1 }}>
        <Content>Full/Thirds</Content>
      </Cell>
      <Cell width={{ all: 1 / 3, "480px": 1 }}>
        <Content>Full/Thirds</Content>
      </Cell>
      <Cell width={{ all: 1 / 3, "480px": 1 }}>
        <Content>Full/Thirds</Content>
      </Cell>
    </Row>
  </Layout>
));
