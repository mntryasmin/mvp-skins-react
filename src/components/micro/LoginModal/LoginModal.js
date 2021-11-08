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
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@example.com"
                                    className='caixas-de-insercao login'
                                />
                                <label htmlFor="floatingInputCustom">Digite seu e-mail</label>
                            </Form.Floating>
                            <FormLabel className="login-title">
                                Senha
                            </FormLabel>
                            <Form.Floating>
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type="password"
                                    placeholder="Password"
                                    className='caixas-de-insercao login'
                                />
                                <label htmlFor="floatingPasswordCustom">Digite sua senha</label>
                            </Form.Floating>
                        </FormGroup>

                        <Collapse />
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="btn-mvp btn-secundario-mvp btn-cancelar" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" className="btn-mvp btn-primario-mvp btn-logar" >
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