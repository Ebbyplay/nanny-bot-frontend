import { Component, React } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { Container, Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        const { currentUser, userInProcess } = this.props.UserStore;

        return (
            <Navbar expand="lg" bg="light" variant="light" sticky="top" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#" as={Link} to="/">NannyBot</Navbar.Brand>
                    {currentUser || userInProcess ? (
                        <>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                {currentUser ? (
                                    <Nav className="me-auto">
                                        <Nav.Link href="#" as={Link} to="/dashboard">Übersicht</Nav.Link>
                                        <Nav.Link href="#" as={Link} to="/tasks">Aufgaben</Nav.Link>
                                        <Nav.Link href="#" as={Link} to="/shop">Shop</Nav.Link>
                                        <Nav.Link href="#" as={Link} to="/settings">Einstellungen</Nav.Link>
                                        <Nav.Link href="#" as={Link} to="/logout">Abmelden</Nav.Link>
                                    </Nav>
                                ) : userInProcess ? (
                                    <Nav className="me-auto">
                                    <Nav.Link href="#" as={Link} to="/logout">Abmelden</Nav.Link>
                                    </Nav>
                                ) : <></>}
                            </Navbar.Collapse>
                        </>
                    ) : <></>}
                </Container>
            </Navbar>
        )
    }
}

export default inject('UserStore')(observer(Header));
