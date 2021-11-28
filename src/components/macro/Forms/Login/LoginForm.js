import React, {useState} from 'react'
import './LoginForm.css'
import { Form, FormLabel } from 'react-bootstrap'
import Button from '../../../micro/Button/Button'

function LoginForm(props) {

    const Email = () => {
        return (
            <>
                <FormLabel className="login-title">
                    E-mail
                </FormLabel>
                <Form.Floating className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        className='box-insert login'
                        onClick={props.onclick}
                        onChange={props.onchange}
                        value={props.emailValue}
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
                        type="password"
                        placeholder="Password"
                        className='box-insert login'
                        onClick={props.onclick}
                        onChange={props.onchange}
                        value={props.passwordValue}
                    />
                    <label htmlFor="floatingPasswordCustom">Digite sua senha</label>
                </Form.Floating>
            </>
        )
    }

    

    const ButtonLogin = () => {
        return (
            <Button onclick={props.onclick} class='btn-mvp btn-mvp-orange-clean mx-2' label='fazer login' />
        )
    }

    if (props.Email){
        return (Email())
    }
    if (props.Password){
        return (Password())
    }
    if (props.Button){
        return (ButtonLogin())
    }
}

export default LoginForm