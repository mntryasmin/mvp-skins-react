// REACT
import React, { Component } from 'react'
import { Container} from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './OrderHistory.css'

// PÁGINAS/COMPONENTES
import Requests from '../../../micro/Dashboard/Requests/Requests'

function OrderHistory(props) {
    return (
        <>
            <h1 className="mb-4 card-title-mvp">Histórico de compras</h1>
            <Container className="mx-0 pb-5">
                <Requests/>
            </Container>
        </>
    )
}

export default OrderHistory