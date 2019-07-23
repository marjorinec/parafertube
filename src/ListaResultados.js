import React from "react"
import { Row, Col, Alert, Spinner } from 'react-bootstrap'
import "./ListaResultados.css"

class ListaResultados extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  limitaTexto(texto, tamanho=30) {
    if (texto.length > tamanho-3) {
      texto = texto.substr(0, tamanho-3)
      texto += '...'
    }
    return texto
  }

  render() {
    let videosEncontrados = this.props.resultados
    
    if (videosEncontrados === null) {
      return (
        <Alert variant="info">
          Realize uma busca para ver aqui os resultados.
        </Alert>
      )
    }

    if (!this.props.pronto) {
      return (
        <Spinner animation="border" variant="dark"/>
      )
    }

    if (videosEncontrados.length === 0) {
      return (
        <Alert variant="warning">
          Nenhum resultado encontrado.
        </Alert>
      )
    }

    let videosImpressos = []
    videosImpressos = videosEncontrados.map(
      (value) => {
        const titulo = this.limitaTexto(value.snippet.title)
        const descricao = this.limitaTexto(value.snippet.description, 50)
        return (
          <Row className="item" onClick={this.props.acao.bind(this, value.id.videoId)} key={value.id.videoId}>
            <Col className="thumbnail" md="auto">
              <img className="thumbnail" src={value.snippet.thumbnails.default.url} alt={titulo}/>
            </Col>
            <Col className="info text-left">
              <h5 dangerouslySetInnerHTML={{__html: titulo}}></h5>
              <div dangerouslySetInnerHTML={{__html: descricao}}></div>
            </Col>
          </Row>
        )
      }
    )
    return (
      <div>
        <h4 className="resultados">Resultados</h4>
        {videosImpressos}
      </div>
    )
  }
}




export default ListaResultados;