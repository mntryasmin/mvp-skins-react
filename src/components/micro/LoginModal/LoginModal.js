import React, { useState } from 'react'
import './LoginModal.css'
import { Modal, Form, FormLabel, FormGroup, FormControl, Col } from 'react-bootstrap'
import Collapse from './Collapse/Collapse.js'
import LoginForm from '../../macro/Forms/Login/LoginForm'
<<<<<<< chris
import {Link} from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
import Button from '../Button/Button.js'
>>>>>>> juncao

function LoginModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onclick={handleShow} class='btn-primary-mvp' label='login'></Button>

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
                            <LoginForm Email />
                            <LoginForm Password />

                        </FormGroup>

                        <Collapse />
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" className="btn-mvp btn-secundario-mvp btn-cancelar" onClick={handleClose}>
                        CANCELAR
                    </Button>
                    <Button variant="primary" className="btn-mvp btn-primario-mvp btn-logar" >
                        LOGIN
                    </Button>
                    <div className="sem-conta">
                        Não possui conta?
                        <Link to='/register' className="links-login" onClick={handleClose}>
                            Cadastre-se
                        </Link>
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;