export default `<Grid gaps="1em">
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
</Grid>`;
