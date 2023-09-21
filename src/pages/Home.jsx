import React from 'react'
import {Button} from "reactstrap"
import fauxnostalgia from "../images/loyal-gun-faux-nostalgia-border.png"
import leitmotif from "../images/loyal-gun-leitmotif-border.png"

import "./Home.scss"

function Home() {
    const handleClick = () => {
        window.open("https://drive.google.com/drive/folders/1qsaijVhv2YhKjdwAG0ieznVvu7mWVyH0?usp=sharing");
    }
    return (
        <div className="Home">
	    <div className="HomeDisplays">
		<div className="HomeDisplay">
		    <h2>leitmotif(2023)</h2>
		    <img onClick={handleClick} className="cover" alt="capa do disco leitmotif" src={leitmotif}/>
		    <Button onClick={handleClick} className="Button">DOWNLOAD</Button>

		</div>
		<div className="HomeDisplay">
		    <h2>faux nostalgia (2023)</h2>
		    <img onClick={handleClick} className="cover" alt="capa do disco faux nostalgia" src={fauxnostalgia}/>
		    <Button onClick={handleClick} className="Button">DOWNLOAD</Button>
		</div>

           </div>
        </div>
    )
}

export default Home
