import React from 'react'
import './Footer.css';
import { Row, Col, Container } from "react-bootstrap";
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
                                <div className="texto-footer">INSTITUCIONAL</div>
                                <div className="texto-footer">PARCEIROS</div>
                                <div className="texto-footer">TERMOS DE SERVIÇO</div>
                                <div className="texto-footer">POLÍTICA DE PRIVACIDADE</div>
                                <div className="texto-footer">POLÍTICA DE COOKIES</div>
                            </Col>

                            {/* segunda coluna */}
                            <Col lg={4}>
                                <div className="texto-footer">COMO COMPRAR</div>
                                <div className="texto-footer">COMO ME CADASTRAR</div>
                                <div className="texto-footer">PAGAMENTOS</div>
                                <div className="texto-footer">DEVOLUÇÕES</div>
                                <div className="texto-footer">F.A.Q</div>
                            </Col>
                            {/* terceira coluna */}
                            <Col lg={4}>
                                <div className="texto-footer"><a className="link-footer" href="">LOGIN</a></div>
                                <div className="texto-footer"><a className="link-footer" href="/register">CADASTRE-SE</a></div>
                                <div className="texto-footer"><a className="link-footer" href="">RECUPERAR SENHA</a></div>
                                <div className="texto-footer"><a className="link-footer" href="/contact">FALE CONOSCO</a></div>
                            </Col>

                        </Col>
                        {/* dados da empresa */}
                        <Col lg={12}>
                            <div className="texto-footer pt-3">© MVP SKINS 2021 | CNPJ: 61.585.865/0001-51 |  TODOS OS DIREITOS RESERVADOS</div>
                        </Col>
                    </Row>
                </Container>


                {/* quarta coluna */}
                <Col xs={12} lg={4}>
                    {/* redes sociais */}
                    <div className="texto-footer mb-2">SIGA A GENTE</div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={2} lg={3} className="texto-footer">
                                <a className="link-footer" href="https://www.facebook.com/" target="_blank">
                                    <img src={Facebook} alt="ícone do facebook" className="icon-footer" />
                                </a>
                            </Col>

                            <Col xs={2} lg={3} className="texto-footer">
                                <a className="link-footer texto-footer" href="https://twitter.com/" target="_blank">
                                    <img src={Twitter} alt="ícone do twitter" className="icon-footer" />
                                </a>
                            </Col>

                            <Col xs={2} lg={3} className="texto-footer">
                                <a className="link-footer texto-footer" href="https://discord.com/" target="_blank">
                                    <img src={Discord} alt="ícone do discord" className="icon-footer" />
                                </a>
                            </Col>

                            <Col xs={2} lg={3} className="texto-footer">
                                <a className="link-footer texto-footer" href="https://www.instagram.com/" target="_blank">
                                    <img src={Instagram} alt="ícone do instagram" className="icon-footer" />
                                </a>
                            </Col>
                        </Row>
                    </Container>

                    <hr className="linha-hr" />

                    {/* <!-- metodos de pagamento --> */}
                    <div className="div-lg texto-footer mb-2">MÉTODOS DE PAGAMENTO</div>
                    <Container>
                        <Row className="footer-lg mb-1">
                            <Col lg={4} className="texto-footer px-0">
                                <img src={Mastercard} alt="ícone do mastercard" className="icon-footer" />
                            </Col>

                            <Col lg={4} className="texto-footer px-0">
                                <img src={Visa} alt="ícone da visa" className="icon-footer" />
                            </Col>

                            <Col lg={4} className="texto-footer px-0">
                                <img src={Pix} alt="ícone do pix" className="icon-footer" />
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="d-lg-none">
                            <div className="texto-footer"><a className="link-footer" href="">LOGIN</a></div>
                            <div className="texto-footer p-1"><a className="link-footer" href="/register">CADASTRE-SE</a></div><br />
                            <div className="texto-footer p-1"><a className="link-footer" href="">RECUPERAR SENHA</a></div><br />
                            <div className="texto-footer"><a className="link-footer" href="/contact">FALE CONOSCO</a></div>
                            <div className="texto-footer p-1">© MVP SKINS 2021 | CNPJ: 61.585.865/0001-51 |  TODOS OS DIREITOS RESERVADOS</div>
                        </Row>
                    </Container>
                </Col>
            </footer>
            {/* fim footer */}
        </>
    )
}

export default Footer;