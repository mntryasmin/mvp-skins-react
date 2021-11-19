// REACT
import React, { Component } from 'react'
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './Security.css'

// COMPONENTES
// import Button from '../../../micro/Button/Button'

export default class Security extends Component {
    constructor(props) {
        super(props);
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
            //VALIDAÇÃO
            validInput: false,
            validPass: false,
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

        this.validationInput();
        this.validationPasswordOld();
        if (this.state.validInput == true && this.state.validPass == true) {
            this.setState({update: {senhaCliente: this.state.newPassword}});
            this.updatePassword();

            console.log(this.state.oldPassword);
            console.log(this.state.newPassword);
            console.log(this.state.newPasswordConfirm);
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
            this.setState({ validInput: true });
        }
    }

    //VALIDAÇÃO DA SENHA ANTIGA VS. A INSERIDA PELO USUÁRIO
    validationPasswordOld() {
        axios.get(`http://localhost:8080/cliente/valid-password-client/${this.state.oldPassword}/${this.state.client.codigoCliente}`)
            .then((response) => {
                if (response.data == true) {
                    this.setState({ messageInput1: '' });
                    return this.setState({ validPass: true });
                } else {
                    this.setState({ messageInput1: 'Senha inválida!' });
                }
            })
            .catch((erro) => {
                console.log("ERRO NA VALIDAÇÃO DA SENHA ANTIGA: " + erro)
            }
            );
    }

    //ATUALIZAÇÃO DA SENHA NO BANCO DE DADOS
    updatePassword() {

        axios.put(`http://localhost:8080/cliente/${this.state.client.codigoCliente}`, this.state.update)
            .then((response) => {
                alert("Senha alterada com sucesso!");
                this.setState({validInput: false});
                this.setState({validPass: false});
            })
            .catch((erro) => {
                console.log("NÃO ATUALIZOU A SENHA DO CLIENTE: " + erro)
            }
            );
    }



    render() {
        return (
            <>
                <Container className="security pt-1">
                    <h1 className="card-title-mvp">Segurança</h1>
                    <p className="pt-3 px-3"> Para sua segurança, utilize senhas com mais de 6
                        caracteres e, se possível, com números, letras maiúsculas,
                        minúsculas e caracteres especiais (exemplo: @.$%). </p>

                    <Form className="security-form" onSubmit={this.handleSubmit}>
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
                            <Button type="submit" className="btn btn-mvp btn-primario-mvp">Salvar</Button>
                        </Form.Group>
                    </Form>

                    {/* <Container className="p-3 mt-2 button-delete">
                        <Button className="btn btn-mvp btn-secundario-mvp">Deletar minha conta</Button>
                    </Container> */}
                </Container>
            </>
        )
    }
}