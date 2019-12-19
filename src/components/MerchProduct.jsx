import React from 'react'
import {Col} from "reactstrap";

function MerchProduct({name, price, image, size}) {
    return (
        <Col xs={6} md={4}>
            <img className="img-fluid" alt={name} src={image}/>
            <p>{name}</p>
            <p>R${price}</p>
        </Col>
    )
}

export default MerchProduct
