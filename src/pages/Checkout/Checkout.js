// REACT
import React from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Checkout.css'

// PÁGINAS/COMPONENTES
import Products from '../../components/micro/Checkout/CheckoutItems/CheckoutItems'
import PaymentCreditCard from '../../components/micro/Checkout/PaymentCreditCard/PaymentCreditCard'



function Checkout(props) {

    return (
        <>
            <Container fluid className="row px-2 py-5 mx-0 checkout">
                <h1 className="mb-3 card-title-mvp checkout-title"> Checkout </h1>

                <Col className="col-4 py-4 mx-1 checkout-containers">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Resumo do pedido </h1>
                    <Container>
                        <Row>
                            <Products />
                        </Row>

                        <Row>
                            <Col className="col-3 checkout-price-title"><p> Produtos </p></Col>
                            <Col className="col-9 checkout-price"><p> R$ 1.000,00</p></Col>
                            <Col className="col-3 checkout-price-title"><p> Desconto </p></Col>
                            <Col className="col-9 checkout-price"><p >R$ -100,00 </p></Col>
                            <Col className="col-3 checkout-price-title checkout-price-sum"><p> Total </p></Col>
                            <Col className="col-9 checkout-price checkout-price-sum"><p> R$900,00 </p></Col>
                        </Row>
                    </Container>
                </Col>


                <Col className="col-4 px-5 py-4 mx-1 checkout-containers">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Pagamento </h1>
                    <PaymentCreditCard/>
                </Col>


                <Col className="col-3 py-4 px-4 mx-1 checkout-term checkout-containers">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Termos de serviço </h1>
                    <p className="pt-3">Eu estou ciente de que a após a troca terei que aguardar por 7 (sete) dias para
                        realizar outra troca com a skin adquirida nessa transação.
                    </p>

                    <Form>
                        <Form.Group className="mb-3 checkout-checkbox" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Eu aceito os termos e condições." />
                        </Form.Group>
                    </Form>

                    <Button className="my-4">Finalizar a compra </Button>
                </Col>
            </Container>
        </>
    )
}

export default Checkout