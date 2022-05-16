import {Container, Nav, Navbar} from "react-bootstrap";

function MainNavbar(){

    return(
        <Navbar id="App-Navbar" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Admin portal</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Menu">Menu</Nav.Link>
                    <Nav.Link href="/Orders">Orders</Nav.Link>
                    <Nav.Link href="#mobilePreview">preview mobileview</Nav.Link>
                    <Nav.Link href="/help">Help</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default MainNavbar;