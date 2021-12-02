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
    const [styleValidation, setStyleValidation] = useState('')
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
                    id: 0
                },
                descontoProduto: valueDiscount,
                valorBruto: price,
                parcelas: 0
            }

            var orderString = JSON.stringify(order)
            localStorage.setItem("order", orderString)
            window.location.href = 'http://localhost:3000/checkout'
        }
    }

    const validePromotion = (value) => {
        if (price == 0) {
            setStyleValidation('')
            setValidation('Insira itens no carrinho antes de aplicar um cupom')
            setValueDiscount(0)
        } else {
            axios.get(`http://localhost:8080/promotion/coupon-validate/` + value)
                .then(async (response) => {
                    const v = await response.data
                    if (v) {
                        setStyleValidation('cupomValido')
                        setValidation('Cupom válido')
                        getPromotion()
                    } else {
                        setStyleValidation('cupomInvalido')
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
        document.title = 'SKINS CS:GO | Carrinho ',
        <>
            <Container fluid className="cart p-0 content-container d-flex justify-content-center">
                <Col lg={2} className="mx-4 my-5 cart-banner cart-container">
                </Col>
                <Col xs={11} lg={9} className="mx-4 my-5 pt-3  cart-container">
                    <ProductListCart functionTotalPrice={getTotalPrice} />

                    <Container className="my-4 price">
                        <Col className="col-6 p-2 discount-coupon-cart">
                            <p className="p-0 px-3 m-0"> Cupom de desconto </p>

                            <Form className="my-3 discount-coupon">
                                <FormControl
                                    type="text"
                                    name="coupon"
                                    className="discount-input mx-2"
                                    onChange={(event) => { setCoupon(event.target.value); }}
                                    placeholder="Digite o código"
                                    value={coupon}
                                />
                                <Button label='Aplicar' class="mx-2 btn-mvp btn-mvp-orange-clean" onclick={(event) => Submit(event)}></Button>
                            </Form>

                            <p className={styleValidation}>{validation}</p>
                        </Col>

                        <Col className="col-5 p-2 price-cart">
                            <Col md={6} className="cart-values-title">
                                <p className="my-2"> Subtotal </p>
                                <p className="my-2"> Cupom </p>
                                <p className="my-2"> Total </p>
                            </Col>
                            <Col md={6} className="cart-values-prices">
                                <p className="my-2"> R$ {(price).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })} </p>
                                <p className="my-2"> R$ {(valueDiscount).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })} </p>
                                <p className="my-2"> R$ {(price - valueDiscount).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })} </p>
                            </Col>

                        </Col>
                    </Container>
                    <Row className="p-4 my-0 pb-5 cart-buttons">
                        <Button label="Continuar comprando" onclick={() => window.history.back()} class="btn-mvp btn-mvp-orange-solid"></Button>

                        {localStorage.getItem("Authorization") ?
                            <Button label="Finalizar compra"
                                class="btn-mvp btn-mvp-orange-solid"
                                onclick={() => createOrder()}></Button> :
                            <LoginModal linkCart />
                        }
                    </Row>
                </Col>
            </Container>
        </>
    )
}
export default Cart