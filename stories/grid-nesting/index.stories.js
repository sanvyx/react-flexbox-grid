import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Row from "../../src/components/Row";
import Cell from "../../src/components/Cell";

import code from "./code-example";
import "../index.css";

storiesOf("Row", module).add("Nesting", () => (
  <Layout title="Nesting" code={code}>
    <Row gaps="1em">
      <Cell width={2 / 3}>
        <Content>
          <Row gaps=".5em">
            <Cell>
              <Content darker>1/3</Content>
            </Cell>
            <Cell width={2 / 3}>
              <Content darker>
                <Row gaps=".5em">
                  <Cell>
                    <Content darkest>auto</Content>
                  </Cell>
                  <Cell>
                    <Content darkest>auto</Content>
                  </Cell>
                </Row>
              </Content>
            </Cell>
          </Row>
        </Content>
      </Cell>
      <Cell width={1 / 3}>
        <Content>1/3</Content>
      </Cell>
    </Row>
  </Layout>
));
