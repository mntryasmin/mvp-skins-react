// REACT
import React from 'react'
import { Nav, Col, Container } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './RequestsItems.css'

// PÁGINAS/COMPONENTES
import RequestsItemsList from './RequestsItemsList'
import imagem from '../../../../assets/images/PRODUTOS/luvas-de-especialista.png'

function RequestsItems(props) {

    function getRequestsItems() {
        return RequestsItemsList.map(items => {
            return (
                <Nav className="row list-group request-items-style py-1" defaultActiveKey="/home" as="ul">
                    <Col className="col-4" >
                        <Nav.Item as="li"> {items.imagem} </Nav.Item>
                    </Col>

                    <Col className="col-5" >
                        <Nav.Item as="li"> {items.descricao} </Nav.Item>
                    </Col>

                    <Col className="col-3" >
                        <Nav.Item as="li"> R$ {items.preco} </Nav.Item>
                    </Col>
                </Nav>
            )
        })
    }

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

            {getRequestsItems()}
        </>
    )
}

export default RequestsItems