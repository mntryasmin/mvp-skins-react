import React from 'react'
import './Footer.css';
import {Row, Col, Container} from "react-bootstrap";
import FooterText from './FooterText/FooterText'
import FooterLink from './FooterLink/FooterLink'
import Facebook from '../../../assets/images/icones/icon-facebook.png'
import Twitter from '../../../assets/images/icones/icon-twitter.png'
import Discord from '../../../assets/images/icones/icon-discord-contato.png'
import Instagram from '../../../assets/images/icones/icon-instagram.png'
import Mastercard from '../../../assets/images/icones/icon-mastercard.png'
import Visa from '../../../assets/images/icones/icon-visa.png'
import Pix from '../../../assets/images/icones/icon-pix.png'
import LoginModal from '../../micro/LoginModal/LoginModal'

function Footer(props) {

    return (
        <>
        {/* inicio footer */}
        <footer className="footer">
        <Container className="p-0">
            <Row className="footer-lg">
                <Col lg={8} className="coluna-footer">
                    {/* primeira coluna */}
                    <Col lg={4}>
                        <FooterText text="INSTITUCIONAL"/>
                        <FooterText text="PARCEIROS"/>
                        <FooterText text="TERMOS DE SERVIÇO"/>
                        <FooterText text="POLÍTICA DE PRIVACIDADE"/>
                        <FooterText text="POLÍTICA DE COOKIES"/>
                    </Col>
                    
                    {/* segunda coluna */}
                    <Col lg={4}>
                        <FooterText text="COMO COMPRAR"/>
                        <FooterText text="COMO ME CADASTRAR"/>
                        <FooterText text="PAGAMENTOS"/>
                        <FooterText text="F.A.Q"/>
                    </Col>
                    {/* terceira coluna */}
                    <Col lg={4}>
                        <FooterLink label="LOGIN" route="/"/>
                        <FooterLink label="CADASTRE-SE" route="/register"/>
                        <FooterLink label="RECUPERAR SENHA" route="/"/>
                        <FooterLink label="FALE CONOSCO" route="/contact"/>
                    </Col>
                        
                </Col>
                    {/* dados da empresa */}
                    <Col lg={12}>
                    <FooterText text="© MVP SKINS 2021 | CNPJ: 61.585.865/0001-51 |  TODOS OS DIREITOS RESERVADOS" class="p-3"/>
                    </Col>
            </Row>
        </Container>
               
                {/* quarta coluna */}
                <Col xs={12} lg={4}>
                    {/* redes sociais */}
                    <FooterText text="SIGA A GENTE" class="mb-2"/>
                    <Container>
                        <Row className="justify-content-center">

                            <Col xs={2} lg={3} className="footer-image">
                                    <a className="link-footer" href="https://www.facebook.com/" target="_blank">
                                        <img src={Facebook} alt="ícone do facebook" className="icon-footer"/>
                                    </a>
                            </Col>

                            <Col xs={2} lg={3} className="footer-image">
                                    <a className="link-footer texto-footer" href="https://twitter.com/" target="_blank">
                                        <img src={Twitter} alt="ícone do twitter" className="icon-footer"/>
                                    </a>
                            </Col>
                                
                            <Col xs={2} lg={3} className="footer-image">

                                <a className="link-footer texto-footer" href="https://discord.com/" target="_blank">
                                    <img src={Discord} alt="ícone do discord" className="icon-footer" />
                                </a>
                            </Col>
                                
                            <Col xs={2} lg={3} className="footer-image">

                                <a className="link-footer texto-footer" href="https://www.instagram.com/" target="_blank">
                                    <img src={Instagram} alt="ícone do instagram" className="icon-footer" />
                                </a>
                            </Col>
                        </Row>
                    </Container>

                    <hr className="linha-hr" />

                    {/* <!-- metodos de pagamento --> */}
                    <FooterText text="MÉTODOS DE PAGAMENTO" class="div-lg mb-2"/>
                    <Container>
                        <Row className="footer-lg mb-1">

                            <Col lg={6} className="footer-image px-0">
                                    <img src={Mastercard} alt="ícone do mastercard" className="icon-footer"/>
                            </Col>

                            <Col lg={6} className="footer-image px-0">
                                    <img src={Visa} alt="ícone da visa" className="icon-footer"/>
                            </Col>  
                        </Row>
                    </Container>

                    <Container>
                        <Row className="d-lg-none">
                            <FooterLink label="LOGIN" route="/"/>
                            <FooterLink label="CADASTRE-SE" route="/register"/>
                            <FooterLink label="RECUPERAR SENHA" route="/"/>
                            <FooterLink label="FALE CONOSCO" route="/contact"/>
                            <FooterText text="© MVP SKINS 2021 | CNPJ: 61.585.865/0001-51 |  TODOS OS DIREITOS RESERVADOS" class="p-3"/>

                        </Row>
                    </Container>
                </Col>
            </footer>
            {/* fim footer */}
        </>
    )
}

export default Footer;