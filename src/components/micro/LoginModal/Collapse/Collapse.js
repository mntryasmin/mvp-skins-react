import React, { useState } from 'react'
import './Collapse.css'
import { Button, Collapse, Container, Form, FormGroup, Row } from 'react-bootstrap'
import LoginForm from '../../../macro/Forms/Login/LoginForm';
import ButtonCustom from '../../Button/Button.js'

function Example() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="primary"
                onClick={() => setOpen(!open)}
                aria-controls="collapse-reset-password"
                aria-expanded={open} className="links-login"
            >
                Esqueci a senha
            </Button>
            
            <Collapse in={open}>

                <Container id="collapse-reset-password" className="card card-body redefinir-senha">
                    <div className='m-3'>
                    Esqueceu sua senha? Fique tranquilo, digite seu e-mail aqui em baixo para te
                    enviarmos um e-mail com o link para redefinição da sua senha:
                    <p></p>
                    
                    <Form>
                        <FormGroup className="d-flex-justify-content-start">
                            <LoginForm Email/>
                            <ButtonCustom class='btn-primary-mvp layout-btn-forgot-password' label='enviar'/>
                        </FormGroup>
                    </Form>
                    </div>
                </Container>
            </Collapse>
        </>
    );
}
export default Example