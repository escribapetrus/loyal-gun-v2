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
//        const {id, ...bandProps} = this.state.band
        return (
            <div className="Banda">
                <h1>banda</h1>
                <img src={photoBand} alt="loyal gun"/>
                <p>Loyal Gun é uma banda de rock alternativo de São Paulo/SP, criada por Dija Dijones (guitarra/voz) em 2012. A banda atualmente conta também com Marcelo Muller (guitarra/voz), Raffa Ap. (baixo) e Bruno Duarte (bateria). O grupo tem influências de Superchunk, Sunny Day Real Estate, Dinosaur Jr., Superdrag, Hum e Swervedriver, além de bandas brasileiras que cantam em inglês como Pin Ups, Killing Chainsaw, Second Come, Valv, Shed e Mickey Junkies. A banda vem realizando diversos shows pela Grande São Paulo e até o momento lançou três singles: Bring Back Your Beat (2015), The Golden Ocean (2015) e Come Back (2017), todos via Howling Records. Em 2019, lança seu primeiro álbum, Faux Nostalgia, resultado de um trabalho de 2 anos em estúdios que propõe, através de letra e música, uma reflexão sobre como vemos agora o que éramos em um tempo não muito distante.</p>   
                <Row>
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
                    </ul>
                    <h2>filmografia</h2>
                    <ul>
                        <li>
                            Bring Back Your Beat - clipe (2015)
                            <a href="http://abre.ai/bringbackyourbeat">assista</a>
                        </li>
                        <li>
                            The Golden Ocean - clipe (2015)
                            <a href="http://abre.ai/thegoldenocean">assista</a>
                        </li>
                        <li>
                            Guitar Days: An Unlikely Story of Brazilian Music - Participação (2018)
                            <a href="http://guitardays.com.br/as-bandas">assista</a>
                        </li>
                        <li>
                            Come Back - clipe (2019)
                            <a href="http://abre.ai/comeback">assista</a>
                        </li>
                    </ul>
                    <h2>premiações</h2>
                    <ul>
                        <li>Prêmio Dynamite de Música Independente 2016 - Categoria Revelação(indicado)</li>
                    </ul>
                </section>
           </div>
        )
    }    
}

export default Banda
