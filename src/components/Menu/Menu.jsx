import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Cartwidget from '../Cartwidget/Cartwidget';

const Menu = () => {
    const{cantidadTotal} = useCartContext

    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className={({isActive})=> isActive ? 'bg-red'  : ''}>CoffeBook</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/categoria/gorras'>Lirbos</Link>
                    <Link to='/categoria/remeras'>Revistas</Link>                
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Carrito</Nav.Link>
                    <Link to="/cart">
                        {cantidadTotal() != 0 && cantidadTotal() }
                        <Cartwidget />
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu