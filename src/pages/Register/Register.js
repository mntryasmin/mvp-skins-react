import React from 'react'
import './Register.css'
import { Container, FormGroup, Form, Col, FormLabel, FormControl, Row, Button } from 'react-bootstrap'

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
                                    <FormControl type="text" placeholder="Digite seu nome" className='caixas-de-insercao'></FormControl>
                                </Col>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl type="email" placeholder="Digite seu e-mail" className='caixas-de-insercao'></FormControl>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>CPF</FormLabel>
                                    <FormControl type="text" placeholder="Digite seu CPF" className='caixas-de-insercao'></FormControl>
                                </Col>
                                <Col xs={6} className="p-3">
                                    <FormLabel>Trade-Link</FormLabel>
                                    <FormControl type="text" placeholder="Digite seu trade-link da steam" className='caixas-de-insercao'></FormControl>
                                    <a href='https://www.techtudo.com.br/noticias/2016/02/como-gerar-um-steam-trade-link-para-troca-de-itens-na-plataforma.ghtml'
                                        className='link-custom'>
                                        Onde obtenho o trade-link?
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Gênero</FormLabel>
                                    <Form.Select size='sm' aria-label="Default select example" className="caixas-de-insercao">
                                        <option>Selecione o gênero</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Feminino</option>
                                        <option value="3">Prefiro não informar</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Data de Nascimento</FormLabel>
                                    <FormControl type="date" className='caixas-de-insercao py-4'></FormControl>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Crie uma senha</FormLabel>
                                    <FormControl type="password" placeholder="Digite a senha" className='caixas-de-insercao py-4'></FormControl>
                                </Col>
                                <Col xs={6} className="mb-3 p-3">
                                    <FormLabel>Repita a senha</FormLabel>
                                    <FormControl type="password" placeholder="Digite a senha" className='caixas-de-insercao py-4'></FormControl>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs={6} className="mb-3 p-3 d-flex ">
                                    <Button type='reset' className='btn-mvp btn-secundario-mvp btn-cancelar'>Cancelar</Button>
                                </Col>
                                <Col xs={6} className="mb-3 p-3 d-flex justify-content-end">
                                    <Button type='submit' className='btn-mvp btn-primario-mvp btn-cancelar'>Cadastrar</Button>
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