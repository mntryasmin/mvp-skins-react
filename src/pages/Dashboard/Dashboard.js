// REACT
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import axios from 'axios';

// ESTILO
import './../../assets/css/Style.css'
import './Dashboard.css'

// PÁGINAS/COMPONENTES
import MyAccount from '../../components/macro/Dashboard/MyAccount/MyAccount'
import OrderHistory from '../../components/macro/Dashboard/OrderHistory/OrderHistory'
import Security from '../../components/macro/Dashboard/Security/Security'
import SideBar from '../../components/macro/Dashboard/SideBar/SideBar'

function Dashboard(props) {

    // const [section, setSection] = useState({});
    // const { url } = onclick();

    return (
        <>
            <Container fluid className="row m-0 py-5 px-0 dashboard-container content-container">

                {/* MENU LATERAL  */}
                <SideBar />

                {/* DASHBOARD  */}
                <Container className="col-9 my-0 p-5 dashboard">

                    
                    
                    <MyAccount />
                    <OrderHistory />
                    <Security />
                </Container>
            </Container>
        </>
    )
}

export default Dashboard