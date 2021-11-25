import React from 'react'
import './Register.css'
import axios from 'axios'
import { Container, FormGroup, Form, Col, FormLabel, Row } from 'react-bootstrap'
import RegisterForm from '../../components/macro/Forms/Register/RegisterForm'
import ButtonCustom from '../../components/micro/Button/Button.js'
import Title from '../../components/micro/Title/Title'
import { Link } from 'react-router-dom';
import If from '../../components/micro/If/If';
import LoginModal from '../../components/micro/LoginModal/LoginModal';

function Register(props) {

    var confirmPassword = '';
    var formValidated = false;

    const client = {
        nomeCliente: '',
        emailCliente: '',
        numeroTelefone: '',
        tradeLink: '',
        genero: {
            codigoGenero: ''
        },
        dataNascimento: '',
        senhaCliente: ''
    }

    function setPasswordConfirmation(passwordConfirmation) {
        confirmPassword = passwordConfirmation;
        console.log(confirmPassword)
    }

    function createClient(input, description) {
        switch (input) {
            case 'name':
                client.nomeCliente = description;
                break;
            case 'email':
                client.emailCliente = description;
                break;
            case 'phoneNumber':
                client.numeroTelefone = description;
                break;
            case 'trade':
                client.tradeLink = description;
                break;
            case 'gender':
                client.genero.codigoGenero = description;
                break;
            case 'date':
                client.dataNascimento = description;
                break;
            case 'password':
                client.senhaCliente = description;
                break;
            default:
                console.log("campo não identificado " + input);
        }
    }

    function validateForm() {
        if (client.nomeCliente == '') {
            alert("NOME INVÁLIDO")
            return false;
        }
        if (client.emailCliente == '') {
            alert("EMAIL INVÁLIDO")
            return false;
        }
        if (client.numeroTelefone == '') {
            alert("TELEFONE INVÁLIDO")
            return false;
        }
        if (client.tradeLink == '') {
            alert("TRADELINK INVÁLIDO")
            return false;
        }
        if (client.genero.codigoGenero == '' || client.genero.codigoGenero == 'Selecione o gênero') {
            alert("GÊNERO DEVE SER PREENCHIDO")
            return false;
        }
        if (client.dataNascimento == '') {
            alert("DATA DE NASCIMENTO DEVE SER PREENCHIDA")
            return false;
        }
        if (client.senhaCliente == '') {
            alert("SENHA INVÁLIDA")
            return false;
        }
        if (client.senhaCliente != confirmPassword) {
            alert("AS SENHAS DEVEM SER IGUAIS")
            return false;
        }
        return true;
    }

    function submitClient(event) {
        event.preventDefault();
        if (validateForm()) {
            axios.post("http://localhost:8080/cliente", client)
                .then((response) => {
                    console.log(response.data)
                    window.location.href = 'http://localhost:3000'
                })
                .catch((erro) => {
                    console.log("Ocorreu um erro " + erro)
                })
            formValidated = true;
            console.log(formValidated)
            alert("CLIENTE CADASTRADO COM SUCESSO")
        }
    }

    return (
        <>
            <div className="registration-container">
                <Col className="registration-banner col-2">

                </Col>
                <Col className="py-5 col-10">
                    <Form className='registration'>
                        <Title title="CADASTRO" h1 />
                        <Row className='row-input'>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>Nome</FormLabel>
                                <RegisterForm name function={createClient} />
                            </Col>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>E-mail</FormLabel>
                                <RegisterForm email function={createClient} />
                            </Col>
                        </Row>
                        <Row className='row-input'>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>Telefone</FormLabel>
                                <RegisterForm phoneNumber function={createClient} />
                            </Col>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>Trade-Link</FormLabel>
                                <RegisterForm trade function={createClient} />
                                <a href='https://www.techtudo.com.br/noticias/2016/02/como-gerar-um-steam-trade-link-para-troca-de-itens-na-plataforma.ghtml'
                                    target='_blank'
                                    className='link-custom'>
                                    Onde obtenho o trade-link?
                                </a>
                            </Col>
                        </Row>
                        <Row className='row-input'>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>Gênero</FormLabel>
                                <RegisterForm gender function={createClient} />
                            </Col>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>Data de Nascimento</FormLabel>
                                <RegisterForm date function={createClient} />
                            </Col>
                        </Row>
                        <Row className='row-input'>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>Crie uma senha</FormLabel>
                                <RegisterForm password function={createClient} />
                            </Col>
                            <Col xs={12} md={5} className="box-input">
                                <FormLabel>Repita a senha</FormLabel>
                                <RegisterForm passwordConfirmation function={setPasswordConfirmation} />
                            </Col>
                        </Row>
                        <Row className='row-input mx-4'>
                            <Col xs={12} sm={6} className="btn-cancel">
                                <ButtonCustom navigation route='/' class='btn-mvp-orange-solid layout-btn' label='cancelar' />
                            </Col>
                            <Col xs={12} sm={6} className="btn-submit">
                                <ButtonCustom class='btn-mvp-orange-clean layout-btn' label='cadastrar' onclick={(event) => submitClient(event)} />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </div>
        </>
    )
}

export default Register