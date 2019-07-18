import React from 'react';
import './App.css';
import { InputGroup, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import axios from "axios";

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      termosBusca: "",
      resultados: [],
      idVideoAtual: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.buscaVideos = this.buscaVideos.bind(this);
  }

  handleChange(event) {
    this.setState({termosBusca: event.target.value})
  }

  async buscaVideos() {
    let termosBusca = this.state.termosBusca
    let url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termosBusca}&maxresults=20&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE`
    let dados = await axios.get(url)
    this.setState({resultados: dados.data.items})
  }

  render() {
    return (
      <Container className="App">
          <Row>
            <Col>
              <InputGroup className="search">
                <FormControl
                  placeholder="Pesquisar"
                  value={this.state.termosBusca}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={this.buscaVideos}>Button</Button>
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
