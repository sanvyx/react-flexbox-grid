export default
  `<Grid gaps="1em">
  <Col width={2 / 3}>
    <Content>
      <Grid gaps=".5em">
        <Col>
          <Content darker>1/3</Content>
        </Col>
        <Col width={2 / 3}>
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
  <Col width={1 / 3}>
    <Content>1/3</Content>
  </Col>
</Grid>`;