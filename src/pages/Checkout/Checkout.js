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
import AdressPayment from '../../components/micro/Checkout/AdressPayment/AdressPayment'
import Button from '../../components/micro/Button/Button'
import Ticket from '../../components/micro/Checkout/Ticket/Ticket'
import Pix from '../../components/micro/Checkout/Pix/Pix'


function Checkout(props) {


    const [termAcepted, setTermAcepted] = useState(false)
    const [validationOfTerms, setValidationOfTerms] = useState('')
    const [classTerm, setClassTerm] = useState('')
    const [paymentForm, setPaymentForm] = useState(1)
    const [pixKey, setPixKey] = useState('')

    const [card, setCard] = useState({})
    const [paymentTicket, setPaymentTicket] = useState({})
    const [paymentPix, setPaymentPix] = useState(false)


    const [order, setOrder] = useState({});
    const [orderItems, setOrderItems] = useState([])
    useEffect(() => {
        setOrderItems(JSON.parse(localStorage.getItem("cart")))
        setPixKey(Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''))
    }, [])

    useEffect(() => {
        setOrder(JSON.parse(localStorage.getItem("order")))
    }, [])


    function postOrder() {

        if (termAcepted) {
            if (validePayment()) {
                const order = JSON.parse(localStorage.getItem("order"))

                axios.post(`http://localhost:8080/pedidos`, order)
                    .then((response) => {

                        var orderString = JSON.stringify(response.data)
                        localStorage.setItem("order", orderString)

                        localStorage.removeItem("cart")

                        sendOrderItems(orderItems, response.data)

                        window.location.replace('http://localhost:3000/success')

                    })
                    .catch((error) => {
                        console.log("Ocorreu um erro :" + error)
                    })
            } else {
                setValidationOfTerms('Há algo de errado com o pagamento, verifique se está tudo preenchido corretamente')
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

    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }

    const validateName = () => {
        if (card.name.length < 3) {
            return false
        } else {
            return true
        }
    }

    const validateCard = () => {
        if (card.cardNumber.length < 19) {
            return false
        } else if (card.flag == 'INVÁLIDO' || card.flag == '') {
            return false
        } else {
            return true
        }
    }

    const validateDate = () => {
        const mounth = card.dtCard.substring(0, 2)
        const year = card.dtCard.substring(3)
        var date = new Date()
        var currentMounth = String(date.getMonth() + 1).padStart(2, '0');
        var currentYear = date.getFullYear();

        if (card.dtCard.length < 7) {
            return false
        } else if (year < currentYear) {
            return false
        } else if (mounth < currentMounth) {
            if (year > currentYear) {
                return true
            } else {
                return false
            }
        } else if (mounth > 12 || mounth < 1) {
            return false
        } else if (year > currentYear + 5) {
            return false
        } else {
            return true
        }
    }

    const validateCvv = () => {
        if (card.flag == 'AMEX'){
            if (card.cvv.length != 4){
                return false
            }else {
                return true
            }
        }else if (card.cvv.length != 3) {
            return false
        } else {
            return true
        }
    }

    const validateCpf = () => {
        if (card.cpf.length < 14) {
            return false
        } else {
            return true
        }
    }

    const validateInstallments = () => {
        if (card.installments == 0) {
            return false
        } else if (card.installments != 0) {
            return true
        }
    }

    const ValideCard = (card) => {

        if (!isEmpty(card)) {
            if (!validateName()) {
                return false
            } else if (!validateCard()) {
                return false
            } else if (!validateDate()) {
                return false
            } else if (!validateCvv()) {
                return false
            } else if (!validateCpf()) {
                return false
            } else if (!validateInstallments()) {
                return false
            } else {
                return true
            }
        } else {
            return false
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
        })
    }

    const ChangePaymentForm = (value) => {
        setValidationOfTerms('')
        setClassTerm('')
        setPaymentForm(value)
    }

    const ShowPaymentForm = () => {
        if (paymentForm == 1) {
            return (
                <PaymentCreditCard func={GetCard} vlTotal={order.valorBruto} />
            )
        } else if (paymentForm == 2) {
            return (
                <Ticket func={getTicket} />
            )
        } else {
            return (
                <>
                    <Pix pixKey={pixKey} func={getPix} />
                </>
            )
        }
    }

    const validePayment = () => {
        if (paymentForm == 1) {
            if (ValideCard(card)) {
                return true
            }
        } else if (paymentForm == 2) {
            if (ValideTicket(paymentTicket)) {
                return true
            }
        } else if (paymentForm == 3) {
            if (paymentPix) {
                return true
            }
        } else {
            return false
        }
    }

    const getPix = (pix) => {
        setPaymentPix(pix)
        console.log(paymentPix)
    }

    const getTicket = (ticket) => {
        setPaymentTicket({
            name: ticket.name,
            cpf: ticket.cpf
        })
    }

    const ValideTicket = (ticket) => {
        if (!isEmpty(ticket)) {
            if (ticket.name.length < 3) {
                return false
            } else if (ticket.cpf.length < 14) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }

    const showPaymentSelect = () => {
        if (paymentPix) {
            return (
                <Form.Select disabled aria-label="Forma de pagamento"
                    onChange={(event) => ChangePaymentForm(event.target.value)}>
                    <option value="1">Cartão de crédito - Até 3x sem juros</option>
                    <option value="2">Boleto - À vista</option>
                    <option value="3">PIX - À vista</option>
                </Form.Select>
            )

        } else {
            return (
                <Form.Select aria-label="Forma de pagamento"
                    onChange={(event) => ChangePaymentForm(event.target.value)}>
                    <option value="1">Cartão de crédito - Até 3x sem juros</option>
                    <option value="2">Boleto - À vista</option>
                    <option value="3">PIX - À vista</option>
                </Form.Select>
            )
        }
    }

    const grossValue = (JSON.parse(localStorage.getItem("order")).valorBruto)
    const discountValue = JSON.parse(localStorage.getItem("order")).descontoProduto
    const totalValue = (grossValue - discountValue)

    return (
        document.title = `SKINS CS:GO | Pagamento`,

        <>
            <Container fluid className="row px-2 py-5 mx-0 checkout content-container">
                <h1 className="mb-3 card-title-mvp checkout-title"> Pagamento </h1>

                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="py-4 px-1 mx-1 checkout-containers checkout-request checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Resumo do pedido </h1>
                    <Container >

                        <Row className="px-2 checkout-list-items-scroll">
                            <Products productList={orderItems} />
                        </Row>

                        <Container fluid className=' align-items-end container-price'>
                            <Row className="p-2 mt-3 checkout-price-container">
                                <Row className="my-1 py-1 checkout-price ">
                                    <p className="checkout-price-title"> Produtos </p>
                                    <p> R$ {(grossValue).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })} </p>
                                </Row>

                                <Row className="my-1 py-1 checkout-price checkout-line">
                                    <p className="checkout-price-title"> Desconto </p>
                                    <p> R$ {(discountValue).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })} </p>
                                </Row>

                                <Row className="my-1 py-1  checkout-price checkout-line">
                                    <p className="checkout-price-title"> Total </p>
                                    <p> R$ {(totalValue).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })} </p>
                                </Row>
                            </Row>
                        </Container>
                    </Container>
                </Col>


                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="px-4 py-4 checkout-containers checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Pagamento </h1>
                    <Form.Label className="mt-3"> Forma de pagamento </Form.Label>
                    {showPaymentSelect()}
                    {ShowPaymentForm()}
                </Col>


                
                <Col xs={12} sm={12} md={12} lg={3} xl={3} className="py-4 px-3 mx-1 checkout-containers">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Endereço de cobrança </h1>
                    <AdressPayment/>
                </Col>


                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="py-4 px-4 mx-1 my-4 checkout-term checkout-containers checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Termo de serviços </h1>
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

                    <Button label="Finalizar a compra" route="/success" class="mt-3 btn-mvp btn-mvp-orange-solid" onclick={() => postOrder()}></Button>
                </Col>
            </Container>
        </>
    )
}

export default Checkout