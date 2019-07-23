import React from "react"
import { Row, Col, Alert } from 'react-bootstrap'

class ListaResultados extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
    let videosImpressos = []
    videosImpressos = videosEncontrados.map(
      (value) => {
        return (
          <Row className="item" onClick={this.props.acao.bind(this, value.id.videoId)}>
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
    return (
      <div>
        <h4 className="resultados">Resultados</h4>
        {videosImpressos}
      </div>
    )
  }
}




export default ListaResultados;