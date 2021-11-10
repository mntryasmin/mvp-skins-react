import React from 'react'
import './RegisterForm.css'
import {FormControl, Form } from 'react-bootstrap'

function RegisterForm(props) {

    const name = () => {
        return (
            <>
                <FormControl type="text" placeholder="Digite seu nome" className='box-insert py-3'></FormControl>
            </>
        )
    }

    const email = () => {
        return (
            <>
                <FormControl type="email" placeholder="Digite seu e-mail" className='box-insert py-3'></FormControl>
            </>
        )
    }

    const cpf = () => {
        return (
            <>
                <FormControl type="text" placeholder="Digite seu CPF" className='box-insert'></FormControl>
            </>
        )
    }

    const tradeLink = () => {
        return (
            <>
                <FormControl type="text" placeholder="Digite seu trade-link da steam" className='box-insert'></FormControl>
            </>
        )
    }

    const gener = () => {
        return (
            <>
                <Form.Select aria-label="Default select example" className="box-insert d-flex">
                    <option >Selecione o gênero</option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                    <option value="3">Prefiro não informar</option>
                </Form.Select>
            </>
        )
    }

    const date = () => {
        return (
            <>
                <FormControl type="date" className='box-insert'></FormControl>
            </>
        )
    }

    const password = () => {
        return (
            <>
                <FormControl type="password" placeholder="Digite a senha" className='box-insert '></FormControl>
            </>
        )
    }

    if (props.name) {
        return name()

    }
    if (props.email) {
        return email()

    }
    if (props.cpf) {
        return cpf()
    }
    if (props.trade) {
        return tradeLink()
 
    }
    if (props.gener) {
        return gener()
            
    }
    if (props.date) {
        return date()
            
    }
    if (props.password) {
        return password()
    }
}

export default RegisterForm