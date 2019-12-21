import React from 'react'
import {Button} from "reactstrap"
import Cover from "../images/loyal-gun-faux-nostalgia.jpg"

import "./Home.scss"

function Home() {
    const handleClick = () => {
        window.open("https://drive.google.com/drive/folders/1qsaijVhv2YhKjdwAG0ieznVvu7mWVyH0?usp=sharing");
    }
    return (
        <div className="Home">
            <Button onClick={handleClick} className="Button" outline color="secondary">
                Clique e baixe o disco
            </Button>
            <img onClick={handleClick} className="cover" alt="capa do disco faux nostalgia" src={Cover}/>
            <p>Ouça agora nosso álbum Faux Nostalgia, disponível nas plataformas Spotify, Soundcloud, Deezer e Bandcamp</p>
        </div>
    )
}

export default Home
