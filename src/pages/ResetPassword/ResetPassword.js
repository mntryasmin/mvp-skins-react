import React from 'react'
import './ResetPassword.css'
import InputPassword from '../../components/micro/Forms/Input/FormClient/InputPassword/InputPassword'
import InputPasswordConfirmation from '../../components/micro/Forms/Input/FormClient/InputPasswordConfirmation/InputPasswordConfirmation'
import { Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import Title from '../../components/micro/Title/Title'
import Button from '../../components/micro/Button/Button'
import axios from 'axios'
import { useParams } from 'react-router'
import swal from 'sweetalert';


function ResetPassword(props) {

    const {token} = useParams();
    console.log(token)
    var confirmPassword = '';
    const newPassword = {
        senha: ''
    }

    function setPassword(input, password){
        newPassword.senha = password;
    }

    function setConfirmationPassword(confirmationPassword){
        confirmPassword = confirmationPassword
    }

    //Valida se as senhas inseridas são iguais
    function validateForm() {
        if (newPassword.senha == '') {
            swal({
                title: "Senha inválida!",
                button: {
                    text: "Ok",
                    closeModal: true,
                },
              });
            return false;
        }
        if (newPassword.senha != confirmPassword) {
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
    
    function submitPassword(event){
        event.preventDefault()
        if(validateForm()){
            axios.post(`http://localhost:8080/cliente/mudar-senha?token=${token}`, newPassword)
            .then((response)=>{
                swal({
                    title: "Senha alterada com sucesso!",
                    button: {
                        text: "Ok",
                        closeModal: true,
                    },
                  });
                window.location.href='http://localhost:3000/'
            })
            .catch((error)=>{
                console.log("Ocorreu um erro: "+error)
            })
        }
    }

    return(
        <>
        <Container fluid className='d-flex flex-column container-reset-password content-container'>
                <Form className='d-flex flex-column'>
                    <Title title="REDEFINIÇÃO DE SENHA" class="mt-3" h1 />
                    <Row className="justify-content-center">
                        <Col sm={10} lg={6} className="resetpassword-box-input">
                            <FormLabel className='formlabel-resetpassword'>Crie uma nova senha</FormLabel>
                            
                            <InputPassword function={setPassword}/>
                            
                          
                            
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={10} lg={6} className="resetpassword-box-input">
                            <FormLabel className='formlabel-resetpassword'>Repita a senha</FormLabel>
                            <InputPasswordConfirmation function={setConfirmationPassword}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={10} lg={6} className="resetpassword-box-input">
                            <Button class='btn-mvp btn-mvp-orange-clean mt-5 p-2 btn-reset' label='salvar' onclick={(event)=>submitPassword(event)}/>
                        </Col>
                    </Row>
                </Form>
        </Container> 
        </>
    )
}

export default ResetPassword