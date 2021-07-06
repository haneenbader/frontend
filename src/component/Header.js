import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"> Coktiel App </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/favorite">Favorit</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
