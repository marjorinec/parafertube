import React from "react"
import { Col } from "react-bootstrap"
import './Player.css'

class Player extends React.Component {
  render() {
    return (
      <Col className="video">
        <div className="video-container">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.id}?autoplay=1`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="youtube-player"></iframe>
        </div>
      </Col>
    )
  }
  
}

export default Player;