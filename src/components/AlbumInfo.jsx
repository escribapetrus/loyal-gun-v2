import React from 'react'
import {Row, Col} from "reactstrap";

function AlbumInfo({id, title, year, description, label, tracklist, image, band, guests}) {
    return (
        <div classname="Album-Info">
            <Row key={id}>
                <Col md={3}>
                    <img alt={title} className="img-fluid" src={image}/>
                </Col>
                <Col md={9}>
                    <h3>{title}</h3>
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
            </Row>
        </div>
    )
}

export default AlbumInfo
