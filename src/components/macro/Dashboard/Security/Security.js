// REACT
import React, { Component } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './Security.css'

function Security(props) {

    return (
        <>
            <Container className="security pt-1">
                <h1 className="card-title-mvp">Segurança</h1>

                <Form className="security-form">
                    <Form.Group xs={12} sm={12} md={6} lg={6} xl={6} className="py-4 px-0">
                            <Form.Label className="py-2">Digite sua senha antiga</Form.Label>
                            <Form.Control className="py-2 px-3" type="password" name="password" />
                    </Form.Group>

                    <Form.Group xs={12} sm={12} md={6} lg={6} xl={6} className="py-4 px-0">
                            <Form.Label className="py-2">Digite a senha nova</Form.Label>
                            <Form.Control className="py-2 px-3" type="password" name="password" />
                            
                            <Form.Label className="py-2">Repita a senha nova</Form.Label>
                            <Form.Control className="py-2 px-3" type="password" name="password" />
                    </Form.Group>
            
                    <Form.Group className="col-12 py-4 button-save">
                        <Button>Salvar</Button>
                    </Form.Group>
                </Form>

                <Container className="p-3 pt-4 mt-5 button-delete">
                    <Button>Excluir minha conta</Button>
                </Container>
            </Container>
        </>
    )
}

export default Security