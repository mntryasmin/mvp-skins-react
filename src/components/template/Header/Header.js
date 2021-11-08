import React from 'react'
import './Header.css'
import { Col, Form, Button, Container, Navbar, Nav, Row } from 'react-bootstrap'
import LoginModal from '../../micro/LoginModal/LoginModal'
import Menu from './Menu/Menu.js'
import logoClean from '../../../assets/images/ID/logo-clean.png'
import Lupa from '../../../assets/images/icones/icon-lupa.png'
import Arma from '../../../assets/images/icones/icon-arma.png'
import Faca from '../../../assets/images/icones/icon-faca.png'
import Luva from '../../../assets/images/icones/icon-luva.png'
import Agente from '../../../assets/images/icones/icon-agente.png'
import Fav from '../../../assets/images/icones/icon-coracao.png'
import Car from '../../../assets/images/icones/icon-carrinho.png'

function Header(props) {

    return (
        <>
            <header className="">
                {/* PARTE DE CIMA DO HEADER */}
                <Container fluid className="topo-header m-0 p-0">
                    
                    {/* LOGO */}
                    <Col xs={4} md={2} className="logo my-0 d-flex justify-content-center">
                        <img src={logoClean} alt="MVP" />
                    </Col>
                    {/* FIM DO LOGO */}

                    {/* BARRA DE PESQUISA */}
                    <Col xs={8} md={6} >
                        <Form >
                            <Form.Group className="d-flex justify-content-center">
                                <Form.Control type="text" placeholder="O que você procura?" className="barra-pesquisa" />
                                <a href="#" >
                                    <img src={Lupa} height="25.5" className="lupa" />
                                </a>
                            </Form.Group>
                        </Form>
                    </Col>
                    {/* FIM DA BARRA DE PESQUISA */}

                    <Col xs={12} md={4} className="btn-menu p-0">
                        {/* BOTÃO DE LOGIN */}
                        <LoginModal />
                        {/* FIM DO BOTÃO DE LOGIN */}

                        {/* BOTÃO DE CADASTRO */}
                        <Button href='./Register/Register.js' className="btn-mvp">
                           CADASTRE-SE
                        </Button>
                        
                        {/* FIM DO BOTÃO DE CADASTRO */}
                    </Col>
                    
                </Container>

                {/* NAVBAR */}
                <Navbar bg="light" variant="light" >
                    <Container className="d-flex justify-content-around">
                        <Navbar.Brand href="#" className="link-header">
                            <Menu />
                        </Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#" className="link-header categoria">
                                <img src={Arma} width="30" height="30" />
                                Armas
                            </Nav.Link>
                            <Nav.Link href="#" className="link-header ms-5 categoria">
                                <img src={Faca} width="30" height="30" />
                                Facas
                            </Nav.Link>
                            <Nav.Link href="#" className="link-header ms-5 categoria">
                                <img src={Luva} width="30" height="30" />
                                Luvas
                            </Nav.Link>
                            <Nav.Link href="#" className="link-header ms-5 categoria">
                                <img src={Agente} width="30" height="30" />
                                Agentes
                            </Nav.Link>


                            <Nav.Link href="#" className="link-header ms-5">
                                Favoritos
                                <img src={Fav} width="30" height="30" />
                            </Nav.Link>
                            <Nav.Link href="#" className="link-header ms-5">
                                Carrinho
                                <img src={Car} width="30" height="30" />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {/* FIM DO NAVBAR */}

            </header>
        </>
    )
}

export default Header