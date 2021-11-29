import React from 'react'
import './Footer.css';
import { Row, Col } from "react-bootstrap";
import FooterText from './FooterText/FooterText'
import FooterLink from './FooterLink/FooterLink'
import Mastercard from '../../../assets/images/icones/icon-mastercard.png'
import Visa from '../../../assets/images/icones/icon-visa.png'
import LoginModal from '../../micro/LoginModal/LoginModal'

function Footer(props) {

    const btnCadastrar = () => {
        if (localStorage.getItem("Authorization")) {
            return (
                <>
                </>
            )
        }
        else{
            return <FooterLink label="Cadastre-se" route="/register"/>
        }
    }

    return (
        <>
            {/* inicio footer */}
            <footer className="footer pb-1">
                <Row className="footer-links-container py-2">
                    <Col className="footer-links col-3">
                        <LoginModal link customClass="footer-login-modal" />
                        {btnCadastrar()}
                        <FooterLink label="Fale conosco" route="/contact" />
                    </Col>

                    <Col className="col-6 dados-empresa py-0 my-0">
                        <p className="py-0 my-0">© MVP SKINS 2021 | CNPJ: 61.585.865/0001-51 |  TODOS OS DIREITOS RESERVADOS</p>
                    </Col>

                    {/* <!-- metodos de pagamento --> */}
                    <Col className="bandeiras-pagamento-container col-3">
                        <FooterText text="Métodos de pagamento" class="div-lg mb-2" />
                        <Row className="bandeiras-pagamento">
                            <img src={Mastercard} alt="ícone do mastercard" className="icon-footer" />
                            <img src={Visa} alt="ícone da visa" className="icon-footer" />
                        </Row>
                    </Col>
                </Row>
            </footer>
            {/* fim footer */}
        </>
    )
}

export default Footer;