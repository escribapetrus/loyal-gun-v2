import React from 'react'
import Video from "../components/Video"
import videoLinks from "../resources/videoLinks"
import { Container, Row } from 'reactstrap'

class Videos extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             videos: videoLinks
        }
    }
    
    render(){
        return (
            <div>
            <h1>Videos</h1>            
            <Container>
                <Row>
                    {this.state.videos.map(video =>
                        <Video key={video.id} link={video.link} title={video.title}/>
                    )}
                </Row>
            </Container>   
            </div>
        )
    }
}

export default Videos
