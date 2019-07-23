import React from 'react';
import './App.css'
import { Row, Col, Container } from 'react-bootstrap'
import axios from "axios"
import Busca from "./Busca.js"
import ListaResultados from "./ListaResultados.js"

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      termosBusca: "",
      resultados: [],
      idVideoAtual: ""
    }

    this.selecionaVideo = this.selecionaVideo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buscaVideos = this.buscaVideos.bind(this);
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

  render() {
    return (
      <Container className="App">
        <Busca acao={this.buscaVideos.bind(this)} />
          <Row className="content">
            <Col className="sidebar">
              <Row>
                <Col className="text-left">
                  <h4 className="resultados">Resultados</h4>
                    <ListaResultados resultados={this.state.resultados} acao={this.selecionaVideo}/>
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
