import React from 'react';
import contactLinks from "../resources/contactLinks";
import imageHeader from "../images/loyal-gun-horizonte.jpg";

import ContactLink from "../components/ContactLink"

import "./Contato.scss"

class Contato extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contactLinks: contactLinks         
        }
    }
    
    render() {
        return (
            <div className="Contato">
                <h1>contato</h1>
                <img className="img-fluid" src={imageHeader} alt="loyal gun"/>
                <div className="link-group">
                    <div className="links">
                        <h2>links</h2>
                        {this.state.contactLinks.map(link =>
                            !link.contato && <ContactLink key={link.id} name={link.name} link={link.link}/>    
                        )}
                    </div>
                    <div className="links">
                        <h2>contato</h2>
                        {this.state.contactLinks.map(link =>
                            link.contato && <ContactLink key={link.id} name={link.name} link={link.link}/>    
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato
