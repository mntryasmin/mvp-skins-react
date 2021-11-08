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
                <Col xs={9} sm={9} md={9} lg={2} xl={2} className="py-3 px-0 mb-5 sidebar">
                    <Row>
                        <Row className="py-4 nav-title">Olá, {this.state.name}</Row>

                        <Nav className="list-group flex-column nav-list p-1" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li" className="sidebarIcon my-account-tile nav-list-title mt-4 mb-2 px-2">
                                Dados Pessoais
                            </Nav.Item>

                            <Nav.Item className="px-1 py-0 nav-link">
                                <Nav.Link eventKey="link-1" className="personal-data sidebarIcon">Dados da conta</Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="px-1 py-0 nav-link">
                                <Nav.Link eventKey="link-1" className="change-password sidebarIcon">Alterar senha</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mt-4 mb-2 sidebarIcon shop nav-list-title px-2">
                                Compras
                            </Nav.Item>

                            <Nav.Item className="px-1 py-0 nav-link">
                                <Nav.Link eventKey="link-1" className="purchases-historic sidebarIcon">Histórico de Compras</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>

                    <Row className="nav-contact">
                        <Row>Preciso de ajuda com a minha conta</Row>
                        <Row className="nav-image"><img src={contact} className="py-3" /></Row>
                    </Row>

                </Col>
            </>
        )
    }
}