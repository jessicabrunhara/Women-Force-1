import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../Logo/logo';

export default () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="nav-bar">
			<Navbar.Brand href="/">
				<Logo />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/avaliacao">Avaliação</Nav.Link>
					<Nav.Link href="/resultados">Resultados</Nav.Link>
					<Nav.Link href="/rankings">Rankings</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
