import React, { useEffect, useState } from 'react'
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
import axios from 'axios'

function Header(props) {

    const URL = "http://localhost:8080/cliente/token/"
    const token = localStorage.getItem("Authorization")
    const [client, setClient] = useState({})

    useEffect((() => {
        if (localStorage.getItem("Authorization")) {
            const tokenToSearch = token.replace("Bearer ", "")
            getClient(tokenToSearch)
        }
        else {
            localStorage.setItem("Authorization", '')
        }
        
    }
    ), [])

    const getClient = (token) => {
        axios.get(`${URL}` + token)
            .then(async (response) => {
                const cliente = await response.data
                setClient(cliente)
                localStorage.setItem("client", JSON.stringify(response.data))
            })
    }

    const btnCadastrar = () => {
        if (localStorage.getItem("Authorization")) {

            return (
                <div className='welcome'>
                    Olá {client.nomeCliente}
                    <br />
                    Seja bem-vindo!
                </div>
            )
        } else {
            return (
                <Button navigation route='/register' class='btn-primary-mvp' label='CADASTRE-SE' />
            )
        }
    }

    const btnFavorites = () => {
        if (localStorage.getItem("Authorization")) {

            return (
                <Nav.Link href="/favorites" className="link-header">
                    <div className='d-flex align-items-center justify-content-center'>
                        Favoritos
                        <img src={Fav} width="30" height="30" />
                    </div>
                </Nav.Link>
            )
        } else {
            return (
                <LoginModal linkFavorite />
            )
        }
    }

    const btnCart = () => {
        if (localStorage.getItem("Authorization")) {

            return (
                <Nav.Link href="/cart" className="link-header">
                    <div className='d-flex align-items-center justify-content-center'>
                        Carrinho
                        <img src={Car} width="30" height="30" />
                    </div>
                </Nav.Link>
            )
        } else {
            return (
                <LoginModal linkCart/>
            )
        }

    }

    return (
        <>
            <header className="">
                {/* PARTE DE CIMA DO HEADER */}
                <Container fluid className="m-0 p-0">
                    <Row className='d-flex justify-content-around align-items-center top-header'>
                        {/* LOGO */}
                        <Col xs={4} md={2} className="logo my-0 ">
                            <Link to='/home'>
                                <img src={logoClean} alt="MVP" />
                            </Link>
                        </Col>
                        {/* FIM DO LOGO */}

                        {/* BARRA DE PESQUISA */}
                        <Col xs={8} md={6} >
                            <Form >
                                <Form.Group >
                                    <div className='d-flex flex-row input-box'>
                                        <Form.Control type="text" placeholder="O que você procura?" className="search-bar" />
                                        <a href="#" >
                                            <img src={Lupa} className="lupa" />
                                        </a>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>
                        {/* FIM DA BARRA DE PESQUISA */}

                        <Col xs={6} md={2} className="p-0 d-flex justify-content-center">
                            {/* BOTÃO DE LOGIN */}
                            <LoginModal />
                        </Col>
                        {/* FIM DO BOTÃO DE LOGIN */}
                        <Col xs={6} md={2} className="p-0 d-flex justify-content-center">
                            {/* BOTÃO DE CADASTRO */}
                            {btnCadastrar()}
                            {/* FIM DO BOTÃO DE CADASTRO */}
                        </Col>
                    </Row>
                </Container>

                {/* NAVBAR */}
                <Container fluid className='box-navbar'>
                    <Row className="d-flex justify-content-between row-navbar">

                        <Navbar bg="light" variant="light" className='nav-main' >
                            <Col md={2} xs={2}>
                                <Navbar.Brand href="#" className="link-header">
                                    <Menu />
                                </Navbar.Brand>
                            </Col>
                            <Col md={10} xs={10} className='mx-1'>
                                <Nav>
                                    <Col md={2}>
                                        <Nav.Link href="/category/1" className="link-header category">
                                            <div className='d-flex align-items-center items-nav'>
                                                <img src={Arma} width="30" height="30" />
                                                Armas
                                            </div>
                                        </Nav.Link>
                                    </Col>
                                    <Col md={2} >
                                        <Nav.Link href="/category/6" className="link-header category">
                                            <div className='d-flex align-items-center items-nav '>
                                                <img src={Faca} width="30" height="30" />
                                                Facas
                                            </div>
                                        </Nav.Link>
                                    </Col>
                                    <Col md={2}>
                                        <Nav.Link href="/category/7" className="link-header category">
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <img src={Luva} width="30" height="30" />
                                                Luvas
                                            </div>
                                        </Nav.Link>
                                    </Col>
                                    <Col md={2} >
                                        <Nav.Link href="/category/4" className="link-header category">
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <img src={Agente} width="30" height="30" />
                                                Agentes
                                            </div>
                                        </Nav.Link>
                                    </Col>

                                    <Col md={2} xs={6} className='d-flex align-items-center justify-content-center'>
                                        {btnFavorites()}
                                    </Col>
                                    <Col md={2} xs={6} className='d-flex align-items-center justify-content-center'>
                                        {btnCart()}
                                    </Col>
                                </Nav>
                            </Col>
                        </Navbar>
                    </Row>
                </Container>

                {/* FIM DO NAVBAR */}

            </header>
        </>
    )
}

export default Header