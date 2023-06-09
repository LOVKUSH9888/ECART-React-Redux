import { Link, NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Products from "./Products";

import { useSelector } from "react-redux";

const NavB = () => {

  const cartProducts = useSelector(state => state.cart);


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to = '/' as = {Link}>Ecart</Navbar.Brand>
        <Nav className="d-flex">
          <Nav.Link to="/product" as={Link}>
            Products
          </Nav.Link>
        </Nav>

        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
          <Nav.Link to="/cart" as={Link}>
            Cart {cartProducts.length}
          </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;
