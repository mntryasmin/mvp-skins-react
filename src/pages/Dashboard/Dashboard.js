// REACT
import React from 'react'

// ESTILO
import '../../assets/css/Style.css'
import './Dashboard.css'

// PÁGINAS/COMPONENTES
import MyAccount from '../../components/macro/Dashboard/MyAccount/MyAccount'
import OrderHistory from '../../components/macro/Dashboard/OrderHistory/OrderHistory'
import Security from '../../components/macro/Dashboard/Security/Security'

function Dashboard(props) {

    return(
        <>
        {/* CONTAINER DO DASHBOARD  */}
        <div className="row m-0 py-5 dashboard-container">
            
            {/* INICIO DO MENU LATERAL  */}
            <nav className="col-2 px-0 py-3 menu-dashboard">
                <div className="py-4 menu-text">
                    Olá, NOME DO CLIENTE
                </div>

                <ul className="p-0">
                    <li> <div className="px-3 menu-title-items"> Dados pessoais </div>
                        <ul>
                            <li>Meus cartões</li>
                            <li>Minha conta</li>
                            <li>Segurança</li>
                        </ul>
                    </li>
                    <li> 
                        <div className="mt-3 px-3 menu-title-items">Pedidos</div>
                        <ul>
                            <li>Meus pedidos</li>
                        </ul>
                    </li>
                </ul>

                <div className="row p-0 menu-text">
                    <p>Preciso de ajuda com a minha conta</p>
                    <img src="./images/icones/icon-contato.png"></img>
                </div>
            </nav>
            {/* FIM DO MENU LATERAL  */}

            {/* INICIO DO DASHBOARD  */}
            <div className="col-9 py-3 px-5 mx-5 dashboard">
                <MyAccount/>
            </div>
            {/* FIM DO DASHBOARD  */}
        </div>
        </>
    )
}

export default Dashboard