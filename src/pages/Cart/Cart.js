// REACT
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Cart.css'

// PÁGINAS/COMPONENTES
import DiscountCoupon from '../../components/micro/Cart/DiscountCoupon/DiscountCoupon'
import ProductListCart from '../../components/micro/Cart/CartItemsList/CartItemsList'
import Button from '../../components/micro/Button/Button'
import axios from 'axios'

function Cart(props) {
    const [price, setPrice] = useState(0.0)

    let finalPrice = 0;
    function getTotalPrice(totalPrice){
        finalPrice = finalPrice+totalPrice;
        //Está duplicando o valor total por algum motivo desconhecido
        setPrice(finalPrice);
    }
    console.log(price)

    function createOrder(){
        const client = JSON.parse(localStorage.getItem("client"))
        const order = {
            cliente : client,
            formaPagamento : {
                id : 1
            },
            descontoProduto : 0.0,
            valorBruto : price/2
        }

        var orderString = JSON.stringify(order)
        localStorage.setItem("order", orderString)
        window.location.href='http://localhost:3000/checkout'
    }
    

    return (
        <>
            <Container fluid className="cart p-0 content-container">
                <Col lg={3} xl={3} className="mx-4 my-5 cart-container cart-banner">
                </Col>

                <Container xs={12} sm={12} md={12} lg={8} xl={8} className="mx-4 my-5 pt-3 cart-container">
                    <ProductListCart functionTotalPrice={getTotalPrice}/>

                    <Container className="py-1 my-4 price">
                        <Col className="col-7 py-2 px-1 mt-2 discount-coupon-cart">
                            <DiscountCoupon />
                        </Col>

                        <Row className="col-5 p-0 mt-2 price-cart">
                            <Col className="cart-values">
                                <p className="m-0"> Cupom </p>
                                <p className="m-0 mt-1">R$  </p>
                            </Col>
                            <Col className="cart-values">
                                <p className="m-0"> Subtotal </p>
                                <p className="m-0 mt-1"> R$ {(price/2).toFixed(2)} </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="py-4 my-0 pb-5 cart-buttons">
                        <Button label="Continuar comprando" route="/home" class="btn-secundary-mvp" navigation></Button>

                        <Button label="Finalizar compra"
                        class="btn-primary-mvp" 
                        onclick={()=>createOrder()}></Button>
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default Cart