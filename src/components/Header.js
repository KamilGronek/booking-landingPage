import  React,{useState} from "react"
import { Link } from "gatsby"
import { Navbar,Nav,Button,Form,Modal } from 'react-bootstrap';
import {
  LogoBooking,ChooseLanguage,QuestionMark,StaysLogo,FlightsLogo,CarRentalsLogo,AttractionsLogo,AirportLogo} from "../images/logosSVG"
import "../styles/navbar.css";

const Header = () => {
  const [lgShow, setLgShow] = useState(false);

   return(
  <header 
    style={{
       backgroundColor: `#003580`,
    }}
  >
  <Navbar  expand="lg" className="navbar"
  style={{
          margin: `0 auto`,
          maxWidth: 1140,
          padding: `1.45rem 1.0875rem`,

    }}
    >
    <Navbar.Brand href="#home">
    <Link to="/"><LogoBooking/></Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">
          <span style={{fontWeight:"500 !important", color:"white"}}>USD</span>
        </Nav.Link>
        <Nav.Link href="#chooseLanguage">
          <ChooseLanguage setLgShow={setLgShow}/>
        </Nav.Link>
        <Nav.Link href="#link">
            <QuestionMark/>
        </Nav.Link>
      </Nav>
      <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Select your language
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Suggested for you</h4>
            <h4>All languages</h4>
          </Modal.Body>
        </Modal>
      <Form inline>
        <Button className="navbar__button-first" variant="outline-light">List your property</Button>
        <Button className="navbar__button" variant="light">Register</Button>
        <Button className="navbar__button" variant="light">Sign in</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>


    <Navbar  expand="lg" className="navbar-menu"
      style={{
          margin: `0 auto`,
          maxWidth: 1140,
          padding: `1.45rem 1.0875rem`,
          color: `white`
      }}
    >
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#stays">
          <StaysLogo/>
          <span className="navbar-menu__text">Stays</span>
        </Nav.Link>
        <Nav.Link href="#flights">
        <FlightsLogo/>
          <span  className="navbar-menu__text">Flights</span>
          </Nav.Link>
        <Nav.Link href="#car_rentals">
          <CarRentalsLogo/>
          <span  className="navbar-menu__text"> Car rentals</span>
          </Nav.Link>
        <Nav.Link href="#attractions">
          <AttractionsLogo/>
          <span  className="navbar-menu__text">Attractions</span>
          </Nav.Link>
        <Nav.Link href="#airport_taxis">
          <AirportLogo/>
          <span  className="navbar-menu__text"> Airport taxis</span>
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  </header>
)
  }

export default Header
