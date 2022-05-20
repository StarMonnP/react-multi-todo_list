import React from "react";
import { Navbar } from "react-bootstrap";
import {Container, Nav} from "react-bootstrap"
/**
 *  Navgigation bar appear on the top of the App
 *  Doesn't do anything except showing the Todo-List word on the top
 * 
 */
function NavBar()  {
  return ( 
    <div>
    <Navbar className="navbar"  expand="lg">
        <Container >
        <Navbar.Brand className='m-auto' href="/">Todo-List</Navbar.Brand>
        </Container>
    </Navbar>

    </div>
  );
}

export default NavBar;