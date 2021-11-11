// REACT
import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './Security.css'

// COMPONENTES
import Button from '../../../micro/Button/Button'

function Security(props) {

    return (
        <>
            <Container className="security pt-1">
                <h1 className="card-title-mvp">Segurança</h1>

                <Form className="col-12 security-form">
                    <Form.Group xs={12} sm={12} md={6} lg={6} xl={6} className="security-form-org p-4">
                        <Form.Label className="py-2">Digite sua senha antiga</Form.Label>
                        <Form.Control className="py-2" type="password" name="password" />
                    </Form.Group>

                    <Form.Group xs={12} sm={12} md={6} lg={6} xl={6} className="security-form-org p-4">
                        <Form.Label className="py-2">Digite a senha nova</Form.Label>
                        <Form.Control className="py-2" type="password" name="password" />

                        <Form.Label className="py-2">Repita a senha nova</Form.Label>
                        <Form.Control className="py-2" type="password" name="password" />
                    </Form.Group>

                    <Form.Group className="col-12 p-4 button-save">
                        <Button label="Salvar" route="/home" class="btn-primario-mvp"></Button>
                    </Form.Group>
                </Form>

                <Container className="p-3 mt-2 button-delete">
                    <Button label="Deletar minha conta" route="/home" class="btn-secundario-mvp"></Button>
                </Container>
            </Container>
        </>
    )
}

export default Security