// REACT
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Cart.css'

// PÁGINAS/COMPONENTES
import DiscountCoupon from '../../components/micro/Cart/DiscountCoupon/DiscountCoupon'
import ProductListCart from '../../components/micro/Cart/CartItemsList/CartItems'
import Button from '../../components/micro/Button/Button'

function Cart(props) {

    return (
        <>
            <Container fluid className="cart p-0">
                <Col lg={3} xl={3} className="mx-4 my-5 cart-container cart-banner">
                </Col>

                <Container xs={12} sm={12} md={12} lg={8} xl={8} className="mx-4 my-5 pt-3 cart-container">
                    <ProductListCart />

                    <Container className="py-1 my-4 price">
                        <Col className="col-8 py-2 px-1 discount-coupon-cart">
                            <DiscountCoupon/>
                        </Col>

                        <Col className="col-3 p-2 price-cart">
                            <Row className="p-0">
                                <p className="card-caption-mvp"> Subtotal </p>
                                <Col className="col-2 checkout-price-title checkout-coupon"><p> Cupom </p></Col>
                                <Col className="col-9 checkout-price coupon-value"><p >R$ -100,00 </p></Col>
                                <Col className="col-2 checkout-price-title checkout-price-sum"><p> Total </p></Col>
                                <Col className="col-9 checkout-price checkout-price-sum"><p> R$900,00 </p></Col>
                            </Row>
                        </Col>
                    </Container>


                    <Container className="py-4 my-0 pb-5 cart-buttons">
                        <Button label="Continuar comprando" route="/home" class="btn-secundario-mvp"></Button>

                        <Button label="Finalizar compra" route="/home" class="btn-primario-mvp"></Button>
                    </Container>
                </Container>
            </Container>
        </>


    )
}

export default Cart