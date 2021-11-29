// REACT
import React, { useState, useEffect } from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './MyAccount.css'

// PÁGINAS/COMPONENTES
import MyAccountData from '../../components/macro/MyAccount/MyAccount/MyAccount'
import Security from '../../components/macro/MyAccount/Security/Security'
import OrderHistory from '../../components/macro/MyAccount/OrderHistory/OrderHistory'
import SideBar from '../../components/macro/MyAccount/SideBar/SideBar.css'
import Button from '../../components/micro/Button/Button'
import contact from '../../assets/images/icones/icon-contato.png'


export default function MyAccount(props) {
    const client = JSON.parse(localStorage.getItem("client"))
    const nameClient = client.nomeCliente
    const [componentClick, setComponentClick] = useState('');

    function rendMyAccount()  {
        if (componentClick == 1 || componentClick == '') {
            return (<MyAccountData />);
        } else if (componentClick == 2) {
            return (<Security />);
        } else if (componentClick == 3) {
            return (<OrderHistory />);
        }
    };

    useEffect(() => {
        if (props.sucess){
            setComponentClick(3)
        }
    })

    return (
        <>
            <Container fluid className="row m-0 py-5 px-0 dashboard-container content-container">
                {/* MENU LATERAL  */}
                <Col xs={9} sm={9} md={9} lg={2} xl={2} className="p-0 sidebar">
                    <Row className="mx-0 nav-options">
                        <Row className="card-caption-mvp name-client">Olá, {client.nomeCliente}</Row>

                        <Nav className="list-group flex-column nav-list" defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li" className="mt-4 mb-2 px-2 sidebarIcon my-account-tile nav-list-title">
                                Dados Pessoais
                            </Nav.Item>

                            <Nav.Item as="li" className="p-0 nav-link">
                                <Nav.Link onClick={() => setComponentClick(1)} className="px-0 personal-data sidebarIcon">Dados da conta</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="p-0 nav-link">
                                <Nav.Link onClick={() => setComponentClick(2)} className="px-0 change-password sidebarIcon">Alterar senha</Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="mt-4 mb-2 px-2 sidebarIcon shop nav-list-title">
                                Compras
                            </Nav.Item>

                            <Nav.Item as="li" className="p-0 nav-link">
                                <Nav.Link onClick={() => setComponentClick(3)} className="px-0 purchases-historic sidebarIcon">Histórico de Compras</Nav.Link>
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

                {/* DASHBOARD  */}
                <Container className="col-9 my-0 p-5 dashboard">
                    {rendMyAccount()}
                </Container>
            </Container>
        </>
    )
}