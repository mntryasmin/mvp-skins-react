// REACT
import React from 'react'
import { Nav, Col, Container } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './CheckoutItems.css'

// PÁGINAS/COMPONENTES
import CheckoutItemsList from './CheckoutItemsList'
import imagem from '../../../../assets/images/PRODUTOS/luvas-de-especialista.png'

function CheckoutItems(props) {
    return CheckoutItemsList.map(items => {
        return (
            <Nav className="my-1 p-3 checkout-items" defaultActiveKey="/home" as="ul">
                <Col className="col-6 checkout-items-img" >
                    <Nav.Item as="li"> {items.imagem} </Nav.Item>
                </Col>

                <Col className="col-6" >
                    <Nav.Item as="li" className="py-1"> {items.descricao} </Nav.Item>
                    <Nav.Item as="li" className="py-1"> Quantidade: 1 </Nav.Item>
                    <Nav.Item as="li" className="py-1 checkout-items-price"> R$ {items.preco} </Nav.Item>
                </Col>
            </Nav>
        )
    })
}

export default CheckoutItems