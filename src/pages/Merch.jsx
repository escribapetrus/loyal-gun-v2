import React, { Component } from 'react'
import {Row} from 'reactstrap'
import merch from "../resources/merch"
import MerchProduct from '../components/MerchProduct'

export class Merch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             merch: merch
        }
    }
    
    render() {
        return (
            <div className="Merch">
                <h1>Merch</h1>
                <Row>
                    {this.state.merch.map(({id, ...productProps}) =>
                        <MerchProduct key={id} {...productProps}/>
                    )}
                </Row>              
            </div>
        )
    }
}

export default Merch
