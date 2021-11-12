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
                <p className="pt-3 px-3"> Para sua segurança, utilize senhas com mais de 6 
                    caracteres e, se possível, com números, letras maiúsculas, 
                    minúsculas e caracteres especiais (exemplo: @.$%). </p>

                <Form className="security-form">
                    <Form.Group lg={6} xl={6} className="security-form-org ">
                        <Form.Label className="py-2">Digite sua senha antiga</Form.Label>
                        <Form.Control className="py-2" type="password" name="password" />
                    </Form.Group>

                    <Form.Group lg={6} xl={6} className="security-form-org ">
                        <Form.Label className="py-2">Digite a senha nova</Form.Label>
                        <Form.Control className="py-2" type="password" name="password" />

                        <Form.Label className="py-2">Repita a senha nova</Form.Label>
                        <Form.Control className="py-2" type="password" name="password" />
                    </Form.Group>

                    <Form.Group className="button-save">
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