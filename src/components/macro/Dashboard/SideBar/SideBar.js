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
                        <Row className="py-4 card-caption-mvp">Olá, {this.state.name}</Row>

                        <Nav className="p-1 list-group flex-column nav-list" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li" className="mt-4 mb-2 px-3 sidebarIcon my-account-tile nav-list-title">
                                Dados Pessoais
                            </Nav.Item>

                            <Nav.Item className="px-1 py-0 nav-link">
                                <Nav.Link eventKey="link-1" className="personal-data sidebarIcon">Dados da conta</Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="px-1 py-0 nav-link">
                                <Nav.Link eventKey="link-1" className="change-password sidebarIcon">Alterar senha</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mt-4 mb-2 px-3 sidebarIcon shop nav-list-title">
                                Compras
                            </Nav.Item>

                            <Nav.Item className="px-1 py-0 nav-link">
                                <Nav.Link eventKey="link-1" className="purchases-historic sidebarIcon">Histórico de Compras</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>

                    <Row className="mx-0 px-0 py-3 nav-contact">
                        <Row className="px-0">Preciso de ajuda com a minha conta</Row>
                        <Row className="px-0 nav-image"><img src={contact} className="py-3" /></Row>
                    </Row>

                </Col>
            </>
        )
    }
}