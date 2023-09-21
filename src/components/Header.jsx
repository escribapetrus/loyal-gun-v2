import React, { useState } from 'react';
// import {Link} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import "./Header.scss"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const sections = [
    {id:1, name:"discografia"}, 
    {id:2, name:"videos"}, 
    {id:3, name: "banda"}, 
    {id:5, name:"contato"}
  ]

  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <Container>
        <NavbarBrand href="/"><span style={{color: "#ddd"}}>loyal gun</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {sections.map(section => 
              <NavItem key={section.id}>
                  <NavLink href={`${section.name}`}>
		      <span style={{color: "#ddd"}}>{section.name}</span>
		  </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
        </Container>
        
      </Navbar>
    </div>
  );
}

export default Header;
