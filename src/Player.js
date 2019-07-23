import React from "react"
import { Col } from "react-bootstrap"

class Player extends React.Component {
  render() {
    return (
      <Col className="video">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.id}?&autoplay=1`} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Col>
    )
  }
  
}

export default Player;