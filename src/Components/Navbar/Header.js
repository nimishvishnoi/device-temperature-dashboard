import React from 'react';
import {Navbar} from 'react-bootstrap';


function Header() {
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Device Temperature Dashboard</Navbar.Brand>
      </Navbar>
    )
}

export default Header;