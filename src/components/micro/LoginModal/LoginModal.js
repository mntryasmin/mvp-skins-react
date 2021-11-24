import React, { useState } from 'react'
import './LoginModal.css'
import { Modal, Form, FormGroup, Col } from 'react-bootstrap'
import Collapse from './Collapse/Collapse.js'
import LoginForm from '../../macro/Forms/Login/LoginForm'
import { Link } from 'react-router-dom'
import Button from '../Button/Button.js'
import axios from 'axios'
import Fav from '../../../assets/images/icones/icon-coracao.png'
import Car from '../../../assets/images/icones/icon-carrinho.png'



function LoginModal(props) {
    const URL = 'http://localhost:8080/authenticate/login'
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [validation, setValidation] = useState('')

    const location = window.location.toString()

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setEmail('')
        setPassword('')
        setValidation('')
    }
    const handleShow = () => setShow(true);

    const typeButton = () => {

        if (props.linkFavorite) {
            return (
                <>
                    <div className='d-flex align-items-center justify-content-center'>
                        <Button onclick={handleShow} class='link-header ' label='Favoritos' />
                        <img src={Fav} width="30" height="30" />
                    </div>
                </>
            )
        }
        if (props.linkCart) {
            // return (
                // <>
                //     <div className='d-flex align-items-center justify-content-center'>
                //         <Button onclick={handleShow} class='link-header ' label='Carrinho' />
                //         <img src={Car} width="30" height="30" />
                //     </div>
                // </>
            // )
            return (
                <Button label="Finalizar compra"
                        class="btn-primary-mvp" 
                        onclick={handleShow}>
                </Button>
            )
        }
        if (props.linkDash) {
            return <Button onclick={handleShow} class='link-header link-menu ' label='Faça Login' />
        }
        if (props.link) {
            if (localStorage.getItem("Authorization")) {
                return (<Button onclick={Logout} class='footer-link' label='Logout'></Button>)
            }
            return (<Button onclick={handleShow} class='footer-link' label='Login'></Button>)
        }
        if (localStorage.getItem("Authorization")) {
            return (<Button onclick={Logout} class='btn-primary-mvp layout-btn-login' label='logout'></Button>)

        }
        return (<Button onclick={handleShow} class='btn-primary-mvp layout-btn-login' label='login'></Button>)

    }

    const submit = (event) => {
        event.preventDefault()
        if (email == '' || password == '') {
            setValidation('Os campos de E-mail e senha não podem estar vazios')
        } else {
            Login(email, password)
        }

    }

    const authorize = (data) => {

        localStorage.setItem("Authorization", data)
        
        if (location == 'http://localhost:3000/register') {
            window.location.href = 'http://localhost:3000/'
        }
        else {
            window.location.reload(true)
        }

    }

    const Login = (email, password) => {
        axios.post(`${URL}`, { username: email, password: password })
            .then(async (response) => {
                const token = await response.data.token
                authorize(token)
            }).catch((error) => {
                setValidation("Algo deu errado, confira se você digitou o e-mail e senha corretamente")
            })
    }

    const Logout = () => {
        localStorage.setItem("Authorization", '')
        localStorage.removeItem("client")

        window.location.href = 'http://localhost:3000/';

    }

    return (
        <>
            {typeButton()}
            <div className='d-flex justify-content-center modal-layout'>
                <Modal show={show} onHide={handleClose} className='d-flex'>
                    <Modal.Header closeButton >
                        <Modal.Title>
                            <h5 className="login-title">
                                FAÇA LOGIN
                            </h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form className="container d-flex- flex-column">
                            <FormGroup className="d-flex flex-column">
                                <div className='validation'>
                                    {validation}
                                </div>
                                <LoginForm Email emailValue={email} onclick={() => setValidation('')} onchange={(event) => { setEmail(event.target.value) }} />
                                <LoginForm Password passwordValue={password} onclick={() => setValidation('')} onchange={(event) => { setPassword(event.target.value) }} />
                            </FormGroup>

                            <Collapse />
                        </Form>

                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-between'>
                        <Col sm={5} className='d-flex'>
                            <Button onclick={handleClose} class='btn-secundary-mvp mx-3 layou-button layout-button' label='cancelar' />
                        </Col>

                        <Col sm={6} className='d-flex'>
                            <LoginForm Button onclick={(event) => submit(event)} />
                        </Col>
                        <Col sm={12} >
                            <div className="no-account mx-4">
                                Não possui conta?
                                <Link to='/register' className="links-login" onClick={handleClose}>
                                    Cadastre-se
                                </Link>
                            </div>
                        </Col>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}

export default LoginModal;