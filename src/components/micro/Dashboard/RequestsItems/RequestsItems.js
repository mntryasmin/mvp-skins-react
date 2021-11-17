// REACT
import React, { useState, useEffect, Modal } from 'react'
import axios from 'axios'
import { Nav, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './RequestsItems.css'

// PÁGINAS/COMPONENTES
import Image from '../../Images/Images'
import Button from '../../Button/Button'

function RequestsItems(props) {
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`http://localhost:8080/itens-pedido/${props.idRequest}`)
            .then((response) => {
                setProducts(response.data);
                handleShow();
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            });
    }, []
    )

    // LISTAR OS ITENS DE UM PEDIDO
    function getRequestsItems() {
        return products.map(
            (product, j) =>
                <Nav key={j} className="row list-group request-items-style py-1" defaultActiveKey="/home" as="ul">
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
        )
    }

    return (
        <>
            <Modal className="col-9 request-modal" show={show} onHide={handleClose}>
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
                {getRequestsItems()}
            </Modal>

        </>
    )
}

export default RequestsItems;