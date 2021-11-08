// REACT
import React from 'react'
import { Col, Container } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Cart.css'

// PÁGINAS/COMPONENTES
import DiscountCoupon from '../../components/micro/Cart/DiscountCoupon/DiscountCoupon'
import ProductListCart from '../../components/micro/Cart/ProductListCart/ProductListCart'
import Button from '@restart/ui/esm/Button'

function Cart(props) {

    return (
        <>
            <Container fluid className="cart p-0">
                <Col lg={3} xl={3} className="mx-4 my-5 cart-container cart-banner">
                    {/* <DiscountCoupon/> */}
                </Col>

                <Container xs={12} sm={12} md={12} lg={8} xl={8} className="mx-4 my-5 pt-3 cart-container">
                    <ProductListCart />

                    <Container className="py-3 price">
                        <Col className="col-9 py-2 discount-coupon-cart">
                            <DiscountCoupon />
                        </Col>

                        <Col className="col-3 price-cart">
                            <p className="my-0 card-caption-mvp">Total</p>
                            <p className="my-0">R$ 1992,00</p>
                        </Col>
                    </Container>


                    <Container className="py-4 pb-5 cart-buttons">
                        <Button>Continuar comprando</Button>
                        <Button>Finalizar compra</Button>
                    </Container>
                </Container>
            </Container>
        </>


    )
}

export default Cart