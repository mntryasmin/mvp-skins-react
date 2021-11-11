import React, { useState } from 'react'
import './LoginModal.css'
import { Modal, Form, FormLabel, FormGroup, FormControl, Col } from 'react-bootstrap'
import Collapse from './Collapse/Collapse.js'
import LoginForm from '../../macro/Forms/Login/LoginForm'
import { Link } from 'react-router-dom'
import Button from '../Button/Button.js'

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
                <Modal.Footer className='d-flex justify-content-between'>
                    <Col sm={5} className='d-flex'>
                        <Button onclick={handleClose} class='btn-secundary-mvp mx-3 layou-button layout-button' label='cancelar' />
                    </Col>

                    <Col sm={6} className='d-flex'>
                        <Button navigation route='/' class='btn-primary-mvp mx-3 layout-button' label='fazer login' />
                    </Col>
                    <Col sm={12} >
                        <div className="no-account mx-4">
                            Não possui conta?
                            <a href="/register" className="links-login" onClick={handleClose}>
                                Cadastre-se
                            </a>
                        </div>
                    </Col>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;