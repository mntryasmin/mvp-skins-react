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
            client: {},
            oldPassword: '',
            validationOldPassword: '',
            newPassword: '',
            newPasswordConfirm: '',
            validationNewPassword: '',
            invalidPassword: '',
        }

        this.handleChangeOP = this.handleChangeOP.bind(this);
        this.handleChangeNP = this.handleChangeNP.bind(this);
        this.handleChangeNPC = this.handleChangeNPC.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        axios.get(`http://localhost:8080/cliente/1`, this.state.client)
            .then((response) => {
                if (response.data != null) {
                    const validInput = this.validationInput();
                    if (validInput == true) {
                        const validOldPassword = this.validationPasswordOld(this.state.oldPassword, response.data.id);
                        if(this.state.oldPassword == response.data.senhaCliente) {
                            this.setState({ invalidPassword: ''});
                            this.setState({ client: response.data });
                            this.handleUpdate();
                        } else {
                            this.setState({ invalidPassword: 'Senha incorreta!'});
                            
                        }
                    }
                } else {
                    console.log("Usuário inexistente");
                }
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            }
            );
    }

    validationPasswordOld(password, idClient) {
        axios.get(`http://localhost:8080/valid-password-client/${password}/${idClient}`)
        .then((response) => {
            if(response.data == true) {
                console.log(response.data);
                return true;
            } else {
                return false;
            }
        })
        .catch((erro) => {
            console.log("Ocorreu um erro " + erro)
        }
    );
    }


    validationInput() {
        if (this.state.oldPassword == '') {
            this.setState({ validationOldPassword: 'Este campo não deve ficar vazio' });
            return false;
        } else {
            this.setState({ validationOldPassword: ''});
        }
        
        if (this.state.newPassword == '' || this.state.newPasswordConfirm == '') {
            this.setState({ validationNewPassword: 'Este campo não deve ficar vazio' });
            return false;
        } else {
            this.setState({ validationNewPassword: ''});
        }
        
        if (this.state.newPassword != this.state.newPasswordConfirm) {
            this.setState({ validationNewPassword: 'As senhas são divergentes' });
            return false;
        } else {
            this.setState({ validationNewPassword: ''});
        }

        return true;
    }

    handleUpdate() {
        axios.put(`http://localhost:8080/cliente/1`, this.state.client)
            .then((response) => {
                console.log(this.state.client);
                alert("Senha alterada com sucesso!");
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
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
                            <p> {this.state.validationOldPassword} {this.state.invalidPassword}</p>
                        </Form.Group>

                        <Form.Group lg={6} xl={6} className="security-form-org ">
                            <Form.Label className="py-2">Digite a senha nova</Form.Label>
                            <Form.Control value={this.state.newPassword} onChange={this.handleChangeNP} className="py-2" type="" name="newPassword" />
                            <p> {this.state.validationNewPassword}</p>

                            <Form.Label className="py-2">Repita a senha nova</Form.Label>
                            <Form.Control value={this.state.newPasswordConfirm} onChange={this.handleChangeNPC} className="py-2" type="" name="newPasswordConfirm" />
                            <p> {this.state.validationNewPassword}</p>
                        </Form.Group>

                        <Form.Group className="button-save">
                            <Button type="submit" className="btn btn-mvp btn-primario-mvp">Salvar</Button>
                        </Form.Group>
                    </Form>

                    <Container className="p-3 mt-2 button-delete">
                        <Button className="btn btn-mvp btn-secundario-mvp">Deletar minha conta</Button>
                    </Container>
                </Container>
            </>
        )
    }
}