import React from 'react'
import './Header.css'
import { Col, Form, Container, Navbar, Nav, Row } from 'react-bootstrap'
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
import { Link } from 'react-router-dom'
import Button from '../../micro/Button/Button.js'

function Header(props) {

    return (
        <>
            <header className="">
                {/* PARTE DE CIMA DO HEADER */}

                <Container fluid className="topo-header m-0 p-0">

                    {/* LOGO */}
                    <Col xs={4} md={2} className="logo my-0 d-flex justify-content-center">
                        <Link to='/home'>
                            <img src={logoClean} alt="MVP" />
                        </Link>
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

                    <Col xs={12} md={4} className="btn-top-header p-0">
                        {/* BOTÃO DE LOGIN */}
                        <LoginModal />
                        {/* FIM DO BOTÃO DE LOGIN */}

                        {/* BOTÃO DE CADASTRO */}

                        <Button navigation route='/register' class='btn-primary-mvp' label='CADASTRE-SE' />

                        {/* FIM DO BOTÃO DE CADASTRO */}
                    </Col>

                </Container>

                {/* NAVBAR */}

                <Navbar bg="light" variant="light" className='nav-main' >
                    <Container fluid className="d-flex justify-content-around ">

                        <Navbar.Brand href="#" className="link-header">
                            <Menu />
                        </Navbar.Brand>

                        <Nav>
                            <Nav.Link href="/category/:id" className="link-header category">
                                <img src={Arma} width="30" height="30" />
                                Armas
                            </Nav.Link>
                            <Nav.Link href="/category/:id" className="link-header ms-5 category">
                                <img src={Faca} width="30" height="30" />
                                Facas
                            </Nav.Link>
                            <Nav.Link href="/category/:id" className="link-header ms-5 category">
                                <img src={Luva} width="30" height="30" />
                                Luvas
                            </Nav.Link>
                            <Nav.Link href="#" className="link-header ms-5 category">
                                <img src={Agente} width="30" height="30" />
                                Agentes
                            </Nav.Link>
                            <Nav.Link href="/product/favorites" className="link-header ms-5">
                                Favoritos
                                <img src={Fav} width="30" height="30" />
                            </Nav.Link>
                            <Nav.Link href="/cart" className="link-header ms-5">
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