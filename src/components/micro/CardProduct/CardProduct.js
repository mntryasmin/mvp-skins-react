// REACT
import React, { Link } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

// ESTILO
import '../../../assets/css/Style.css'
import './CardProduct.css'
import favorite from '../../../assets/images/icones/icon-coracao-produto.png'
import addCart from '../../../assets/images/icones/icon-add-cart.png'
import product from '../../../assets/images/PRODUTOS/luva-abate.png'

// PÁGINAS/COMPONENTES
import Button from '../../micro/Button/Button'

function CardProduct(props) {

    return (
        <>
            <a xs={6} sm={4} md={3} lg={2} xl={2} href="/product/:id" className="p-0 my-3 card card-link">
                <Container className="py-2 px-0 card-hover">
                    <a href="/favorites" className="mb-2 mx-0"><img className="p-2 card-icon" src={favorite} alt="Favoritar produto" /></a>
                    <a href="/cart" className="mb-2 mx-0"><img className="p-2 card-icon" src={addCart} alt="Favoritar produto" /></a>
                    <Button label="Ver mais" class="col-10 mt-5 btn-primary-mvp" route="/products/1"></Button>
                </Container>

                <Container className="p-1 my-2 card-product">
                    <Container className="px-0 mx-0 card-image">
                        <img className="card-img-top" src={product} alt="Produto" />
                    </Container>

                    <hr className="p-0 mx-0 my-1 card-line" />

                    <Col className="px-1 card-body card-price-container">
                        <p className="mb-2 card-description">AK-47 | LINHAS VERMELHAS {props.description}</p>
                        <p className="my-0 card-price">de R$450,00 {props.price}</p>
                        <p className="my-0 card-price-final">por R$399,99 {props.priceDiscount}</p>
                    </Col>
                </Container>
            </a>
        </>
    )
}

export default CardProduct