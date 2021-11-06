// REACT
import React, { Component } from 'react'
import { Nav, Col } from 'react-bootstrap'

// ESTILO
import './SideBar.css'
import '../../../../assets/css/Style.css'

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
                <Col xs={9} sm={9} md={9} lg={2} xl={2} className="col-2 py-3 px-0 mx-0 sidebar">
                    <div className="text-center titulo-nav py-4">Olá, {this.state.name}</div>

                    <Nav className="list-group flex-column" defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li" className="sidebarIcon my-account-tile mt-4 mb-2">
                            Dados Pessoais
                        </Nav.Item>
                        <li><a target="self" href="" className="px-3">Dados da conta</a></li>

                        <li><a target="self" href="#seguranca" className="px-3">Alterar senha</a></li>

                        <Nav.Item as="li" className="sidebarIcon shop mt-4 mb-2">
                            Compras
                        </Nav.Item>
                        <li><a target="self" href="#historico" className="px-3"> Histórico de Compras</a></li>

                    </Nav>

                    <div className="nav-contato">
                        <div className="mt-5">Preciso de ajuda com a minha conta</div>
                        <div><img src={contact} className="imagem-nav" /></div>
                    </div>

                </Col>
            </>
        )
    }
}