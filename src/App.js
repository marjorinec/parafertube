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
    this.imprimeResultados = this.imprimeResultados.bind(this);
  }

  handleChange(event) {
    this.setState({termosBusca: event.target.value})
  }

  async buscaVideos() {
    let termosBusca = this.state.termosBusca
    let url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termosBusca}&maxresults=20&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE`
    let dados = await axios.get(url)

    let dadosFiltrados = dados.data.items.filter(
      (item) => {
        return item.id.kind === "youtube#video"    
      }
    )
    this.setState({resultados: dadosFiltrados})
  }

  imprimeResultados() {
    let videosEncontrados = this.state.resultados
    let videosImpressos = []
    videosImpressos = videosEncontrados.map(
      (value) => {
        return (

          <Row className="item">
          <Col className="thumbnail" md="auto">
            <img className="thumbnail" src={value.snippet.thumbnails.default.url} href="{value.id.videoId}" />
          </Col>
          <Col className="info text-left">
            <h6>{value.snippet.title}</h6>
            <div>{value.snippet.description}</div>
          </Col>
        </Row>
        )
      }
    )
    return videosImpressos
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
                  {this.imprimeResultados()} 
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
