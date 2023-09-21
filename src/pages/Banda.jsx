import React from 'react'
import {Row} from "reactstrap"
import band from '../resources/bandProfile'

import BandMember from "../components/BandMember"
import photoBand from "../images/loyal-gun-a-banda.jpg"
import "./Banda.scss"

class Banda extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             band: band
        }
    }
    

    render(){
        return (
            <div className="Banda">
                <img src={photoBand} alt="loyal gun"/>
                <p className="bio">Loyal Gun é uma banda de rock alternativo de São Paulo/SP, criada por Dija Dijones (guitarra/voz) em 2012. A banda atualmente conta também com Marcelo Muller (guitarra/voz), Raffa Ap. (baixo) e Bruno Duarte (bateria). O grupo tem influências de Superchunk, Sunny Day Real Estate, Dinosaur Jr., Superdrag, Hum e Swervedriver, além de bandas brasileiras que cantam em inglês como Pin Ups, Killing Chainsaw, Second Come, Valv, Shed e Mickey Junkies. A banda realizou diversos shows pela Grande São Paulo entre 2012 e 2018, lançando três singles: Bring Back Your Beat (2015), The Golden Ocean (2015) e Come Back (2017), todos via Howlin' Records. Em 2019, o grupo lança seu primeiro álbum, Faux Nostalgia, cuja temática foca na transição entre a adolescência e a vida adulta. O debut possui como cor tema o branco, por representar o amanhecer, o vislumbre da claridade do dia. Leitmotif, o sucessor, trata do fim da fase adulta, o momento da chamada "crise da meia idade", por isso sua cor tema é o marsala, representando o entardecer. A trilogia aborda o florescer da compreensão do legado das experiências e traumas de cada transição, por consequência, todos os álbuns que a compõem são sempre lançados na semana do solstício de primavera. Faux Nostalgia foi lançado em 23 de setembro de 2019. Leitmotif é lançado em 21 de setembro de 2023.
		</p>   
                <Row className="gallery">
                    {this.state.band.map(({id, ...bandProps}) =>               
                        <BandMember id={id} {...bandProps}/>
                    )}
                </Row>
                <section className="material">
                    <h2>discografia</h2>
                    <ul>
                        <li>Diários Emocionais, Vol. 1 - coletânea (2014)</li>
                        <li>Bring Back Your Beat - single (2015)</li>
                        <li>The Golden Ocean - single (2015)</li>
                        <li>Diários Emocionais, Vol.4 - coletânea (2015)</li>
                        <li>Come Back - single (2017)</li>
                        <li>Faux Nostalgia - álbum (2019)</li>
			<li>Leitmotif - álbum (2023)</li>
                    </ul>
                    <h2>filmografia</h2>
                    <ul>
                        <li>
                            "Bring Back Your Beat" - clipe (2015)
                            <a href="http://abre.ai/bringbackyourbeat"> assista</a>
                        </li>
                        <li>
                            "The Golden Ocean" - clipe (2015)
                            <a href="http://abre.ai/thegoldenocean"> assista</a>
                        </li>
                        <li>
                            "Guitar Days: An Unlikely Story of Brazilian Music" - Participação (2018)
                            <a href="https://vimeo.com/352755028"> assista</a>
                        </li>
                        <li>
                            "Come Back" - clipe (2019)
                            <a href="http://abre.ai/comeback"> assista</a>
                        </li>
			<li>
			    "Going Nowhere" - clipe (2020)
			    <a href="https://www.youtube.com/watch?v=r-m2uSizplw"> assista</a>
			</li>
                    </ul>
                    <h2>premiações</h2>
                    <ul>
                        <li>Prêmio Dynamite de Música Independente 2016 - Categoria Revelação (indicado)</li>
			<li>Heatwave.com.br - Melhores Discos de 2019: 15º Faux Nostalgia</li>
			<li>Hits Perdidos - 50 Álbuns Que Você Deveria Ter Ouvido em 2019: Faux Nostalgia</li>
			<li>Sounds Like Us - Descobertas 2019</li>
			<li>Prêmio Dynamite de Música Independente 2020 - Categoria Melhor Lançamento Indie Rock (indicado)</li>
			<li>Hits Perdidos - Melhores Clipes Independentes de Setembro 2020: "Going Nowhere"</li>
                    </ul>
                </section>
           </div>
        )
    }    
}

export default Banda
