import React, { useEffect, useState } from 'react'
import './Header.css'
import { Col, Navbar, Nav, Row } from 'react-bootstrap'
import LoginModal from '../../micro/LoginModal/LoginModal'
import Menu from './Menu/Menu.js'
import logoClean from '../../../assets/images/ID/logo-maior.jpg'
import Arma from '../../../assets/images/icones/icon-arma.png'
import Faca from '../../../assets/images/icones/icon-faca.png'
import Luva from '../../../assets/images/icones/icon-luva.png'
import Agente from '../../../assets/images/icones/icon-agente.png'
import Fav from '../../../assets/images/icones/icon-coracao.png'
import Car from '../../../assets/images/icones/icon-carrinho.png'
import { Link } from 'react-router-dom'
import Button from '../../micro/Button/Button.js'
import axios from 'axios'
import SearchForm from '../../macro/Forms/Search/SearchForm'

function Header(props) {

    const URL = "http://localhost:8080/cliente/token/"
    const token = localStorage.getItem("Authorization")
    const [client, setClient] = useState({})
    const [numberCart, setNumberCart] = useState('')

    useEffect((() => {

        if (localStorage.getItem("cart")){
            const number = (JSON.parse(localStorage.getItem("cart")).length)
            setNumberCart(number)
            console.log(numberCart)
        }

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
                const cliente = await response.data;
                setClient(cliente)
                localStorage.setItem("client", JSON.stringify(response.data))
            })
    }

    const btnCadastrar = () => {
        if (localStorage.getItem("Authorization")) {

            return (
                <>
                    <div className='welcome my-2 col-12'>
                        Olá, {client.nomeCliente}. Seja bem-vindo!
                    </div>
                    <Button navigation route='/myaccount' class='btn-mvp-orange-clean' label='MINHA ÁREA' />
                </>
            )
        } else {
            return (
                <Button navigation route='/register' class='btn-mvp-orange-clean' label='CADASTRE-SE' />
            )
        }
    }

    const loadCartNumber = () => {
        const number = (JSON.parse(localStorage.getItem("cart")).length)
        if (number == 0){
            return <></>
        }else{
            return number
        }
    }

    const btnCart = () => {
        return (
        <Nav.Link href="/cart" className="link-header items-nav">
            {loadCartNumber()}
            <img src={Car} width="30" height="30" />
            Carrinho
        </Nav.Link>
        )
    }

    const btnFavorites = () => {
        if (localStorage.getItem("Authorization")) {

            return (
                <Nav.Link href="/favorites" className="link-header items-nav">
                    <img src={Fav} width="30" height="30" />
                    Favoritos
                </Nav.Link>
            )
        } else {
            return (
                <LoginModal linkFavorite />
            )
        }
    }

    return (
        <>
            <header className="m-0 p-0">
                {/* PARTE DE CIMA DO HEADER */}
                <Row className='m-0 p-2 py-3 top-header'>
                    {/* LOGO */}
                    <Col xs={4} md={2} lg={1} className="logo mx-3">
                        <Link to='/home'>
                            <img src={logoClean} alt="MVP" />
                        </Link>
                    </Col>

                    {/* BARRA DE PESQUISA */}
                    <Col xs={8} md={6} lg={6} className="input-box">
                        <SearchForm />
                    </Col>

                    <Col xs={6} md={4} lg={4} className="button-register">
                        {/* BOTÃO DE CADASTRO */}
                        {btnCadastrar()}
                        <LoginModal />
                    </Col>
                </Row>

                {/* NAVBAR */}
                <Navbar bg="light" variant="light" className='nav-main px-2' >
                    <Col md={1} xs={1}>
                        <Navbar.Brand href="#" className="link-header">
                            <Menu />
                        </Navbar.Brand>
                    </Col>
                    <Col md={11} xs={11}>
                        <Nav>
                            <Nav.Link href="/category/1" className="link-header items-nav col-2">
                                <img src={Arma} width="30" height="30" />
                                Armas
                            </Nav.Link>

                            <Nav.Link href="/category/6" className="link-header items-nav col-2">
                                <img src={Faca} width="30" height="30" />
                                Facas
                            </Nav.Link>

                            <Nav.Link href="/category/7" className="link-header items-nav col-2">
                                <img src={Luva} width="30" height="30" />
                                Luvas
                            </Nav.Link>

                            <Nav.Link href="/category/4" className="link-header items-nav col-2">
                                <img src={Agente} width="30" height="30" />
                                Agentes
                            </Nav.Link>

                            <Col md={4} xs={6} className="favor-cart-header px-3">
                                {btnFavorites()}
                                {btnCart()}
                            </Col>
                        </Nav>
                    </Col>
                </Navbar>

                {/* FIM DO NAVBAR */}

            </header>
        </>
    )
}

export default Header