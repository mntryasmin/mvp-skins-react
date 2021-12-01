import React, { useState } from 'react'
import { Row, Form, Container } from 'react-bootstrap'
import './Ticket.css'

export default function Ticket(props) {
    const client = JSON.parse(localStorage.getItem("client"))
    const [name, setName] = useState(client.nomeCliente)
    const [cpf, setCpf] = useState('')

    const ticket = {name : name, cpf : cpf}

    const maskOnlyLetters = (value) => {
        return value.replace(/[0-9!@#¨$%^&*)}'",|?;{(+=._-]+/g, "");
    };

    const maskCPF = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    };


    return (
        <>
            <Form className="payment-form mt-3">
                <Row>
                    <Form.Label className="mt-3"> Nome completo </Form.Label>
                    <Form.Control className="box-payment" type="text" name="name" value={name}
                        onChange={(event) => {
                            setName(maskOnlyLetters(event.target.value));
                            props.func(ticket)
                        }}
                        placeholder="Digite seu nome" />
                </Row>

                <Row>
                    <Form.Label className="mt-3"> CPF </Form.Label>
                    <Form.Control type="text" name="cpf" placeholder="Digite o CPF" value={cpf}
                        onChange={(event) => {
                            setCpf(maskCPF(event.target.value));
                            props.func(ticket)
                        }} />
                </Row>
            </Form>

            <Row className='d-flex ticket-message'>
                Após preencher os dados e clicar em FINALIZAR COMPRA, o boleto será gerado e enviado para você por e-mail.
            </Row>

        </>
    )
}