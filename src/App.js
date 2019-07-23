import React from 'react';
import './App.css';
import { InputGroup, FormControl, Button, Row, Col, Container, Form } from 'react-bootstrap'
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

  async buscaVideos(event) {
    event.preventDefault();
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

  selecionaVideo(id) {
    this.setState({idVideoAtual: id})

  }

  imprimeResultados() {
    let videosEncontrados = this.state.resultados
    let videosImpressos = []
    videosImpressos = videosEncontrados.map(
      (value) => {
        return (

          <Row className="item" onClick={this.selecionaVideo.bind(this, value.id.videoId)}>
          <Col className="thumbnail" md="auto">
            <img className="thumbnail" src={value.snippet.thumbnails.default.url} />
          </Col>
          <Col className="info text-left">
            <h6 dangerouslySetInnerHTML={{__html: value.snippet.title}}></h6>
            <div dangerouslySetInnerHTML={{__html: value.snippet.description}}></div>
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
              <Form onSubmit={this.buscaVideos}>
                <InputGroup className="search">
                  <FormControl
                    placeholder="Pesquisar"
                    value={this.state.termosBusca}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit">Button</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
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
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.idVideoAtual}?&autoplay=1`} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
          </Row>
      </Container>
    );
  }
}


export default App;
