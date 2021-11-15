import React from 'react'
import './Register.css'
import axios from 'axios'
import { Container, FormGroup, Form, Col, FormLabel, Row, Button } from 'react-bootstrap'
import RegisterForm from '../../components/macro/Forms/Register/RegisterForm'
import ButtonCustom from '../../components/micro/Button/Button.js'
import Title from '../../components/micro/Title/Title'

function Register(props) {

    var validated = 0;
    const regexName = /^[a-zA-Z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/i;
    const regexTelCel = /(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})/i;


    const client = {
        nomeCliente : '',
        emailCliente: '',
        numeroTelefone : '',
        tradeLink : '',
        genero : {
            codigoGenero : ''
        },
        dataNascimento : '',
        senhaCliente : ''
    }

    function createClient(input, description){
        switch(input){
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
                console.log("campo não identificado "+input);
        }
    }

    function validateForm(){
        if(regexName.test(client.nomeCliente) == false){
            validated++;
            alert("NOME INVÁLIDO")
        }
        // if(regexName.test(client.emailCliente) == false){
        //     alert("EMAIL INVÁLIDO")
        // }
        if(regexTelCel.test(client.numeroTelefone) == false){
            validated++;
            alert("TELEFONE INVÁLIDO")
        }
        // if(regexName.test(client.tradeLink) == false){
        //     alert("NOME INVÁLIDO")
        // }
        // if(regexName.test(client.dataNascimento) == false){
        //     alert("NOME INVÁLIDO")
        // }
        // if(regexName.test(client.senhaCliente) == false){
        //     alert("NOME INVÁLIDO")
        // }
    }

    function submitClient(event) {
        event.preventDefault();
        if(validated==0){
            axios.post("http://localhost:8080/cliente", client)
            .then((response)=>{console.log(response.data)})
            .catch((erro)=>{
                console.log("Ocorreu um erro "+erro)
            })
        }
    }

    return (
        <>
            <Container fluid className='d-flex flex-column registration content-container'>
                <Form className='d-flex flex-column'>
                    <Title title="CADASTRO" class="mt-3" h1 />


                    <Container className="d-flex">
                        <FormGroup className='form-group 'controlId="FormRegisterClient">
                            <Row className='row-input justify-content-center'>
                                <Col xs={12} md={5} className="d-flex box-input my-3 mx-5 p-3">
                                    <FormLabel>Nome</FormLabel>
                                    <RegisterForm name function={createClient}/>
                                </Col>
                                <Col xs={12} md={5} className="d-flex box-input my-3 mx-5 p-3">
                                    <FormLabel>E-mail</FormLabel>
                                    <RegisterForm email  function={createClient}/>
                                </Col>
                            </Row>
                            <Row className='row-input justify-content-center'>
                                <Col xs={12} md={5} className="d-flex box-input my-3 mb-3 mx-5 p-3">
                                    <FormLabel>Telefone</FormLabel>
                                    <RegisterForm phoneNumber  function={createClient}/>
                                </Col>
                                <Col xs={12} md={5} className="d-flex box-input my-3 p-3 mx-5">
                                    <FormLabel>Trade-Link</FormLabel>
                                    <RegisterForm trade  function={createClient}/>
                                    <a href='https://www.techtudo.com.br/noticias/2016/02/como-gerar-um-steam-trade-link-para-troca-de-itens-na-plataforma.ghtml'
                                        target='_blank'
                                        className='link-custom'>
                                        Onde obtenho o trade-link?
                                    </a>
                                </Col>
                            </Row>
                            <Row className='row-input justify-content-center'>
                                <Col xs={12} md={5} className="d-flex box-input my-3 mb-3 mx-5 p-3">
                                    <FormLabel>Gênero</FormLabel>
                                    <RegisterForm gender  function={createClient}/>
                                </Col>
                                <Col xs={12} md={5} className="d-flex box-input my-3 mb-3 mx-5 p-3">
                                    <FormLabel>Data de Nascimento</FormLabel>
                                    <RegisterForm date  function={createClient}/>
                                </Col>
                            </Row>
                            <Row className='row-input justify-content-center'>
                                <Col xs={12} md={5} className="d-flex box-input my-3 mb-3 mx-5 p-3">
                                    <FormLabel>Crie uma senha</FormLabel>
                                    <RegisterForm password  function={createClient}/>
                                </Col>
                                <Col xs={12} md={5} className="d-flex box-input my-3 mb-3 mx-5 p-3">
                                    <FormLabel>Repita a senha</FormLabel>
                                    <RegisterForm password  function={createClient}/>
                                </Col>
                            </Row>
                            <Row className='justify-content-center row-input '>
                                <Col xs={12} sm={6} className="my-3 mx-5 p-3 d-flex btn-cancel">
                                    <ButtonCustom navigation route='/' class='btn-secundary-mvp layout-btn' label='cancelar' />
                                </Col>
                                <Col xs={12} sm={6} className="my-3 mx-5 p-3 d-flex btn-submit">
                                    <ButtonCustom class='btn-primary-mvp layout-btn' label='cadastrar' onclick={(event)=>submitClient(event)}/>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Container>

                </Form>
            </Container>
        </>
    )
}

export default Register