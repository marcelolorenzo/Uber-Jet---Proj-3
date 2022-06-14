import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/Logo-UberJet.png"

export function Footer () {
    return (
        <FooterStyled className="text-center">
            <Container className="d-lg-flex align-items-center">
                <Link to='/' className="me-lg-auto">
                 <ImageStyled src={Logo} width={255} height={67} />
                </Link>
                 <Nav className="flex-column flex-lg-row my-4 my-lg-0">
            <Nav.Link as={Link} to='/' className="text-white">Start</Nav.Link>
            <Nav.Link as={Link} to='/signup' className="text-white">Sign up</Nav.Link>
            <Nav.Link as={Link} to='/login' className="text-white">Login</Nav.Link>
            <Nav className="justify-content-center">
            <Nav.Link href="https://facebook.com" target="_blank" className="text-white">
                <IconStyled icon={faFacebookSquare}  />
                   </Nav.Link>
                   <Nav.Link href="https://instagram.com" target="_blank" className="text-white">
                <IconStyled icon={faInstagram}  />
                   </Nav.Link>
            </Nav>
                 </Nav>
            </Container>
        </FooterStyled>
        )
}


const FooterStyled = styled.footer`
    background: #414141;
    padding: 30px 0 40px; 
    @media (min-width: 992px) {
        padding: 15px 0;
    }
`

const ImageStyled = styled.img`
    @media (min-width: 992px) {
        width: 96px;
        height: auto; 
    }
`

const IconStyled = styled(FontAwesomeIcon)`
    font-size: 40px;
`