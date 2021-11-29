// REACT
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// ESTILO
import '../../assets/css/Style.css'
import './Contact.css'

// PÁGINAS/COMPONENTES
import email from '../../assets/images/icones/icon-email-contato.png'
import tel from '../../assets/images/icones/icon-whatapp-contato.png'
import discord from '../../assets/images/icones/icon-discord-contato.png'


function Contact(props) {

    return (
        document.title = `SKINS CS:GO | Fale conosco`,

        <>
            <Container className="contact content-container">
                <Row className="pt-5">
                    <h1 className="contact-h1">Como podemos te ajudar?</h1>
                    <p className="pb-5">Entre em contato por uma das redes abaixo</p>
                </Row>

                <Row className="pb-5 contact-container">
                    <Col xs={12} sm={8} md={4} lg={4} xl={4} className="contact-infos px-4 border-contact">
                        <img className="py-2 contact-icon" src={email} alt="" />
                        <p>E-mail</p>
                        <p className="contact-info-description">Tem alguma dúvida? Mande um e-mail para a nossa equipe!</p>
                        <a className="contact-link"><p>mvpskins@gmail.com</p></a>

                    </Col>

                    <Col xs={12} sm={8} md={4} lg={4} xl={4} className="contact-infos px-4 border-contact">
                        <img className="py-2 contact-icon" src={tel} alt="" />
                        <p>WhatsApp</p>
                        <p className="contact-info-description">Você pode nos enviar mensagem a qualquer hora.</p>
                        <a className="contact-link"><p>(11) 95151-5151</p></a>
                    </Col>

                    <Col xs={12} sm={8} md={4} lg={4} xl={4} className="contact-infos px-4">
                        <img className="py-2 contact-icon" src={discord} alt="" />
                        <p>Discord</p>
                        <p className="contact-info-description">Entre em nosso servidor para ter acesso à mais informações.</p>
                        <a href="https://discord.com/" className="contact-link" target="_blank"><p>Clique aqui</p></a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact