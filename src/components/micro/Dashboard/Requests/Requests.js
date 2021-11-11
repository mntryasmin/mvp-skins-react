// REACT
import React, { useState } from 'react'
import { Nav, Col, Button, Offcanvas, Container, Modal } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './Requests.css'

// PÁGINAS/COMPONENTES
import RequestsList from './RequestsList.js'
import RequestsItems from './../RequestsItems/RequestsItems'
import cursor from '../../../../assets/images/icones/icon-cursor.png'

function Requests() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function GetRequests() {
        return RequestsList.map(requests => {
            let newStatus;
            if (requests.status == true) {
                newStatus = "Finalizado"
            } else {
                newStatus = "Em andamento"
            }

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
                            <Nav.Item as="li"> {newStatus} </Nav.Item>
                        </Col>

                        <Col className="col-2" >
                            <Button variant="primary" onClick={handleShow} className="me-2 request-button">
                                <img className="arrow" src={cursor} />
                            </Button>
                        </Col>
                    </Nav>

                    <Container className="col-9">
                        <Modal className="request-modal" show={show} onHide={handleClose}>
                            {RequestsItems()}
                        </Modal>
                    </Container>

                </>
            )
        })
    }

    return (
        <>
            <Nav className="list-group flex-row card-caption-mvp py-2" defaultActiveKey="/home" as="ul">
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
    );
}

export default Requests