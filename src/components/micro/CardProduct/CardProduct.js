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

function CardProduct(props) {

    return (
        <>
            <Container className="col-2 p-0 mx-0 card-container">
                <a href="" className="p-0 mx-0 card card-link">
                    <Container className="p-1 my-0 card-hover">
                        <Container className="px-1 m-0 card-icons">
                            <a href=""><img className="card-icon" src={favorite} alt="Favoritar produto" /></a>
                            <a href=""><img className="card-icon" src={addCart} alt="Favoritar produto" /></a>
                        </Container>
                    </Container>

                    <Container className="p-1 my-2 card-product">
                        <Container className="card-image">
                            <img className="card-img-top" src={product} alt="Produto" />
                        </Container>

                        <hr className="p-0 mx-0 my-2 card-line" />

                        <Col className="py-1 px-1 card-body card-price-container">
                            <p className="mb-2 card-description">AK-47 | LINHAS VERMELHAS {props.description}</p>
                            <p className="my-0 card-price">de R$450,00 {props.price}</p>
                            <p className="my-0 card-price-final">por R$399,99 {props.priceDiscount}</p>
                            {/* <Button type="button" className="col-12 btn btn-primary">Comprar</Button> */}
                        </Col>
                    </Container>
                </a>
            </Container>
        </>
    )
}

export default CardProduct