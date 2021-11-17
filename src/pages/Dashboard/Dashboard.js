// REACT
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
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

    const token = localStorage.getItem("Authorization")
    const tokenToSearch = token.replace("Bearer ", "")
    const URL = "http://localhost:8080/cliente/token/"
    const [client, setClient] = useState({})

    function getSection(props) {
        if (props = 1) {
            return (
                <MyAccount />
            )
        } else if (props = 2) {
            return (
                <Security />
            )
        } else if (props = 3) {
            return (
                <OrderHistory />
            )
        } else {
            return (
                <MyAccount />
            )
        }
    }

    useEffect(() => {
        axios.get(`${URL}` + tokenToSearch).then(async (response) => {
            const c = await response.data
            setClient(c)
        })

    }, [])

    return (
        <>
            <Container fluid className="row m-0 py-5 px-0 dashboard-container content-container">
                {/* MENU LATERAL  */}
                <SideBar name={client.nomeCliente} />
                {/* DASHBOARD  */}
                <Container className="col-9 my-0 p-5 dashboard">
                    <Security/>
                </Container>
            </Container>
        </>
    )
}

export default Dashboard