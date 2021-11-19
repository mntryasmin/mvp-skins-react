// REACT
import React, { Component, useEffect, useState } from 'react'
import { Container, Form, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './MyAccount.css'

// PÁGINAS/COMPONENTES
import Button from '../../../micro/Button/Button'
import RegisterForm from '../../Forms/Register/RegisterForm'

export default function MyAccount() {

    const client = JSON.parse(localStorage.getItem("client"))
    const [alterGender, setAlterGender] = useState(false)
    const [name, setName] = useState(client.nomeCliente)
    const [email, setEmail] = useState(client.emailCliente)
    const birthDate = client.dataNascimento
    const [phone, setPhone] = useState(client.numeroTelefone)
    const [trade, setTrade] = useState(client.tradeLink)
    const [idGender, setIdGender] = useState('')

    const selectGender = () => {
        if (alterGender) {
            return <RegisterForm gender function={gender} className="box-update" />
        }
        else {
            return <RegisterForm disabled gender function={gender} className="box-update" />
        }
    }

    const gender = (input, description) => {
        if (input = "gender"){
            setIdGender(description)
        }
    }

    const submit = (event) => {
        event.preventDefault()
        if (alterGender){
            setAlterGender(false)
        }else{
            setAlterGender(true)
        }
        
    }

    return (
        <>
            <Container className="my-account pt-1">
                <h1 className="card-title-mvp">Minha conta</h1>
                <div className="text-center">Clique em algum campo de inserção para alterar seus dados.</div>
                <Form className="myAccountForm pt-3">
                    <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Form.Label className="mt-3"> Nome </Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={(event) => {setName(event.target.value); }} className="box-update" />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                        <Form.Label className="mt-3"> Data de nascimento </Form.Label>
                        <Form.Control type="date" name="birthday" value={birthDate} readOnly className="box-update"/>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Form.Label className="mt-3"> E-mail </Form.Label>
                        <Form.Control type="email" name="email" className="box-update" onChange={(event) => {setEmail(event.target.value); }} value={email}/>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                        <Form.Label className="mt-3"> Telefone </Form.Label>
                        <Form.Control type="tel" name="tel" className="box-update" onChange={(event) => {setPhone(event.target.value); }} value={phone}/>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Form.Label className="mt-3"> Trade link </Form.Label>
                        <Form.Control type="url" name="tradeLink" className="box-update" onChange={(event) => {setTrade(event.target.value); }} value={trade}/>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-3">
                        <Form.Label className="mt-3"> Identidade de gênero </Form.Label>
                        {selectGender()}
                        <Button label="Alterar gênero" onclick={(event) => submit(event)} class="alter-gender"></Button>
                    </Col>

                    <Form.Group className="col-12 button">
                        <Button label="Salvar" class="btn-primary-mvp mt-3"></Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )

}