// REACT
import React, { Component } from 'react'
import { Container, Form, Col } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './MyAccount.css'

// PÁGINAS/COMPONENTES
import Button from '../../../micro/Button/Button'

export default class MyAccount extends Component {


    render() {
        return (
            <>
                <Container className="my-account pt-1">
                    <h1 className="card-title-mvp">Minha conta</h1>
                    <Form className="myAccountForm pt-3">
                        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                            <Form.Label className="mt-3"> Nome </Form.Label>
                            <Form.Control type="text" name="name" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                            <Form.Label className="mt-3"> Data de nascimento </Form.Label>
                            <Form.Control type="date" name="birthday" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                            <Form.Label className="mt-3"> E-mail </Form.Label>
                            <Form.Control type="email" name="email" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                            <Form.Label className="mt-3"> Telefone </Form.Label>
                            <Form.Control type="tel" name="tel" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Label className="mt-3"> Trade link </Form.Label>
                            <Form.Control type="url" name="tradeLink" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-3">
                            <Form.Label className="mt-3"> Identidade de gênero </Form.Label>
                        </Col>

                        <Container key="inline-radio" className="gender mb-3 px-0">
                            <Form.Check
                                inline
                                label="Feminino"
                                name="group1"
                                type="radio"
                                id="inline-radio-1"
                            />
                            <Form.Check
                                inline
                                label="Masculino"
                                name="group1"
                                type="radio"
                                id="inline-radio-2"
                            />
                            <Form.Check
                                inline
                                label="Prefiro não dizer"
                                name="group1"
                                type="radio"
                                id="inline-radio-3"
                            />
                        </Container>

                        <Form.Group className="col-12 pt-2 pb-5 button">
                            <Button label="Salvar" route="/home" class="btn-primario-mvp"></Button>
                        </Form.Group>
                    </Form>
                </Container>
            </>
        )
    }
}