// REACT
import React, { Component } from 'react'
import axios from 'axios'
import { Nav, Col, Button, Container, Modal } from 'react-bootstrap'
import Moment from 'react-moment';

// ESTILO
import '../../../../assets/css/Style.css'
import './OrderHistory.css'

// PÁGINAS/COMPONENTES
import cursor from '../../../../assets/images/icones/icon-cursor.png'
// import Button from '../../../Button/Button'
import Image from '../../../micro/Images/Images'
import ModalProducts from '../../../micro/Dashboard/ModalProducts';

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: [],
            products: [],
            show: false,
        };
        this.client = {
            codigoCliente: '',
            nomeCliente: '',
            emailCliente: '',
            numeroTelefone: '',
            tradeLink: '',
            genero: {
                codigoGenero: ''
            },
            dataNascimento: '',
            senhaCliente: ''
        };
    }

    componentDidMount() {
        // this.handleClient();
        // this.handleRequests();
    }

    handleClient() {
        this.client = JSON.parse(localStorage.getItem("client"));
    }

    handleRequests() {
        axios.get(`http://localhost:8080/pedidos/order-history/` + this.client.codigoCliente)
            .then((response) => {
                this.setState({ requests: response.data });
            })
            .catch((erro) => {
                console.log("Não foi possível buscar os pedidos do cliente: " + erro)
            }
            );
    }

    handleStatusRequests(statusRequest) {
        if (statusRequest == 0) {
            return "Em andamento";
        } else {
            return "Finalizado";
        }
    }

    handleShowRequests() {
        this.handleRequests();
        return this.state.requests.map(
            (request) =>
                <>
                    <Nav className="list-group flex-row request-style py-1" defaultActiveKey="/home" as="ul">
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
                            <Nav.Item as="li"> {this.handleStatusRequests(request.status)} </Nav.Item>
                        </Col>

                        <Col className="col-2" >
                            <Button variant="primary" className="me-2 request-button">
                                <img className="arrow" src={cursor} />
                            </Button>
                        </Col>

                        <Modal show={this.state.show} onHide={this.setState({ show: false })}>
                        </Modal>

                    </Nav>
                </>
        )
    }

    render() {
        return (
            <>
                < h1 className="mb-4 card-title-mvp" > Histórico de compras</h1 >
                <Container className="mx-0 pb-5">
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
                    {this.handleShowRequests()}
                </Container>
            </>
        )
    }
}