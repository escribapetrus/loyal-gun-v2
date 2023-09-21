import React from 'react'
import {Button} from "reactstrap"
import fauxnostalgia from "../images/loyal-gun-faux-nostalgia-border.png"
import leitmotif from "../images/loyal-gun-leitmotif-border.png"

import "./Home.scss"

function Home() {
    const displays = [
	{
	    id: 1,
	    title: "leitmotif (2023)",
	    altText: "capa do disco leitmotif",
	    image: leitmotif,
	    handleClick: () => {
		window.open("https://youtu.be/Dq1a_p-a7FM");
	    }
	},
	{
	    id: 2,
	    title: "faux nostalgia (2019)",
	    altText: "capa do disco faux nostalgia",
	    image: fauxnostalgia,
	    handleClick: () => {
		window.open("https://drive.google.com/drive/folders/1qsaijVhv2YhKjdwAG0ieznVvu7mWVyH0?usp=sharing");
	    }
	}
    ];
    return (
        <div className="Home">
	    <div className="HomeDisplays">
		{displays.map(({title, altText, image, handleClick}) =>
		    <div className="HomeDisplay">
			<h2>{title}</h2>
			<img onClick={handleClick} className="cover" alt={altText} src={image}/>
			<Button onClick={handleClick} className="Button">DOWNLOAD</Button>
		    </div>
                )} 
            </div>
        </div>
    )
}

export default Home
