import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import { Grid, Col } from "../../src/";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Nesting", () => (
  <Layout title="Nesting" code={code}>
    <Grid gaps="1em">
      <Col xs={8}>
        <Content>
          <Grid gaps=".5em">
            <Col>
              <Content darker>1/3</Content>
            </Col>
            <Col xs={8}>
              <Content darker>
                <Grid gaps=".5em">
                  <Col>
                    <Content darkest>auto</Content>
                  </Col>
                  <Col>
                    <Content darkest>auto</Content>
                  </Col>
                </Grid>
              </Content>
            </Col>
          </Grid>
        </Content>
      </Col>
      <Col xs={4}>
        <Content>1/3</Content>
      </Col>
    </Grid>
  </Layout>
));
