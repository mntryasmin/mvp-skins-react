// REACT
import React, { Link } from 'react'
import { Container, Col } from 'react-bootstrap'

// ESTILO
import '../../../assets/css/Style.css'
import './CardProduct.css'
import favorite from '../../../assets/images/icones/icon-coracao-produto.png'
import product from '../../../assets/images/PRODUTOS/luva-abate.png'

// PÁGINAS/COMPONENTES

function CardProduct(props) {

    return (
        <>
            <Container className="py-2 px-0 col-2 mx-0 card card-product">
                <Col className="p-1 my-0 card-body card-image">
                    <img className="card-img-top" src={product} alt="Produto" />
                    {/* <img className="card-favorite" src={favorite} alt="Favoritar produto"/> */}
                </Col>

                <hr className="p-0 mx-0 my-2 card-line" />

                <Col className="py-1 px-1 card-body card-price-container">
                    <p className="mb-2 card-description">AK-47 | LINHAS VERMELHAS {props.description}</p>
                    <p className="my-0 card-price">de R$450,00 {props.price}</p>
                    <p className="my-0 card-price-final">por R$399,99 {props.priceDiscount}</p>
                    {/* <Button type="button" className="col-12 btn btn-primary">Comprar</Button> */}
                </Col>
            </Container>
        </>
    )
}

export default CardProduct