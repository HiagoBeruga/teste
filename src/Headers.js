import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <NavbarBrand href="/"><b>Teste</b></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Informações</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contato
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink className="text-info" href="https://api.whatsapp.com/send?phone=5534996901687&text=oi" target="_blank">Whatsapp</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className="text-info" href="https://github.com/HiagoBeruga" target="_blank">GitHub</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Headers;