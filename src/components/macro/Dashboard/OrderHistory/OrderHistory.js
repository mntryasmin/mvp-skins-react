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

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            requests: [],
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

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        this.handleClient();
        this.handleRequests();

    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleClient() {
        this.client = JSON.parse(localStorage.getItem("client"));
        console.log(this.client);
    }

    handleRequests() {
        axios.get(`http://localhost:8080/pedidos/order-history/${this.client.codigoCliente}`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
            .then((response) => {
                this.setState({ requests: response.data });
            })
            .catch((erro) => {
                console.log("Não foi possível buscar os pedidos do cliente: " + erro)
            }
            );
    }

    handleProducts(id) {
        axios.get(`http://localhost:8080/itens-pedido/${id}`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            });
    }


    handleStatusRequests(statusRequest) {
        if (statusRequest == 0) {
            return "Em andamento";
        } else {
            return "Finalizado";
        }
    }

    handleMapProducts(id) {

        console.log(this.state.products);

        return this.state.products.map(
            (product) =>
                <>
                    <Nav className="row list-group request-items-style py-1" defaultActiveKey="/home" as="ul">
                        <Col className="col-4" >
                            <Nav.Item as="li"><Image class="request-item-image" url={product.id.produto.urlImagem} /></Nav.Item>
                        </Col>

                        <Col className="col-5" >
                            <Nav.Item as="li"> {product.id.produto.descricao} </Nav.Item>
                        </Col>

                        <Col className="col-3" >
                            <Nav.Item as="li"> R$ {(product.valorLiquido.toFixed(2)).toString().replace(".", ",")} </Nav.Item>
                        </Col>
                    </Nav>
                </>
        )
    }

    handleShowRequests() {
        // this.handleRequests();
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
                            <Button variant="primary" onClick={() => { this.showModal(); this.handleProducts(request.id)}} className="me-2 request-button">
                                <img className="arrow" src={cursor} />
                            </Button>
                        </Col>
                    </Nav>
                    <Modal show={this.state.show} onClick={this.hideModal}>
                        <Nav className="list-group flex-row request-style py-1" defaultActiveKey="/home" as="ul">

                            <Col className="col-4" >
                                <Nav.Item as="li"> Produto </Nav.Item>
                            </Col>

                            <Col className="col-5">
                                <Nav.Item as="li"> Descrição </Nav.Item>
                            </Col>

                            <Col className="col-3 requests-resp">
                                <Nav.Item as="li"> Preço </Nav.Item>
                            </Col>
                        </Nav>

                        {this.handleMapProducts(request.id)}
                    </Modal>
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