import React from 'react';
import {Container} from "reactstrap";
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
                <h1>Discografia</h1>
                <Container>
                    {this.state.discography.map(({id, ...albumProps}) =>
                        <AlbumInfo id={id} {...albumProps}/>
                    )}               
                </Container>                      
            </div>
        )
    }    
}

export default Discografia
