import React from 'react';
import './App.css';
import { InputGroup, FormControl, Button, Row, Col, Container } from 'react-bootstrap'

class App extends React.Component{

  render() {
    return (
      <Container className="App">
          <Row>
            <Col>
              <InputGroup className="search">
                <FormControl
                  placeholder="Pesquisar"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
          <Row className="content">
            <Col className="sidebar">
              <Row>
                <Col className="text-left">
                  <h4 className="resultados">Resultados</h4> 
                </Col>
              </Row>
              <Row className="item">
                <Col className="thumbnail" md="auto">
                  <img className="thumbnail" src="https://i.ytimg.com/vi/KP1I78uRiDI/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDs5q_8LKVL2FTMMHV7SolpQhj6Bg" />
                </Col>
                <Col className="info text-left">
                  <h6>Titulo do video</h6>
                  <div>hdjksah djksaghdsdgsahd gsahdgsaghdsa khdjksad</div>
                </Col>
              </Row>
  
              <Row className="item">
                <Col className="thumbnail" md="auto">
                  <img className="thumbnail" src="https://i.ytimg.com/vi/KP1I78uRiDI/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDs5q_8LKVL2FTMMHV7SolpQhj6Bg" />
                </Col>
                <Col className="info text-left">
                  <h6>Titulo do video</h6>
                  <div>hdjksah djksaghdsdgsahd gsahdgsaghdsa khdjksad</div>
                </Col>
              </Row>
              <Row className="item">
                <Col className="thumbnail" md="auto">
                  <img className="thumbnail" src="https://i.ytimg.com/vi/KP1I78uRiDI/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDs5q_8LKVL2FTMMHV7SolpQhj6Bg" />
                </Col>
                <Col className="info text-left">
                  <h6>Titulo do video</h6>
                  <div>hdjksah djksaghdsdgsahd gsahdgsaghdsa khdjksad</div>
                </Col>
              </Row>
            </Col>
            <Col className="video">
              <img src="https://images.drivereasy.com/wp-content/uploads/2017/07/img_596dda8d77553.png"/>
            </Col>
          </Row>
      </Container>
    );
  }
}


export default App;
