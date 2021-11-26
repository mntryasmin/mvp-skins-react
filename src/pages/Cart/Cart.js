// REACT
import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Form, FormControl } from 'react-bootstrap'
import axios from 'axios'

// ESTILO
import './../../assets/css/Style.css'
import './Cart.css'
// PÁGINAS/COMPONENTES
import ProductListCart from '../../components/micro/Cart/CartItemsList/CartItemsList'
import Button from '../../components/micro/Button/Button'
import LoginModal from '../../components/micro/LoginModal/LoginModal'

function Cart(props) {
    const [price, setPrice] = useState(0.0)
    const [valueDiscount, setValueDiscount] = useState(0)
    const [validation, setValidation] = useState('')
    const [coupon, setCoupon] = useState('')

    let finalPrice = 0;

    function getTotalPrice(totalPrice) {
        finalPrice = (finalPrice + totalPrice);
        setPrice(finalPrice / 2);
    }

    function createOrder() {
        const cart = JSON.parse(localStorage.getItem('cart'))

        if (localStorage.getItem("Authorization") &&
            cart != null && cart.length != 0) {

            const client = JSON.parse(localStorage.getItem("client"))
            const order = {
                cliente: client,
                formaPagamento: {
                    id: 1
                },
                descontoProduto: valueDiscount,
                valorBruto: price
            }

            var orderString = JSON.stringify(order)
            localStorage.setItem("order", orderString)
            window.location.href = 'http://localhost:3000/checkout'
        }
    }

    const validePromotion = (value) => {
        if (price == 0) {
            setValidation('Insira itens no carrinho antes de aplicar um cupom')
            setValueDiscount(0)
        } else {
            axios.get(`http://localhost:8080/promotion/coupon-validate/` + value)
                .then(async (response) => {
                    const v = await response.data
                    if (v) {
                        setValidation('Cupom válido')
                        getPromotion()
                    } else {
                        setValidation('Cupom inválido')
                        setValueDiscount(0)
                    }
                });
        }

    }

    const getPromotion = () => {
        axios.get(`http://localhost:8080/promotion/coupon-discount/` + coupon)
            .then(async (response) => {
                const p = await response.data
                setValue(p)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    }

    const Submit = (event) => {
        event.preventDefault()
        validePromotion(coupon)
    }

    function setValue(promotion) {
        if (promotion) {
            if (promotion.valorDesconto != 0) {
                setValueDiscount(promotion.valorDesconto)
            } else {
                var calc = (price * (promotion.porcentagemDesconto / 100))
                setValueDiscount(calc)
            }
        } else {
            setValueDiscount(0)
        }
    }

    return (
        <>
            <Container fluid className="cart p-0 content-container">
                <Col lg={3} xl={3} className="mx-4 my-5 cart-container cart-banner">
                </Col>
                <Container xs={12} sm={12} md={12} lg={8} xl={8} className="mx-4 my-5 pt-3 cart-container">
                    <ProductListCart functionTotalPrice={getTotalPrice} />

                    <Container className="py-1 my-4 price">
                        <Col className="col-7 py-2 px-1 mt-2 discount-coupon-cart">
                            <Container className="discount-container px-0">
                                <Form className="py-2 discount-coupon">
                                    <p className="mx-3"> Cupom de desconto </p>

                                    <Container className="discount px-0">
                                        <FormControl
                                            type="text"
                                            name="coupon"
                                            className="discount-input mx-3 py-3"
                                            onChange={(event) => { setCoupon(event.target.value); }}
                                            placeholder="Digite o código"
                                            value={coupon}
                                        />
                                        <Button label='Aplicar' class="btn-secundary-mvp  mx-2" onclick={(event) => Submit(event)}></Button>
                                    </Container>
                                </Form>
                                <p className="response-coupon"> {validation}</p>
                            </Container>
                        </Col>

                        <Row className="col-5 p-0 mt-2 price-cart">
                            <Col md={4} className="cart-values my-2">
                                <p className="m-0"> Cupom </p>
                                <p className="m-0 mt-1"> R$ {(valueDiscount).toFixed(2).replace(".", ",")}</p>
                            </Col>
                            <Col md={4} className="cart-values my-2">
                                <p className="m-0"> Subtotal </p>
                                <p className="m-0 mt-1"> R$ {price.toFixed(2).replace(".", ",")} </p>
                            </Col>
                            <Col md={4} className=" my-2">
                                <p className="m-0"> Total </p>
                                <p className="m-0 mt-1"> R$ {(price - valueDiscount).toFixed(2).replace(".", ",")} </p>
                            </Col>

                        </Row>
                    </Container>
                    <Container className="py-4 my-0 pb-5 cart-buttons">
                        <Button label="Continuar comprando" route="/home" class="btn-secundary-mvp" navigation></Button>

                        {localStorage.getItem("Authorization") ?
                            <Button label="Finalizar compra"
                                class="btn-primary-mvp"
                                onclick={() => createOrder()}></Button> :
                            <LoginModal linkCart />
                        }
                    </Container>
                </Container>
            </Container>
        </>
    )
}
export default Cart