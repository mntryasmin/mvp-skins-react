// REACT
import React, { Component } from 'react'
import { Nav, Col, Row } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './SideBar.css'

// PÁGINAS/COMPONENTES
import contact from '../../../../assets/images/icones/icon-contato.png'
import AccountList from '../MyAccount/AccountList'
import MyAccount from '../MyAccount/MyAccount'
import Security from '../Security/Security'
import OrderHistory from '../OrderHistory/OrderHistory'


export default class SideBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: AccountList.name,
        }

    }


    render() {
        return (
            <>
                <Col xs={9} sm={9} md={9} lg={2} xl={2} className="p-0 sidebar">
                    <Row className="mx-0 nav-options">
                        <Row className="pt-5 card-caption-mvp">Olá, Cliente da Silva Santos</Row>

                        <Nav className="p-1 list-group flex-column nav-list" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li" className="mt-4 mb-2 px-2 sidebarIcon my-account-tile">
                                Dados Pessoais
                            </Nav.Item>

                            <Nav.Item className="p-0 nav-link">
                                <Nav.Link eventKey="link-1" className="px-0 personal-data sidebarIcon">Dados da conta</Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="p-0 nav-link">
                                <Nav.Link eventKey="link-1" className="px-0 change-password sidebarIcon">Alterar senha</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mt-4 mb-2 px-2 sidebarIcon shop nav-list-title">
                                Compras
                            </Nav.Item>

                            <Nav.Item className="p-0 nav-link">
                                <Nav.Link eventKey="link-1" className="px-0 purchases-historic sidebarIcon">Histórico de Compras</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>

                    <Row className="mx-0 px-2 py-1 nav-contact">
                        <a href="/contact">
                            <Row className="px-0 pt-2">Preciso de ajuda com a minha conta</Row>
                            <Row className="px-0 nav-image"><img src={contact} className="py-3" /></Row>
                        </a>
                    </Row>

                </Col>
            </>
        )
    }
}