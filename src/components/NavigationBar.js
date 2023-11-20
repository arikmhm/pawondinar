import { Navbar,Nav, NavbarBrand, NavLink, Container } from "react-bootstrap"
import Pawonlogo from '../assets/img/Icon/logopawon.png' 


const NavigationBar = ()=> {
    return(
        <div>
            <Navbar>
                    <Container>
                        <NavbarBrand>
                            <img src={Pawonlogo} style={{width:'40%'}}></img>
                        </NavbarBrand>
                        <Nav >
                            <NavLink style={{color:'white'}}>Home</NavLink>
                            <NavLink style={{color:'white'}}>Product</NavLink>
                            <NavLink style={{color:'white'}}>Review</NavLink>
                            <NavLink style={{color:'white'}}>Contact</NavLink>
                        </Nav>
                    </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
