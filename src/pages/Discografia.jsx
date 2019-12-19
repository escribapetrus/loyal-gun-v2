import React from 'react';
import {Row} from "reactstrap";
import AlbumInfo from "../components/AlbumInfo";
import discography from "../resources/discography";

import "./Discografia.scss"

class Discografia extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             discography: discography
        }
    }
    
    render(){
        return (
            <div className="Discografia">
                <h1>discografia</h1>
                {this.state.discography.map(({id, ...albumProps}) =>
                    <Row key={id}>
                        <AlbumInfo id={id} {...albumProps}/>
                    </Row>
                )}               
            </div>
        )
    }    
}

export default Discografia
