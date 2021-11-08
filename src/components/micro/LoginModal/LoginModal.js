import React, { useState } from 'react'
import './LoginModal.css'
import { Button, Modal, Form, FormLabel, FormGroup, FormControl } from 'react-bootstrap'
import Collapse from './Collapse/Collapse.js'

function LoginModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="btn-mvp">
                LOGIN
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 className="login-title">
                            FAÇA LOGIN
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form className="container d-flex- flex-column">
                        <FormGroup className="d-flex flex-column">
                            <FormLabel className="login-title">
                                E-mail
                            </FormLabel>
                            <FormControl type="email" placeholder="Digite seu e-mail" className="caixas-de-insercao login" />
                            <FormLabel className="login-title">
                                Senha
                            </FormLabel>
                            <FormControl type="password" placeholder="Digite sua senha" className="caixas-de-insercao login" />
                        </FormGroup>
                        <Collapse/>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="btn-mvp" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" className="btn-mvp" >
                        LOGIN
                    </Button>
                    <div className="sem-conta">
                        Não possui conta?
                        <a href="#" className="links-login">
                            Cadastre-se
                        </a>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;