import React from 'react';
import {Col} from "reactstrap"

function BandMember({id, name, avatar,role}) {
    return (
            <Col key={id} xs={6} lg={3}>
                <div className="avatar">
                    <img className="img-fluid" alt={name} src={avatar}/>
                </div>
                <div className="text">
                    <span>{name}</span>
                    <span>{role}</span>
                </div>
            </Col>
    )
}

export default BandMember
