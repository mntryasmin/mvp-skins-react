// REACT
import React from 'react'
import {Container} from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Dashboard.css'

// PÁGINAS/COMPONENTES
import MyAccount from '../../components/macro/Dashboard/MyAccount/MyAccount'
import OrderHistory from '../../components/macro/Dashboard/OrderHistory/OrderHistory'
import Security from '../../components/macro/Dashboard/Security/Security'
import SideBar from '../../components/macro/Dashboard/SideBar/SideBar'

function Dashboard(props) {

    return(
        <>
        <Container fluid className="row m-0 py-5 px-0 dashboard-container">
            
            {/* MENU LATERAL  */}
            <SideBar/>

            {/* DASHBOARD  */}
            <Container className="col-9 my-0 p-5 dashboard">
                <MyAccount/>
                {/* <OrderHistory/> */}
                {/* <Security/> */}
            </Container>
        </Container>
        </>
    )
}

export default Dashboard