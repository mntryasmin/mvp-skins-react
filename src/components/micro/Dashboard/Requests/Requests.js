// REACT
import React, { useState } from 'react'
import { Nav, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './Requests.css'

// PÁGINAS/COMPONENTES
import RequestsList from './RequestsList.js'
import RequestsItems from './../RequestsItems/RequestsItems'
import arrow from '../../../../assets/images/icones/icon-seta-baixo.png'

function Requests(props) {

    function GetRequests() {
        return RequestsList.map(requests => {
            return (
                <>
                    <Nav className="list-group flex-row request-style py-1" defaultActiveKey="/home" as="ul">
                        <Col className="col-2" >
                            <Nav.Item as="li"> {requests.id} </Nav.Item>
                        </Col>

                        <Col className="col-2">
                            <Nav.Item as="li"> {requests.dataRegistro} </Nav.Item>
                        </Col>

                        <Col className="col-2 requests-resp" >
                            <Nav.Item as="li"> R$ {requests.valorLiquido} </Nav.Item>
                        </Col>

                        <Col className="col-2 requests-resp" >
                            <Nav.Item as="li"> {requests.status} </Nav.Item>
                        </Col>

                        <Col className="col-2" >
                            <Nav.Item as="li">
                                <Nav.Link eventKey={RequestsItems}>
                                    <img className="arrow" src={arrow} />
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Nav>

                    {RequestsItems()}
                </>
            )
        })
    }

    return (
        <>
            <Nav className="list-group flex-row request-title py-2" defaultActiveKey="/home" as="ul">
                <Col className="col-2" >
                    <Nav.Item as="li" className=""> Pedido </Nav.Item>
                </Col>

                <Col className="col-2">
                    <Nav.Item as="li" className=""> Data </Nav.Item>
                </Col>

                <Col className="col-2 requests-resp">
                    <Nav.Item as="li" className=""> Preço </Nav.Item>
                </Col>

                <Col className="col-2 requests-resp">
                    <Nav.Item as="li" className=""> Status </Nav.Item>
                </Col>

                <Col className="col-2" >
                    <Nav.Item as="li" className=""> Abrir </Nav.Item>
                </Col>
            </Nav>

            {GetRequests()}
        </>
    )
}

export default Requests