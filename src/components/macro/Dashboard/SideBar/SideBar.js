import React, { Component } from 'react'
import './SideBar.css'
import '../../../../assets/css/Style.css'
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
                <nav className="col-2 py-3 px-0 mx-0">
                    <div className="text-center titulo-nav py-4">Olá, {this.state.name}</div>

                    <ul className="list-group">
                        <li className="list-group-item sidebarIcon dadosPessoais mb-2"> Dados Pessoais </li>
                        <li><a target="self" href="" className="px-3">Dados da conta</a></li>

                        <li><a target="self" href="#seguranca" className="px-3">Alterar senha</a></li>

                        <li className="list-group-item sidebarIcon compras mt-3 mb-2"> Compras </li>
                        <li><a target="self" href="#historico" className="px-3"> Histórico de Compras</a></li>

                    </ul>

                    <div className="nav-contato">
                        <div className="mt-5">Preciso de ajuda com a minha conta</div>
                        <div><img src={contact} className="imagem-nav" /></div>
                    </div>

                </nav>
            </>
        )
    }
}