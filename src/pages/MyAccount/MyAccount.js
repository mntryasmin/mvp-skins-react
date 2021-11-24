// REACT
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios';

// ESTILO
import './../../assets/css/Style.css'
import './MyAccount.css'

// PÁGINAS/COMPONENTES
import Mycount from '../../components/macro/MyAccount/MyAccount/MyAccount'
import OrderHistory from '../../components/macro/MyAccount/OrderHistory/OrderHistory'
import Security from '../../components/macro/MyAccount/Security/Security'
import SideBar from '../../components/macro/MyAccount/SideBar/SideBar'

function MyAccount(props) {
    return (
        <>
            <Container fluid className="row m-0 py-5 px-0 dashboard-container content-container">
                {/* MENU LATERAL  */}
                <SideBar />

                {/* DASHBOARD  */}
                <Container className="col-9 my-0 p-5 dashboard">
                    <Mycount />
                    <Security />
                    <OrderHistory />
                </Container>
            </Container>
        </>
    )
}

export default MyAccount;