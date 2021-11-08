// REACT
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Checkout.css'

// PÁGINAS/COMPONENTES
import Products from '../../components/micro/Checkout/CheckoutItems/CheckoutItems'



function Checkout(props) {

    return (
        <>
            <Container fluid className="row px-0 py-4 mx-0 checkout">
                <h1 class="card-title-mvp checkout-title">PAGAMENTO</h1>

                <Col className="col-4">
                    <Container>
                        <Row>
                            <Products/>
                        </Row>

                        <Row>

                        </Row>
                    </Container>
                </Col>
                <Col className="col-4">

                </Col>
                <Col className="col-4">

                </Col>
            </Container>
        </>
    )
}

export default Checkout