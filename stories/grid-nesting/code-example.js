export default
  `<Row gaps="1em">
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
</Row>`;