import React from 'react'
import './Register.css'
import axios from 'axios'
import { Container, FormGroup, Form, Col, FormLabel, Row } from 'react-bootstrap'
import RegisterForm from '../../components/macro/Forms/Register/RegisterForm'
import ButtonCustom from '../../components/micro/Button/Button.js'
import Title from '../../components/micro/Title/Title'
import { Link } from 'react-router-dom';
import If from '../../components/micro/If/If';
import LoginModal from '../../components/micro/LoginModal/LoginModal';
import swal from 'sweetalert';

function Register(props) {

    var confirmPassword = '';

    var formValidated = false;

    const client = {
        nomeCliente: '',
        emailCliente: '',
        numeroTelefone: '',
        tradeLink: '',
        genero: {
            codigoGenero: ''
        },
        dataNascimento: '',
        senhaCliente: ''
    }

    function setPasswordConfirmation(passwordConfirmation) {
        confirmPassword = passwordConfirmation;
    }

    function createClient(input, description) {
        switch (input) {
            case 'name':
                client.nomeCliente = description;
                break;
            case 'email':
                client.emailCliente = description;
                break;
            case 'phoneNumber':
                client.numeroTelefone = description;
                break;
            case 'trade':
                client.tradeLink = description;
                break;
            case 'gender':
                client.genero.codigoGenero = description;
                break;
            case 'date':
                client.dataNascimento = description;
                break;
            case 'password':
                client.senhaCliente = description;
                break;
            default:
                console.log("campo não identificado " + input);
        }
    }

    const replacePhone = (phone) => {
        var phoneInt = phone
        for (let i = 0; i < phone.length; i++) {
            var result = phone.charAt(i);
            if (result == "(") {
                phoneInt = phone.replace("(", "");
            }
            if (result == ")") {
                phoneInt = phoneInt.replace(")", "")
            }
            if (result == " ") {
                phoneInt = phoneInt.replace(" ", "")
            }
            if (result == "-") {
                phoneInt = phoneInt.replace("-", "")
            }
        }
        return phoneInt;
    }

    function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
        var d = new Date,
            ano_atual = d.getFullYear(),
            mes_atual = d.getMonth() + 1,
            dia_atual = d.getDate(),

            ano_aniversario = +ano_aniversario,
            mes_aniversario = +mes_aniversario,
            dia_aniversario = +dia_aniversario,

            quantos_anos = ano_atual - ano_aniversario;

        if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
            quantos_anos--;
        }

        return quantos_anos < 0 ? 0 : quantos_anos;
    }

    function validateForm() {
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const regexTrade = /(?:https?:\/\/)?steamcommunity\.com\/(?:profiles|id)\/[a-zA-Z0-9]+/
        const phoneInt = replacePhone(client.numeroTelefone)

        const year = client.dataNascimento.substr(0,4)
        const mouth =client.dataNascimento.substr(5,2)
        const day = client.dataNascimento.substr(-2)

        const age = idade(year, mouth, day)

        if (client.nomeCliente == '') {
            swal({
                title: "Nome inválido!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (client.emailCliente == '' || !regexEmail.test(client.emailCliente)) {
            swal({
                title: "Email inválido!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (phoneInt == '' || phoneInt.length < 10) {
            swal({
                title: "Telefone inválido!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (client.tradeLink == '' || !regexTrade.test(client.tradeLink)) {
            swal({
                title: "Tradelink inválido!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (client.genero.codigoGenero == '' || client.genero.codigoGenero == 'Selecione o gênero') {
            swal({
                title: "A identidade de gênero deve ser preenchida!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (client.dataNascimento == '') {
            swal({
                title: "Data de nascimento inválida!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (client.dataNascimento.length > 10 || client.dataNascimento.length < 10){
            
            swal({
                title: "A data de nascimento está em um formato inválido!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (age == 0){
            swal({
                title: "Data de nascimento inválida",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (age < 18){
           
            swal({
                title: "Cadastro permitido apenas para maiores de 18 anos!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (age >= 100){
            swal({
                title: "data de nascimento inválida",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (client.senhaCliente == '') {
            swal({
                title: "Senha inválida!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });          
            return false;
        }
        if (client.senhaCliente.length < 6) {
            swal({
                title: "A senha deve possuir ao menos 6 caracteres",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });          
            return false;
        }
        if (client.senhaCliente != confirmPassword) {
            swal({
                title: "As senhas devem ser iguais!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        return true;
    }

    function submitClient(event) {
        event.preventDefault();
        if (validateForm()) {
            axios.post("http://localhost:8080/cliente", client)
                .then((response) => {
                    axios.post("http://localhost:8080/cliente/email/cadastro", response.data)
                    .then((response)=>{
                        swal({
                            title: "Cliente cadastrado com sucesso!",
                            button: {
                                text: "Ok",
                                closeModal: true,
                            },
                          });
                        setTimeout(()=>{
                            window.location.href = 'http://localhost:3000'
                        }, 3000)
                    })
                    .catch((error)=>{
                        console.log("Erro ao enviar email "+error)
                    })
                })
                .catch((erro) => {
                    swal({
                        title: "Email já cadastrado!",
                        button: {
                            text: "Ok",
                            closeModal: true,
                        },
                      });
                    console.log("Ocorreu um erro " + erro)
                })
            formValidated = true;
            console.log(formValidated)
            // return(
            //     <>
            //     <div>
            //         {(onClick)=><LoginModal link/>}
            //     </div>
            //     </>
            // )
        }
    }

    return (
        document.title = `SKINS CS:GO | Cadastro`,

        <>
            <div className="registration-container content-container">
                <Col lg={2} xl={2} className="registration-banner">

                </Col>
                <Col lg={10} xl={10} className="py-5">
                    <Form className='registration'>
                        <Title title="CADASTRO" h1 />

                        <Row className='row-input'>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>Nome</FormLabel>
                                <RegisterForm name function={createClient} />
                            </Col>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>E-mail</FormLabel>
                                <RegisterForm email function={createClient} />
                            </Col>
                        </Row>
                        <Row className='row-input'>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>Telefone</FormLabel>
                                <RegisterForm phoneNumber function={createClient} />
                            </Col>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>Trade-Link</FormLabel>
                                <RegisterForm trade function={createClient} />
                                <a href='https://www.techtudo.com.br/noticias/2016/02/como-gerar-um-steam-trade-link-para-troca-de-itens-na-plataforma.ghtml'
                                    target='_blank'
                                    className='link-custom'>
                                    Onde obtenho o trade-link?
                                </a>
                            </Col>
                        </Row>
                        <Row className='row-input'>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>Gênero</FormLabel>
                                <RegisterForm gender function={createClient} />
                            </Col>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>Data de Nascimento</FormLabel>
                                <RegisterForm date function={createClient} />
                            </Col>
                        </Row>
                        <Row className='row-input'>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>Crie uma senha</FormLabel>
                                <RegisterForm password function={createClient} />
                            </Col>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="box-input">
                                <FormLabel>Repita a senha</FormLabel>
                                <RegisterForm passwordConfirmation function={setPasswordConfirmation} />
                            </Col>
                        </Row>
                        <Row className='row-input mx-4'>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="btn-cancel">
                                <ButtonCustom navigation route='/' class='btn-mvp btn-mvp-orange-solid' label='cancelar' />
                            </Col>
                            <Col xs={9} sm={9} md={9} lg={5} xl={5} className="btn-submit">
                                <ButtonCustom class='btn-mvp-orange-clean layout-btn' label='cadastrar' onclick={(event) => submitClient(event)} />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </div>
        </>
    )
}

export default Register