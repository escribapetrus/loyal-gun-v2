import React from 'react'
import {Button} from "reactstrap"
import Cover from "../images/loyal-gun-faux-nostalgia.jpg"

import "./Home.scss"

function Home() {
    return (
        <div className="Home">
            <Button className="Button" outline color="primary">Clique e baixe o disco</Button>{' '}
            <img className="cover" alt="capa do disco faux nostalgia" src={Cover}/>
            <p>Ouça agora nosso álbum Faux Nostalgia, disponível nas plataformas Spotify, Soundcloud, Deezer e Bandcamp</p>
        </div>
    )
}

export default Home
