// REACT
import React, { Component } from 'react'
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './Security.css'

// COMPONENTES
// import Button from '../../../micro/Button/Button'
import Header from '../../../template/Header/Header'

export default class Security extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // CLIENTE
            client: {},
            tokenToSearch: '',
            //SENHAS
            oldPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
            //VALIDAÇÕES
            validOldPass: null,
            validInput: null,
            //MENSAGENS DE VALIDAÇÕES DAS SENHAS
            messageInput1: '',
            messageInput2: '',
            messageInput3: '',
        }

        this.handleChangeOP = this.handleChangeOP.bind(this);
        this.handleChangeNP = this.handleChangeNP.bind(this);
        this.handleChangeNPC = this.handleChangeNPC.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount.bind(this);
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

    componentDidMount() {
        const URL = "http://localhost:8080/cliente/token/"
        const token = localStorage.getItem("Authorization")

        if (localStorage.getItem("Authorization")) {
            this.setState({tokenToSearch: token.replace("Bearer ", "")});
            axios.get(`${URL}` + this.state.tokenToSearch)
            .then(async (response) => {
                const cliente = await response.data;
                this.setState({client: cliente});
                console.log(cliente);

            })
        }
        else {
            localStorage.setItem("Authorization", '')
        }
    }

    //AÇÃO DO BOTÃO DE SALVAR
    handleSubmit(event) {
        event.preventDefault();

        this.componentDidMount();

        console.log(this.state.client);
        this.validationInput();
        if (this.state.validInput != false) {
            console.log("VALIDOU O INPUT!");

            this.validationPasswordOld();
            if (this.validOldPass == true) {
                console.log("VALIDOU A SENHA ANTIGA!");
                this.setState({ invalidPassword: '' });

                this.updatePassword();
            } else {
                this.setState({ invalidPassword: 'Senha incorreta!' });
            }
        } else {
            console.log("NÃO VALIDOU O INPUT");
        }
    }

    //VALIDAÇÃO DOS INPUTS DO FORMULÁRIO DE MUDANÇA DE SENHA
    validationInput() {
        if (this.state.oldPassword == '') {
            this.setState({ messageInput1: 'Este campo não deve ficar vazio' });
            this.setState({ validInput: false });
            console.log('1');
        } else {
            this.setState({ messageInput1: '' });
        }

        if (this.state.newPassword == '') {
            this.setState({ messageInput2: 'Este campo não deve ficar vazio' });
            this.setState({ validInput: false });
            console.log('2');

        } else {
            this.setState({ messageInput2: '' });
        }

        if (this.state.newPasswordConfirm == '') {
            this.setState({ messageInput3: 'Este campo não deve ficar vazio' });
            this.setState({ validInput: false });
            console.log('3');

        } else {
            this.setState({ messageInput3: '' });
        }

        if (this.state.newPassword != this.state.newPasswordConfirm) {
            this.setState({ messageInput2: 'As senhas são divergentes' });
            this.setState({ messageInput3: 'As senhas são divergentes' });
            this.setState({ validInput: false });
            console.log('4');

        } else {
            this.setState({ messageInput2: '' });
            this.setState({ messageInput3: '' });
        }
    }

    //VALIDAÇÃO DA SENHA ANTIGA VS. A INSERIDA PELO USUÁRIO
    validationPasswordOld() {
        axios.get(`http://localhost:8080/cliente/valid-password-client/${this.state.oldPassword}/${this.state.client.codigoCliente}`)
            .then((response) => {
                if (response.data == true) {
                    this.setState({ validOldPass: response.data });
                }
            })
            .catch((erro) => {
                console.log("ERRO NA VALIDAÇÃO DA SENHA ANTIGA: " + erro)
            }
            );
        return this.state.validOldPass;
    }

    //ATUALIZAÇÃO DA SENHA NO BANCO DE DADOS
    updatePassword() {
        axios.put(`http://localhost:8080/cliente/${this.state.client.codigoCliente}`, this.state.client)
            .then((response) => {
                console.log("ATUALIZOU A SENHA DO CLIENTE! ");
                console.log(response.data);

                alert("Senha alterada com sucesso!");
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