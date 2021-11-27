// REACT
import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './PaymentCreditCard.css'

// PÁGINAS/COMPONENTES


function PaymentCreditCard(props) {

    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [cpf, setCpf] = useState('')
    const [installments, setInstallments] = useState(0)
    const [dtCard, setDtCard] = useState('')
    const [flag, setFlag] = useState('')
    const [validation, setValidation] = useState('')
    const totalValue = props.vlTotal
    const [classTerm, setClassTerm] = useState('')

    const card = {
        name: name,
        cardNumber: cardNumber,
        cvv: cvv,
        cpf: cpf,
        installments: installments,
        dtCard: dtCard,
        flag: flag,
        validation: validation
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
    }

    const changeInstallments = (value) => {
        setInstallments(value)
    }

    const changeFlag = (cardNumber) => {
        var cardInitial = cardNumber.substring(0, 1)

        if (cardInitial == 4) {
            setFlag('VISA')
        } else if (cardInitial == 5) {
            setFlag('MASTERCARD')
        } else {
            setFlag('INVÁLIDO')
        }
    }

    const validateName = () => {
        if (name.length < 3) {
            setValidation('Nome inválido.')
            props.func(card);
            setClassTerm('validation-term p-2')
        } else {
            setValidation('')
            setClassTerm('')
            props.func(card);
        }
    }

    const validateCard = () => {
        if (cardNumber.length < 19) {
            setValidation('Cartão inválido.')
            setClassTerm('validation-card py-1')
            setFlag('INVÁLIDO')
            props.func(card);
        } else if (flag == 'INVÁLIDO') {
            setValidation('No momento só aceitamos as bandeiras MasterCard e Visa.')
            props.func(card);
            setClassTerm('validation-card py-1')
        } else {
            setValidation('')
            props.func(card);
        }
    }

    const validateDate = () => {
        const mounth = dtCard.substring(0, 2)
        const year = dtCard.substring(3)
        var date = new Date()
        var currentMounth = String(date.getMonth() + 1).padStart(2, '0');
        var currentYear = date.getFullYear();

        if (dtCard.length < 7) {
            setValidation('A data de vencimento está num formato inválido (Tente esse formato: MM/AAAA)')
            props.func(card);
        } else if (year < currentYear) {
            setValidation('Data de vencimento inválida')
            props.func(card);
        } else if (mounth < currentMounth) {
            if (year > currentYear) {
                setValidation('')
                props.func(card);
            } else {
                setValidation('Data de vencimento inválida')
                props.func(card);
            }
        } else if (mounth > 12 || mounth < 1) {
            setValidation('Data de vencimento inválida')
            props.func(card);
        } else if (year > currentYear + 5) {
            setValidation('Data de vencimento inválida')
            props.func(card);
        } else {
            setValidation('')
            props.func(card);
        }
    }

    const validateCvv = () => {
        if (cvv.length < 3) {
            setValidation('CVV inválido')
            props.func(card);
        } else {
            setValidation('')
            props.func(card);
        }
    }

    const validateCpf = () => {
        if (cpf.length < 14) {
            setValidation('cpf inválido')
            props.func(card);
        } else {
            setValidation('')
            props.func(card);
        }
    }

    const validateInstallments = () => {
        if (installments == 0) {
            setValidation('Selecione uma forma de parcelamento')
            props.func(card);
        } else if (installments != 0) {
            setValidation('')
            props.func(card);
            setClassTerm('')
        }
    }

    return (

        <Form className="payment-form">
            <div className={classTerm}>
                {validation}
            </div>

            <Row>
                <Form.Label className="mt-3"> Nome do titular </Form.Label>
                <Form.Control className="box-payment" type="text" name="name" value={name} onBlur={() => validateName()}
                    onChange={(event) => {
                        setName(maskOnlyLetters(event.target.value));
                        props.func(card);
                    }}
                    placeholder="Digite seu nome" />
            </Row>

            <Row className="px-0 payment-span">
                <Col md={7} className='mx-1 p-0'>
                    <Form.Label className="mt-3"> Número do cartão </Form.Label>
                    <Form.Control type="text" name="number" placeholder="Digite o número do cartão" value={cardNumber} onBlur={() => validateCard()}
                        onChange={(event) => {
                            setCardNumber(maskCard(event.target.value));
                            changeFlag(cardNumber)
                            props.func(card);
                        }} />
                </Col>
                <Col md={4} className='px-0 mx-0'>
                    <Form.Label className="mt-3 px-2"> Bandeira </Form.Label>
                    <Form.Control className='box-disabled' disabled type="text" name="number" value={flag}
                        onChange={(event) => {
                            setFlag(event.target.value);
                            props.func(card);
                        }} />
                </Col>

            </Row>

            <Row className="px-0 payment-span">
                <Col className="mx-0 px-0 col-7">
                    <Form.Label className="px-2 mt-3"> Validade(MM/AAAA) </Form.Label>
                    <Form.Control type="text" name="validade" placeholder='MM/AAAA' value={dtCard} onBlur={() => validateDate()}
                        onChange={(event) => {
                            setDtCard(maskDate(event.target.value));
                            props.func(card);
                        }} />
                </Col>

                <Col className="col-4">
                    <Form.Label className="mt-3"> CVV </Form.Label>
                    <Form.Control type="text" name="cvv" placeholder="Digite o CVV" value={cvv} onBlur={() => validateCvv()}
                        onChange={(event) => {
                            setCvv(maskCVV(event.target.value));
                            props.func(card);
                        }} />
                </Col>
            </Row>

            <Row>
                <Form.Label className="mt-3"> CPF do titular </Form.Label>
                <Form.Control type="text" name="cpf" placeholder="Digite o CPF" value={cpf} onBlur={() => validateCpf()}
                    onChange={(event) => {
                        setCpf(maskCPF(event.target.value));
                        props.func(card);
                    }} />
            </Row>

            <Row className="px-0 payment-form">
                <Form.Label className="mt-3"> Parcelas </Form.Label>
                <Form.Select aria-label="parcelas" onBlur={() => validateInstallments()}
                    onChange={(event) => {
                        changeInstallments(event.target.value);
                        props.func(card);
                    }}>
                    <option value="0">Selecione as parcelas</option>
                    <option value="1">1 x de R$ {(totalValue)} sem juros</option>
                    <option value="2">2 x de R$ {(totalValue / 2).toFixed(2).replace(".", ",")} sem juros</option>
                    <option value="3">3 x de R$ {(totalValue / 3).toFixed(2).replace(".", ",")} sem juros</option>
                </Form.Select>
            </Row>
        </Form>

    )

}

export default PaymentCreditCard