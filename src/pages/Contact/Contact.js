// REACT
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Contact.css'

// PÁGINAS/COMPONENTES
import email from '../../assets/images/icones/icon-email-contato.png'


function Contact(props) {

    return (
        <>
            <Container className="row contato m-0 p-0">
                {/* INÍCIO DO TÍTULO */}
                <Row className="m-0 p-5 contato-titulo">
                    <h1>Como podemos te ajudar?</h1>
                    <h2>Entre em contato por uma das redes abaixo</h2>
                </Row>
                {/* FIM DO TÍTULO */}

                {/* INÍCIO DO CONTATO */}
                <Row className="contato-contato m-0 px-5">
                    <Col className="info-contato">
                        <img src="/images/icones/icon-email-contato.png" alt="" />
                        <p>E-mail</p>
                        <p>Tem alguma dúvida?</p>
                        <p className="text-contato">contato @mvpskins.com.br</p>
                    </Col>

                    <Col className="info-contato">
                        <img src="/images/icones/icon-whatapp-contato.png" alt="" />
                        <p>WhatsApp</p>
                        <p>Você pode nos enviar mensagem a qualquer hora.</p>
                        <p className="text-contato">(11) 95151-5151</p>
                    </Col>

                    <Col className="info-contato">
                        <img src="/images/icones/icon-discord-contato.png" alt="" />
                        <p>Discord</p>
                        <p>Entre em nosso servidor para ter acesso à mais informações.</p>
                        <p className="text-contato"><a href="#">Clique aqui</a></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact