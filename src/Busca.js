import React from 'react';
import { InputGroup, FormControl, Button, Row, Col, Form } from 'react-bootstrap'

class Busca extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Row>
        <Col>
          <Form onSubmit={this.props.acao}>
            <InputGroup className="search">
              <FormControl
                placeholder="Pesquisar"
                value={this.props.texto}
                onChange={this.props.acaoAlteracao}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">Button</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
    </Row>
    )
  }
}

export default Busca;