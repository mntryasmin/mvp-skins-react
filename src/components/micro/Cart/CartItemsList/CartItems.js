// REACT
import React from 'react'
import { Nav, Col, Container } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './CartItems.css'

// PÁGINAS/COMPONENTES
import CartItemsList from './CartItemsList'
import trash from '../../../../assets/images/icones/delete.png'

function ProductListCart(props) {

    function getCartItemsList() {
        return CartItemsList.map(items => {
            return (
                <Nav className="py-2 px-0 product-list-cart" defaultActiveKey="/home" as="ul">
                    <Col className="col-3" >
                        <Nav.Item as="li"> {items.imagem} </Nav.Item>
                    </Col>

                    <Col className="col-4" >
                        <Nav.Item as="li"> {items.descricao} </Nav.Item>
                    </Col>

                    <Col className="col-3" >
                        <Nav.Item as="li"> R$ {items.preco} </Nav.Item>
                    </Col>

                    <Col className="col-2" >
                        <Nav.Item as="li">
                            <Nav.Link>
                                <img className="arrow" src={trash} />
                            </Nav.Link>
                        </Nav.Item>
                    </Col>
                </Nav>
            )
        })
    }

    return (
        <>
            <h1 className="card-title-mvp pt-4">Meus produtos</h1>
            <Nav className="pt-3 pb-2 px-0 product-list-cart card-caption-mvp" defaultActiveKey="/home" as="ul">
                <Col className="col-3">
                    <Nav.Item as="li"> Produto </Nav.Item>
                </Col>

                <Col className="col-4">
                    <Nav.Item as="li"> Descrição </Nav.Item>
                </Col>

                <Col className="col-3">
                    <Nav.Item as="li"> Preço </Nav.Item>
                </Col>

                <Col className="col-2" >
                    <Nav.Item as="li"> Remover </Nav.Item>
                </Col>
            </Nav>

            {getCartItemsList()}
        </>
    )
}

export default ProductListCart