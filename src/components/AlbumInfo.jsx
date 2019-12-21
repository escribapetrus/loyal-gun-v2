import React from 'react'
import {Row, Col, Button} from "reactstrap";

function AlbumInfo({
        title, 
        link, 
        year, 
        description, 
        label, 
        tracklist, 
        image, 
        band, 
        guests
    }) {
    return (
        <>
        <Col md={3} className="thumbnail">
            <img alt={title} className="img-fluid" src={image}/>
        </Col>
        <Col md={9}>
            <div className="info-header">
                <h2>{title}</h2>
                <a href={link}>
                    <Button size="sm" outline>ouça</Button>
                </a>
            </div>
            
            <h4>{year} {label}</h4>
            <p>{description}</p>
            <Row>
                <Col>
                    <h4>Tracklist</h4>
                    <ol>
                        {tracklist.map(t =>
                            <li>{t}</li>
                        )}
                    </ol>
                </Col>
                <Col>
                    <h4>Banda</h4>
                    <ul>
                        {band.map(b =>
                            <li>{b}</li>
                        )}
                    </ul>
                    {guests && 
                    <>
                        <h4>Convidados</h4>
                        <ul>
                            {guests.map(g =>
                                <li>{g}</li>
                            )}
                        </ul>
                    </>}    
                </Col>                             
            </Row>
        </Col>
        </>
    )
}

export default AlbumInfo
