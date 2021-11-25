// REACT
import React, { Component, LinkContainer } from 'react'
import { Nav, Col, Row } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './SideBar.css'

// PÁGINAS/COMPONENTES
import contact from '../../../../assets/images/icones/icon-contato.png'
import Dashboard from '../../../../pages/Dashboard/Dashboard'


export default class SideBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    }


    render() {
        return (
            <>
                <Col xs={9} sm={9} md={9} lg={2} xl={2} className="p-0 sidebar">
                    <Row className="mx-0 nav-options">
                        <Row className="card-caption-mvp name-client">Olá, {this.props.name}</Row>

                        <Nav className="list-group flex-column nav-list" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li" className="mt-4 mb-2 px-2 sidebarIcon my-account-tile nav-list-title">
                                Dados Pessoais
                            </Nav.Item>
                            
                            <Nav.Item  as="li"className="p-0 nav-link">
                                <Nav.Link strict onClick={<Dashboard/>} className="px-0 personal-data sidebarIcon">Dados da conta</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="p-0 nav-link">
                                <Nav.Link onClick={<Dashboard/>} className="px-0 change-password sidebarIcon">Alterar senha</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mt-4 mb-2 px-2 sidebarIcon shop nav-list-title">
                                Compras
                            </Nav.Item>

                            <Nav.Item as="li" className="p-0 nav-link">
                                <Nav.Link onClick={<Dashboard/>} className="px-0 purchases-historic sidebarIcon">Histórico de Compras</Nav.Link>
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