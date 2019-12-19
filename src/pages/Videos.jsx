import React from 'react'
import Video from "../components/Video"
import videoLinks from "../resources/videoLinks"
import {Row} from 'reactstrap'

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
            <h1>vídeos</h1>            
                <Row>
                    {this.state.videos.map(video =>
                        <Video key={video.id} link={video.link} title={video.title}/>
                    )}
                </Row>
            </div>
        )
    }
}

export default Videos
