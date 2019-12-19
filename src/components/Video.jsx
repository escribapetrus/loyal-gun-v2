import React from 'react'
import {Col} from "reactstrap"

function Video({link, title}) {
    return (
        <Col md={6} className="embed-responsive embed-responsive-4by3">
          <iframe
          title={title} 
          className="embed-responsive-item" 
          allowFullScreen
          src={link}/> 
        </Col>
    )
}

export default Video
