// REACT
import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './PaymentCreditCard.css'

// PÁGINAS/COMPONENTES


function PaymentCreditCard(props) {

    const [validation, setValidation] = useState(props.val)

    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [cpf, setCpf] = useState('')
    const [installments, setInstallments] = useState('')
    const [dtCard, setDtCard] = useState('')
    const [flag, setFlag] = useState('')
   
    
    
    const totalValue = props.vlTotal
    
    const card = {name : name,
        cardNumber : cardNumber,
        cvv : cvv,
        cpf : cpf,
        installments : installments,
        dtCard : dtCard,
        flag:flag,

    
      
    }


    const maskOnlyLetters = (value) => {
        return value.replace(/[0-9!@#¨$%^&*)}'",|?;{(+=._-]+/g, "");
    };

    const maskCard = (value) => {
        return value.replace(/\D/g, "")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})(\d{0})(\d)/, "$1");
    };

    const maskDate = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1");
    };

    const maskCPF = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    };

    const maskCVV = (value) => {
        return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d{0})(\d)/, "$1")
    };
    
    const maskFlag = (value) =>{
        return value
        .replace(/^4[0-9]{12}(?:[0-9]{3})/)
        .replace(/^5[1-5][0-9]{14}/)
    };
    
    
    
  
    
   

    return (
        <Form className="payment-form p-0 m-0">
            <div className='validation-card'>
                {validation}
            </div>

            <Row>
                <Form.Label className="mt-3"> Nome do titular </Form.Label>
                <Form.Control className="box-payment" type="text" name="name" value={name} onChange={(event) => {
                    setName(maskOnlyLetters(event.target.value));
                    props.func(card);
                }}
                    placeholder="Digite seu nome" />
            </Row>

            <Row>
                <Form.Label className="mt-3"> Número do cartão </Form.Label>
                <Form.Control type="text" name="number" placeholder="Digite o número do cartão" value={cardNumber} onChange={(event) => { setCardNumber(maskCard(event.target.value)); props.func(card) }} />
            </Row>

            <Row className="px-0 payment-span">
                <Col className="mx-0 px-0 col-7">
                    <Form.Label className="px-2 mt-3"> Validade(MM/AAAA) </Form.Label>
                    <Form.Control type="text" name="validade" placeholder='MM/AAAA' value={dtCard} onChange={(event) => {setDtCard(maskDate(event.target.value)); props.func(card)} }/>
                </Col>

                <Col className="col-4">
                    <Form.Label className="mt-3"> CVV </Form.Label>
                    <Form.Control type="text" name="cvv" placeholder="Digite o CVV" value={cvv} onChange={(event) => { setCvv(maskCVV(event.target.value)); props.func(card) }} />
                </Col>
            </Row>

            <Row>
                <Form.Label className="mt-3"> CPF do titular </Form.Label>
                <Form.Control type="text" name="cpf" placeholder="Digite o CPF" value={cpf} onChange={(event) => { setCpf(maskCPF(event.target.value)); props.func(card) }} />
            </Row>

            <Row className="px-0 payment-form">
                <Form.Label className="mt-3"> Parcelas </Form.Label>
                <Form.Select aria-label="parcelas" onClick={(event) => {setInstallments(event.target.value); props.func(card) }}>
                    <option value="0">Selecione as parcelas</option>

                    <option value="1">1 x de R$ {(totalValue / 1).toFixed(2).replace(".", ",")} sem juros</option>
                    <option value="2">2 x de R$ {(totalValue / 2).toFixed(2).replace(".", ",")} sem juros</option>
                    <option value="3">3 x de R$ {(totalValue / 3).toFixed(2).replace(".", ",")} sem juros</option>
                </Form.Select>
            </Row>
        </Form>
        
    )
    
}

export default PaymentCreditCard