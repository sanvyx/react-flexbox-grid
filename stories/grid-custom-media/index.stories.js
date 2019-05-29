import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import Grid from "../../src/components/Grid";
import Col from "../../src/components/Col";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Responsive - custom media", () => (
  <Layout title="Responsive - custom media" code={code}>
    <Grid gaps="1em">
      <Col width={{ all: 1 / 2, "480px": 1, "540px": 3 / 4  }}>
        <Content>Full/Halves</Content>
      </Col>
      <Col width={{ all: 1 / 2, "480px": 1, "540px": 1 / 4 }}>
        <Content>Full/Halves</Content>
      </Col>
      <Col width={{ all: 1 / 3, "480px": 1 }}>
        <Content>Full/Thirds</Content>
      </Col>
      <Col width={{ all: 1 / 3, "480px": 1 }}>
        <Content>Full/Thirds</Content>
      </Col>
      <Col width={{ all: 1 / 3, "480px": 1 }}>
        <Content>Full/Thirds</Content>
      </Col>
    </Grid>
  </Layout>
));
