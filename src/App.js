import React from 'react';
import './App.css'
import { Row, Col } from 'react-bootstrap'
import axios from "axios"
import Busca from "./Busca.js"
import ListaResultados from "./ListaResultados.js"
import Player from "./Player.js"

class App extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      termosBusca: "",
      resultados: null,
      idVideoAtual: "",
      pronto: false
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
    this.setState({pronto: false})
    let termosBusca = this.state.termosBusca
    let url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termosBusca}&maxresults=20&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE`
    let dados = await axios.get(url)

    let dadosFiltrados = dados.data.items.filter(
      (item) => {
        return item.id.kind === "youtube#video"    
      }
    )
    this.setState({resultados: dadosFiltrados, pronto: true})
  }

  selecionaVideo(id) {
    this.setState({idVideoAtual: id})

  }

  render() {
    return (
      <div className="App">
        <Busca acao={this.buscaVideos.bind(this)} texto={this.state.termosBusca} acaoAlteracao={this.handleChange}/>
          <Row className="content">
            <Col md="4" className="sidebar">
              <Row>
                <Col className="text-left">
                    <ListaResultados pronto={this.state.pronto} resultados={this.state.resultados} acao={this.selecionaVideo}/>
                </Col>
              </Row>

            </Col>
            <Player id={this.state.idVideoAtual}/>
          </Row>
      </div>
    );
  }
}


export default App;
