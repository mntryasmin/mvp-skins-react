// REACT
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Nav, Col, Button, Container, Modal } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './Requests.css'

// PÁGINAS/COMPONENTES
import RequestsItems from './../RequestsItems/RequestsItems'
import cursor from '../../../../assets/images/icones/icon-cursor.png'
import Moment from 'react-moment';
import { render } from 'react-dom'

function Requests(props) {
    const [requests, setRequests] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const client = JSON.parse(localStorage.getItem("client"))

    useEffect(() => {

        axios.get(`http://localhost:8080/pedidos/order-history/` + client.codigoCliente)
            .then(async (response) => {
                setRequests( response.data);
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            });
    }, []
    )

    function Status(statusRequest) {
        if (statusRequest == 0) {
            return "Em andamento";
        } else {
            return "Finalizado";
        }
    }

    // LISTAR OS PEDIDOS DE UM CLIENTE
    function GetRequests() {
        return requests.map(
            (request, i) =>
                <>
                    <Nav key={i} className="list-group flex-row request-style py-1" defaultActiveKey="/home" as="ul">
                        <Col className="col-2" >
                            <Nav.Item as="li"> {request.id} </Nav.Item>
                        </Col>

                        <Col className="col-2">
                            <Nav.Item as="li">
                                <Moment format="DD/MM/YYYY">
                                    {request.dataRegistro}
                                </Moment>
                            </Nav.Item>
                        </Col>

                        <Col className="col-2 requests-resp" >
                            <Nav.Item as="li"> R$ {(request.valorLiquido.toFixed(2)).toString().replace(".", ",")} </Nav.Item>
                        </Col>

                        <Col className="col-2 requests-resp" >
                            <Nav.Item as="li"> {Status(request.status)} </Nav.Item>
                        </Col>

                        <Col className="col-2" >
                            <Button variant="primary" onClick={handleShow} className="me-2 request-button">
                                <img className="arrow" src={cursor} />
                            </Button>
                        </Col>
                        <Modal className="col-9 request-modal" show={show} onHide={handleClose}>
                            <RequestsItems idRequest={1} />
                        </Modal>
                    </Nav>
                </>
        )
    }

    // PEDIDOS - TÍTULO
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
    )
}

export default Requests