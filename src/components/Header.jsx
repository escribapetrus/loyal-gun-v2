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
} from 'reactstrap';

import "./Header.scss"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const sections = [
    {id:1, name:"discografia"}, 
    {id:2, name:"videos"}, 
    {id:3, name: "banda"}, 
    {id:4, name:"merch"},
    {id:5, name:"contatos"}
  ]

  return (
    <div className="Header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">loyal gun</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {sections.map(section => 
              <NavItem key={section.id}>
                <NavLink href={`${section.name}`}>{section.name}</NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;