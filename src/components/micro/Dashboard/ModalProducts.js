// REACT
import React, { Component } from 'react'
import axios from 'axios'
import { Nav, Col} from 'react-bootstrap'

// PÁGINAS/COMPONENTES
import Image from '../Images/Images'


export default class ModalProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.handleProducts(this.props.id);
    }

    handleProducts(id) {
        axios.get(`http://localhost:8080/itens-pedido/${id}`)
            .then((response) => {
                this.state({ products: response.data });
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            });
    }

    handleMapProducts() {
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

    render() {

        return (
            <>
                <Nav className="row list-group py-2 card-caption-mvp" defaultActiveKey="/home" as="ul">
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

                {this.handleMapProducts()}
            </>
        )
    }
}