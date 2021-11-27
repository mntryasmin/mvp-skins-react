// REACT
import React, { useState, useEffect, Modal } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Checkout.css'

// PÁGINAS/COMPONENTES
import Products from '../../components/micro/Checkout/CheckoutItems/CheckoutItems'
import PaymentCreditCard from '../../components/micro/Checkout/PaymentCreditCard/PaymentCreditCard'
import Button from '../../components/micro/Button/Button'


function Checkout(props) {

    const [card, setCard] = useState({})
    const [termAcepted, setTermAcepted] = useState(false)
    const [validationOfTerms, setValidationOfTerms] = useState('')
    const [classTerm, setClassTerm] = useState('')


    const [order, setOrder] = useState({});
    const [orderItems, setOrderItems] = useState([])
    useEffect(() => {
        setOrderItems(JSON.parse(localStorage.getItem("cart")))
    }, [])

    useEffect(() => {
        setOrder(JSON.parse(localStorage.getItem("order")))
    }, [])


    function postOrder() {

        if (termAcepted) {
            if (ValideCard(card)) {
                const order = JSON.parse(localStorage.getItem("order"))

                axios.post(`http://localhost:8080/pedidos`, order)
                    .then((response) => {

                        var orderString = JSON.stringify(response.data)
                        localStorage.setItem("order", orderString)

                        localStorage.removeItem("cart")

                        sendOrderItems(orderItems, response.data)

                        window.location.replace('http://localhost:3000/success')
                        setValidationOfTerms('CVV inválido, veja se a digitação está correta')

                    })
                    .catch((error) => {
                        console.log("Ocorreu um erro :" + error)
                    })
            } else {
                setValidationOfTerms('Há algo de errado com cartão, cheque se está tudo preenchido corretamente!')
                setClassTerm('validation-term p-2')
            }
        } else {
            setValidationOfTerms('É preciso aceitar os termos para finalizar a compra')
            setClassTerm('validation-term p-2')
        }

    }

    function sendOrderItems(orderItems, order) {
        orderItems.forEach((o) => {
            var orderItem = {
                id: {
                    produto: o,
                    pedido: {
                        id: order.id
                    }
                }
            }
            axios.post('http://localhost:8080/itens-pedido', orderItem)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log("Ocorreu um erro :" + error)
                })
        })
    }



    const ValideCard = (card) => {
        if (card.validation != ''){
            return false
        }else{
            return true
        }
    }

    const GetCard = (cardReceiver) => {
        setCard({
            name: cardReceiver.name,
            cardNumber: cardReceiver.cardNumber,
            cvv: cardReceiver.cvv,
            cpf: cardReceiver.cpf,
            installments: cardReceiver.installments,
            dtCard: cardReceiver.dtCard,
            flag: cardReceiver.flag,
            validation : cardReceiver.validation
        })

    }

    const grossValue = (JSON.parse(localStorage.getItem("order")).valorBruto)
    const discountValue = JSON.parse(localStorage.getItem("order")).descontoProduto
    const totalValue = (grossValue - discountValue)

    return (
        <>
            <Container fluid className="row px-2 py-5 mx-0 checkout content-container">
                <h1 className="mb-3 card-title-mvp checkout-title"> Checkout </h1>

                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="py-4 mx-1 checkout-containers checkout-request checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Resumo do pedido </h1>
                    <Container >

                        <Row className="px-2 checkout-list-items-scroll">
                            <Products productList={orderItems} />
                        </Row>

                        <Container fluid className=' align-items-end container-price'>
                            <Row className="p-2 mt-3 checkout-price-container">
                                <Row className="my-1 py-1 checkout-price ">
                                    <p className="checkout-price-title"> Produtos </p>
                                    <p> R$ {grossValue}</p>
                                </Row>

                                <Row className="my-1 py-1 checkout-price checkout-line">
                                    <p className="checkout-price-title"> Desconto </p>
                                    <p> R$ {discountValue}</p>
                                </Row>

                                <Row className="my-1 py-1  checkout-price checkout-line">
                                    <p className="checkout-price-title"> Total </p>
                                    <p> R$ {totalValue}</p>
                                </Row>
                            </Row>
                        </Container>
                    </Container>
                </Col>


                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="px-5 py-4 mx-1 checkout-containers checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Pagamento </h1>
                    <PaymentCreditCard func={GetCard} vlTotal={order.valorBruto} />
                </Col>


                <Col xs={12} sm={12} md={12} lg={3} xl={3} className="py-4 px-4 mx-1 checkout-term checkout-containers checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Termos de serviço </h1>
                    <p className="pt-3">Eu estou ciente de que a após o recebimento da skin terei que aguardar por 7 (sete) dias para
                        realizar outra troca com a skin adquirida nesta transação. Confirmo também que estou fornecendo, através do meu
                        perfil na MVP Skins, um trade link válido e atualizado para o recebimento da skin.
                    </p>

                    <Form>
                        <Form.Group className="mb-3 checkout-checkbox" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Eu aceito os termos e condições."
                                value={termAcepted} onClick={() => {
                                    if (termAcepted) {
                                        setTermAcepted(false)
                                    } else {
                                        setTermAcepted(true)
                                        setValidationOfTerms('')
                                        setClassTerm('')
                                    }

                                }} />
                        </Form.Group>
                    </Form>
                    <div className={classTerm}>
                        {validationOfTerms}
                    </div>

                    <Button label="Finalizar a compra" route="/success" class="btn-mvp btn-mvp-orange-solid" onclick={() => postOrder()}></Button>
                </Col>
            </Container>
        </>
    )
}

export default Checkout