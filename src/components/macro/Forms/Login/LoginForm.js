import React from 'react'
import './LoginForm.css'
import { Form, FormLabel } from 'react-bootstrap'

function LoginForm(props) {

    const Email = () => {
        return (
            <>
                <FormLabel className="login-title">
                    E-mail
                </FormLabel>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        className='box-insert login'
                    />
                    <label htmlFor="floatingInputCustom">Digite seu e-mail</label>
                </Form.Floating>
            </>
        )
    }

    const Password = () => {
        return (
            <>
                <FormLabel className="login-title">
                    Senha
                </FormLabel>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                        className='box-insert login'
                    />
                    <label htmlFor="floatingPasswordCustom">Digite sua senha</label>
                </Form.Floating>
            </>
        )
    }

    if (props.Email) {
        return (
            <>
                {Email()}
            </>
        )
    }
    if (props.Password) {
        return (
            <>
                {Password()}
            </>
        )
    }
}

export default LoginForm