import React from 'react'
import './Register.css'
import { Container, FormGroup, Form, Col, FormLabel, Row, Button } from 'react-bootstrap'
import RegisterForm from '../../components/macro/Forms/Register/RegisterForm'
import ButtonCustom from '../../components/micro/Button/Button.js'
import Title from '../../components/micro/Title/Title'

function Register(props) {

    function validateForm(){
        
    }

    return (
        <>
            <Container fluid className='d-flex flex-column registration content-container'>
                <Form className='d-flex flex-column' onSubmit="">
                    <Title title="CADASTRO" class="mt-3" h1/>
                    
                    <FormGroup className='d-flex justify-content-around' controlId="FormRegisterClient">
                        <Container className="justify-content-center">
                            <Row >
                                <Col xs={12} md={6} className="mb-3 p-3">
                                    <FormLabel>Nome</FormLabel>
                                    <RegisterForm name />
                                </Col>
                                <Col xs={12} md={6} className="mb-3 p-3">
                                    <FormLabel>E-mail</FormLabel>
                                    <RegisterForm email />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6} className="mb-3 p-3">
                                    <FormLabel>Telefone</FormLabel>
                                    <RegisterForm phoneNumber />
                                </Col>
                                <Col xs={12} md={6} className="p-3">
                                    <FormLabel>Trade-Link</FormLabel>
                                    <RegisterForm trade />
                                    <a href='https://www.techtudo.com.br/noticias/2016/02/como-gerar-um-steam-trade-link-para-troca-de-itens-na-plataforma.ghtml'
                                        className='link-custom'>
                                        Onde obtenho o trade-link?
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={6} className="mb-3 p-3">
                                    <FormLabel>Gênero</FormLabel>
                                    <RegisterForm gener />
                                </Col>
                                <Col xs={12} md={6} className="mb-3 p-3">
                                    <FormLabel>Data de Nascimento</FormLabel>
                                    <RegisterForm date />
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={12} md={6} className="mb-3 p-3">
                                    <FormLabel>Crie uma senha</FormLabel>
                                    <RegisterForm password />
                                </Col>
                                <Col xs={12} md={6} className="mb-3 p-3">
                                    <FormLabel>Repita a senha</FormLabel>
                                    <RegisterForm password />
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={6} className="mb-3 p-3 d-flex justify-content-start">
                                    <ButtonCustom navigation route='/' class='btn-secundary-mvp layout-btn' label='cancelar' />
                                </Col>
                                <Col xs={6} className="mb-3 p-3 d-flex justify-content-end">
                                    <ButtonCustom class='btn-primary-mvp layout-btn' label='cadastrar' />
                                </Col>
                            </Row>
                        </Container>
                    </FormGroup>
                </Form>
            </Container>
        </>
    )
}

export default Register