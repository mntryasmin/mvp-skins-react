// REACT
import React from 'react'
import { Row, Form, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './PaymentCreditCard.css'

// PÁGINAS/COMPONENTES


function PaymentCreditCard(props) {
    return (
        <Form className="payment-form p-0 m-0">
            <Row>
                <Form.Label className="mt-3"> Nome do titular </Form.Label>
                <Form.Control type="text" name="name" value="" />
            </Row>

            <Row>
                <Form.Label className="mt-3"> Número do cartão </Form.Label>
                <Form.Control type="text" name="number" value="" />
            </Row>

            <Row className="px-0 payment-span">
                <Col className="mx-0 px-0 col-7">
                    <Form.Label className="px-2 mt-3"> Validade(MM/AA) </Form.Label>
                    <Form.Control type="date" name="validade" value="" />
                </Col>

                <Col className="col-4">
                    <Form.Label className="mt-3"> CVV </Form.Label>
                    <Form.Control type="text" name="cvv" value="" />
                </Col>
            </Row>

            <Row>
                <Form.Label className="mt-3"> CPF do titular </Form.Label>
                <Form.Control type="text" name="cpf" value="" />
            </Row>

            <Row>
                <Form.Label className="mt-3"> Parcelas </Form.Label>
                <Form.Select aria-label="parcelas">
                    <option>Selecione uma opção</option>
                    <option value="1">1 x de R$ XX,XX sem juros</option>
                    <option value="2">2 x de R$ XX,XX com juros</option>
                    <option value="3">3 x de R$ XX,XX com juros</option>
                </Form.Select>  
            </Row>
        </Form>
    )
}

export default PaymentCreditCard