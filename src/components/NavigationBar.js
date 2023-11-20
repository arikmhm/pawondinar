import { Navbar,Nav, NavbarBrand, NavLink, Container } from "react-bootstrap"



const NavigationBar = ()=> {
    return(
        <div>
            <Navbar>
                    <Container>
                        <NavbarBrand>Pawon Dinar</NavbarBrand>
                        <Nav>
                            <NavLink>Home</NavLink>
                            <NavLink >Link</NavLink>
                        </Nav>
                    </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
