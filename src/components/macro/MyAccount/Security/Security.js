// REACT
import React, { Component } from 'react'
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap'
import ReactDOM from "react-dom";

// ESTILO
import '../../../../assets/css/Style.css'
import './Security.css'

// COMPONENTES
// import Button from '../../../micro/Button/Button'

export default class Security extends Component {
    constructor(props) {
        super(props);
        //VALIDAÇÃO
        this.validInput = false;
        this.validPass = false;
        this.state = {
            // CLIENTE
            client: JSON.parse(localStorage.getItem('client')),
            update: {
                senhaCliente: '',
            },
            //SENHAS
            oldPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
            //MENSAGENS DE VALIDAÇÕES DAS SENHAS
            messageInput1: '',
            messageInput2: '',
            messageInput3: '',
        }

        this.handleChangeOP = this.handleChangeOP.bind(this);
        this.handleChangeNP = this.handleChangeNP.bind(this);
        this.handleChangeNPC = this.handleChangeNPC.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validationInput = this.validationInput.bind(this);
        this.validationPasswordOld = this.validationPasswordOld.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    handleChangeOP(event) {
        this.setState({ oldPassword: event.target.value });
    }

    handleChangeNP(event) {
        this.setState({ newPassword: event.target.value });
    }

    handleChangeNPC(event) {
        this.setState({ newPasswordConfirm: event.target.value });
    }

    //AÇÃO DO BOTÃO DE SALVAR
    handleSubmit(event) {
        event.preventDefault();

        this.validationPasswordOld();
        this.validationInput();
    }

    handleFinalValidation(validPass) {
        if (this.validInput == true && validPass == true) {
            this.setState({ update: { senhaCliente: this.state.newPassword } });
            this.updatePassword();
        } else if (this.validPass == false) {
            this.setState({messageInput1: 'Senha inválida'});
        } else {
            console.log("ALGO ESTÁ ERRADO.");
        }
    }

    //VALIDAÇÃO DOS INPUTS DO FORMULÁRIO DE MUDANÇA DE SENHA
    validationInput() {
        var count = 0;
        if (this.state.oldPassword == '') {
            this.setState({ messageInput1: 'Este campo não deve ficar vazio' });
        } else {
            this.setState({ messageInput1: '' });
            count++;
        }

        if (this.state.newPassword == '') {
            this.setState({ messageInput2: 'Este campo não deve ficar vazio' });
        } else {
            this.setState({ messageInput2: '' });
            count++;
        }

        if (this.state.newPasswordConfirm == '') {
            this.setState({ messageInput3: 'Este campo não deve ficar vazio' });
        } else {
            this.setState({ messageInput3: '' });
            count++;
        }

        if (this.state.newPassword != '' && this.state.newPasswordConfirm != '') {
            if (this.state.newPassword != this.state.newPasswordConfirm) {
                this.setState({ messageInput2: 'As senhas são divergentes' });
                this.setState({ messageInput3: 'As senhas são divergentes' });
            } else {
                this.setState({ messageInput2: '' });
                this.setState({ messageInput3: '' });
                count++;
            }
        }

        if (count == 4) {
            this.validInput = true;
        }
    }

    //VALIDAÇÃO DA SENHA ANTIGA VS. A INSERIDA PELO USUÁRIO
    validationPasswordOld() {
        return (
            axios.get(`http://localhost:8080/cliente/valid-password-client/${this.state.oldPassword}/${this.state.client.codigoCliente}`)
            .then(async (response) => {
                this.validPass = await response.data;
                this.handleFinalValidation(this.validPass);
            })
            .catch((erro) => {
                console.log("ERRO NA VALIDAÇÃO DA SENHA ANTIGA: " + erro)
            }
            )
        )
    }

    //ATUALIZAÇÃO DA SENHA NO BANCO DE DADOS
    updatePassword() {
        return (
            axios.put(`http://localhost:8080/cliente/${this.state.client.codigoCliente}`, this.state.update)
                .then((response) => {
                    alert("Senha alterada com sucesso!");
                    this.validInput = false;
                    this.validPass = false;
                })
                .catch((erro) => {
                    console.log("NÃO ATUALIZOU A SENHA DO CLIENTE: " + erro)
                }
                )
        )
    }



    render() {
        return (
            <>
                <Container className="security pt-1">
                    <h1 className="card-title-mvp">Segurança</h1>
                    <p className="pt-3 px-3"> Para sua segurança, evite usar números repetitivos, datas de aniversário ou seu nome na criação da senha. 
                    <br/>
                    <a href="https://www.alura.com.br/artigos/como-criar-uma-boa-senha?gclid=CjwKCAiAv_KMBhAzEiwAs-rX1ABtLVaJNHAYEsJMdjZKvaV-mi2tRMQBjztVG9D3l9NdOYsia-S2fBoCB-oQAvD_BwE" target="_blank" className='link-password'>Como criar uma boa senha?</a> </p>

                    <Form className="security-form">
                        <Form.Group lg={6} xl={6} className="security-form-org ">
                            <Form.Label className="py-2">Digite sua senha antiga</Form.Label>
                            <Form.Control value={this.state.oldPassword} onChange={this.handleChangeOP} className="py-2" type="" name="oldPassword" />
                            <p> {this.state.messageInput1} </p>
                        </Form.Group>

                        <Form.Group lg={6} xl={6} className="security-form-org ">
                            <Form.Label className="py-2">Digite a senha nova</Form.Label>
                            <Form.Control value={this.state.newPassword} onChange={this.handleChangeNP} className="py-2" type="" name="newPassword" />
                            <p> {this.state.messageInput2}</p>

                            <Form.Label className="py-2">Repita a senha nova</Form.Label>
                            <Form.Control value={this.state.newPasswordConfirm} onChange={this.handleChangeNPC} className="py-2" type="" name="newPasswordConfirm" />
                            <p> {this.state.messageInput3}</p>
                        </Form.Group>

                        <Form.Group className="button-save">
                            <Button onClick={this.handleSubmit} type="submit" className="btn btn-mvp btn-primario-mvp">Salvar</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </>
        )
    }
}