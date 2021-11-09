import React from 'react'
import './Register.css'
import { Container, FormGroup, Form, Col, FormLabel, Row, Button } from 'react-bootstrap'
import RegisterForm from '../../components/macro/Forms/Register/RegisterForm'

function Register(props) {

    return (
        <>
            <Container fluid className='d-flex flex-column cadastro'>
                <Form className='d-flex flex-column'>
                    <div className='titulo-cadastro'>
                        CADASTRO
                    </div>
                    <FormGroup className='d-flex justify-content-around'>
                        <Container className="justify-content-center">
                            <Row >
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Nome</FormLabel>
                                    <RegisterForm name/>
                                </Col>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>E-mail</FormLabel>
                                    <RegisterForm email/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>CPF</FormLabel>
                                    <RegisterForm cpf/>
                                </Col>
                                <Col xs={6} className="p-3">
                                    <FormLabel>Trade-Link</FormLabel>
                                    <RegisterForm trade/>
                                    <a href='https://www.techtudo.com.br/noticias/2016/02/como-gerar-um-steam-trade-link-para-troca-de-itens-na-plataforma.ghtml'
                                        className='link-custom'>
                                        Onde obtenho o trade-link?
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Gênero</FormLabel>
                                    <RegisterForm gener/>
                                </Col>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Data de Nascimento</FormLabel>
                                    <RegisterForm date/>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Crie uma senha</FormLabel>
                                    <RegisterForm password/>
                                </Col>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Repita a senha</FormLabel>
                                    <RegisterForm password/>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={6} className="mb-3 p-3 ">
                                    <Button type='reset' className='btn-mvp btn-secundario-mvp btn-cancelar d-flex justify-content-center'>Cancelar</Button>
                                </Col>
                                <Col xs={6} className="mb-3 p-3 d-flex justify-content-end">
                                    <Button type='submit' className='btn-mvp btn-primario-mvp btn-cancelar d-flex justify-content-center'>Cadastrar</Button>
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