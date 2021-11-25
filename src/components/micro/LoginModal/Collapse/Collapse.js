import React, { useState } from 'react'
import './Collapse.css'
import { Button, Collapse, Container, Form, FormGroup, Row, FloatingLabel } from 'react-bootstrap'
import LoginForm from '../../../macro/Forms/Login/LoginForm';
import ButtonCustom from '../../Button/Button.js'
import axios from 'axios';

function Example() {
    const [open, setOpen] = useState(false);

    const [Validation, setValidation] = useState('')

    const URL = "http://localhost:8080/authenticate/esqueci-minha-senha"
    const [email, setEmail] = useState('')

    const submit = (event) => {
        event.preventDefault()
        if (email == '') {
            setValidation('O campo de E-mail não pode estar vazio')
        } else {
            sendEmail()
        }
    }

    const sendEmail = () => {
        axios.post(`${URL}`, { email: email }).then((response) => {
            setValidation('O e-mail foi enviado com sucesso. Cheque sua caixa de spam para prosseguir com a redefinição da sua senha')
        }).catch((error) => {
            setValidation('Esse e-mail não existe no nosso banco de dados, verifique se você digitou o e-mail corretamente')
        })
    }

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-reset-password"
                aria-expanded={open} className="links-login m-0 p-0"
            >
                Esqueci a senha
            </Button>

            <Collapse in={open}>

                <Container id="collapse-reset-password" className="card card-body redefinir-senha my-3 py-1">
                    <div className='m-3'>
                        Esqueceu sua senha? Fique tranquilo, digite seu e-mail aqui em baixo para te
                        enviarmos um e-mail com o link para redefinição da sua senha:
                        <p></p>
                        <div className='validation'>
                            {Validation}
                        </div>
                        <Form>
                            <FormGroup className="d-flex-justify-content-start">

                                <LoginForm Email emailValue={email} onclick={(event) => setValidation('')} onchange={(event) => { setEmail(event.target.value); }} />
                                <ButtonCustom class='btn-mvp-purple-clean layout-btn-forgot-password' label='enviar' onclick={(event) => { submit(event) }} />
                            </FormGroup>
                        </Form>
                    </div>
                </Container>
            </Collapse>
        </>
    );
}
export default Example