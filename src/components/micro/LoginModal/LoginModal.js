import React, { useState } from 'react'
import './LoginModal.css'
import { Button, Modal, Form, FormLabel, FormGroup, FormControl } from 'react-bootstrap'
import Collapse from './Collapse/Collapse.js'
import LoginForm from '../../macro/Forms/Login/LoginForm'

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
                            <LoginForm Email/>
                            <LoginForm Password/>
                            
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