import React from 'react'
import Video from "../components/Video"
import videoLinks from "../resources/videoLinks"
import {Row} from 'reactstrap'

import "./Videos.scss"

class Videos extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             videos: videoLinks
        }
    }
    
    render(){
        return (
            <div className="Videos">
                <Row>
                    {this.state.videos.map(video =>
                        <Video key={video.id} link={video.link} title={video.title}/>
                    )}
                </Row>
                <p>Confira também nossa <a href="https://www.youtube.com/playlist?list=PLRzzuKvq8EV4S6w8lPEB-JWzQZMfUFIXk">playlist de shows completos</a></p>
            </div>
        )
    }
}

export default Videos
