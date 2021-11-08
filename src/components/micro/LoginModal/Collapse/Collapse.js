import React, { useState } from 'react'
import { Button, Collapse, Form, FormGroup, FormControl } from 'react-bootstrap'

function Example() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button variant="primary"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open} className="links-login"
            >
                Esqueci a senha
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text" className="card card-body redefinir-senha">
                    Esqueceu sua senha? Fique tranquilo, digite seu e-mail aqui em baixo para te
                    enviarmos um e-mail com o link pra redefinição da sua senha:
                    <p></p>
                    <Form>
                        <FormGroup className="d-flex-justify-content-start">
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@example.com"
                                    className='caixas-de-insercao login'
                                />
                                <label htmlFor="floatingInputCustom">Digite seu e-mail</label>
                            </Form.Floating>
                            <Button variant="primary" className="btn-mvp">
                                ENVIAR
                            </Button>
                        </FormGroup>

                    </Form>
                </div>
            </Collapse>
        </>
    );
}
export default Example