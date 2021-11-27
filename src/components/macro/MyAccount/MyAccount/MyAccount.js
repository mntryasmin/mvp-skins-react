// REACT
import React, { Component, useEffect, useState } from 'react'
import { Container, Form, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './MyAccount.css'

// PÁGINAS/COMPONENTES
import Button from '../../../micro/Button/Button'
import RegisterForm from '../../Forms/Register/RegisterForm'
import axios from 'axios'
import InputMask from "react-input-mask"
import swal from 'sweetalert';

export default function MyAccount() {

    const client = JSON.parse(localStorage.getItem("client"))

    const [alterGender, setAlterGender] = useState(false)
    const [name, setName] = useState(client.nomeCliente)
    const [email, setEmail] = useState(client.emailCliente)
    const birthDate = client.dataNascimento
    const [phone, setPhone] = useState(client.numeroTelefone)
    const [trade, setTrade] = useState(client.tradeLink)
    const [idGender, setIdGender] = useState('0')

    const clientUpdate = {
        nomeCliente: name,
        emailCliente: email,
        numeroTelefone: phone,
        tradeLink: trade,
        genero: {
            codigoGenero: idGender
        }
    }

    const [validation, setValidation] = useState('')

    const selectGender = () => {
        if (alterGender) {
            return <RegisterForm gender function={gender} className="box-update" />
        }
        else {
            return <RegisterForm disabled gender function={gender} className="box-update" />
        }
    }

    const gender = (input, description) => {
        if (input = "gender") {
            if (alterGender == true) {
                setIdGender(description)
            } else {
                setIdGender(client.genero.codigoGenero)
            }
        }
    }

    const changeGender = (event) => {
        event.preventDefault()
        if (alterGender) {
            console.log(idGender)
            setAlterGender(false)
            
        } else {
            console.log(idGender)
            setAlterGender(true)
            
        }
    }

    const replacePhone = (phone) => {
        var phoneInt = phone
        for (let i = 0; i < phone.length; i++) {
            var result = phone.charAt(i);
            if (result == "(") {
                phoneInt = phone.replace("(", "");
            }
            if (result == ")") {
                phoneInt = phoneInt.replace(")", "")
            }
            if (result == " ") {
                phoneInt = phoneInt.replace(" ", "")
            }
            if (result == "-") {
                phoneInt = phoneInt.replace("-", "")
            }
        }
        return phoneInt;
    }
    
    const maskPhone = value => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
    };

    const maskOnlyLetters = value => {
        return value.replace(/[0-9!@#¨}{º;,/:|"'¹²³£¢¬$%^&*)(+=._-]+/g, "");
    };

    const submit = (event) => {
        event.preventDefault()

        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        const phoneInt = replacePhone(phone)
        if (name == '') {
            setValidation('O campo "Nome" deve ser preenchido!')
        }
        else if (name.length < 3 ) {
            setValidation('Nome inválido!')
        }
        else if (email == '') {
            setValidation('O campo "E-mail" deve ser preenchido!')
        }
        else if (!regexEmail.test(email)) {
            setValidation('E-mail invalido!')
        }
        else if (phoneInt == '') {
            setValidation('O campo "Telefone" deve ser preenchido!')
        }
        else if (phoneInt.length < 10) {
            console.log(phone.length)
            setValidation('O campo "Telefone" deve ter no mínimo 10 dígitos')
        }
        else if (trade == '') {
            setValidation('O campo "Trade Link" deve ser preenchido!')
        }
        else if (idGender == '' ) {
            setValidation('Você deve selecionar um gênero caso queira altera-lo!')
        }
        else {
            updateUser()
        }
    }

    const updateUser = () => {
        axios.put("http://localhost:8080/cliente/" + client.codigoCliente, clientUpdate)
            .then((response) => {
                localStorage.setItem("client", JSON.stringify(response.data))
                swal({
                    title: "Dados atualizados com sucesso!",
                    button: {
                        text: "Ok",
                        closeModal: true,
                    },
                  });
                window.location.reload(true)
            }).catch((error) => {
                console.log(clientUpdate)
                console.log('deu ruim' + error)
            })
    }

    return (
        <>
            <Container className="my-account pt-1">
                <h1 className="card-title-mvp">Minha conta</h1>
                <div className="text-center">(Clique em algum campo de inserção para alterar seus dados.)</div>
                <br />
                <div className='error'>
                    {validation}
                </div>
                <Form className="myAccountForm pt-3">

                    <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Form.Label className="mt-3"> Nome </Form.Label>
                        <Form.Control type="text" name="name" value={name} onClick={() => setValidation('')} onChange={(event) => { setName(maskOnlyLetters(event.target.value)); }} className="box-update" />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                        <Form.Label className="mt-3"> Data de nascimento </Form.Label>
                        <Form.Control type="date" name="birthday" onClick={() => setValidation('')} value={birthDate} readOnly className="box-to-read" />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Form.Label className="mt-3"> E-mail </Form.Label>
                        <Form.Control type="email" name="email" className="box-update" onClick={() => setValidation('')} onChange={(event) => { setEmail(event.target.value); }} value={email} />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                        <Form.Label className="mt-3 d-flex"> Telefone </Form.Label>
                        <InputMask type='tel' className="box-update" onClick={() => setValidation('')} onChange={(event) => { setPhone(maskPhone(event.target.value)); }} value={phone} />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Form.Label className="mt-3"> Trade link </Form.Label>
                        <Form.Control type="url" name="tradeLink" className="box-update" onClick={() => setValidation('')} onChange={(event) => { setTrade(event.target.value); }} value={trade} />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-3">
                        <Form.Label className="mt-3"> Identidade de gênero </Form.Label>
                        {selectGender()}
                        <Button label="Alterar gênero" onclick={(event) => { changeGender(event); }} class="alter-gender"></Button>
                    </Col>

                    <Form.Group className="col-12 button">
                        <Button label="Salvar" onclick={(event) => submit(event)} class="btn-mvp btn-mvp-orange-clean mt-3"></Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )

}