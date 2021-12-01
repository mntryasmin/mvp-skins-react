import React from 'react'
import './Footer.css';
import { Row, Col } from "react-bootstrap";
import FooterText from './FooterText/FooterText'
import FooterLink from './FooterLink/FooterLink'
import Mastercard from '../../../assets/images/icones/icon-mastercard.png'
import Visa from '../../../assets/images/icones/icon-visa.png'
import Amex from '../../../assets/images/icones/icon-amex.png'
import Pix from '../../../assets/images/icones/icon-pix.png'
import CodigoBarra from '../../../assets/images/icones/icon-codigo-de-barras.png'

function Footer(props) {

    const btnCadastrar = () => {
        if (localStorage.getItem("Authorization")) {
            return (
                <>
                </>
            )
        }
        else {
            return <FooterLink label="Cadastre-se" route="/register" />
        }
    }

    return (
        <>
            {/* inicio footer */}
            <footer className="footer">
                <Col xs={12} sm={12} md={3} lg={3} xl={3} className="footer-links my-3">
                    
                    {btnCadastrar()}
                    <FooterLink label="Fale conosco" route="/contact" />
                </Col>

                {/* <!-- metodos de pagamento --> */}
                <Col xs={12} sm={12} md={3} lg={3} xl={3} className="bandeiras-pagamento-container my-3">
                    <FooterText text="Métodos de pagamento" />
                    <Row className="bandeiras-pagamento">
                        <img src={Mastercard} alt="ícone do mastercard" className="icon-footer" />
                        <img src={Visa} alt="ícone da visa" className="icon-footer" />
                        <img src={Amex} alt="ícone do AMEX" className="icon-footer" />
                        <img src={Pix} alt="ícone do Pix" className="icon-footer" />
                        <img src={CodigoBarra} alt="ícone do Código de barras" className="icon-footer" />
                    </Row>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="dados-empresa my-3">
                    <p>© MVP SKINS 2021 | CNPJ: 61.585.865/0001-51 |  TODOS OS DIREITOS RESERVADOS</p>
                </Col>
            </footer>
            {/* fim footer */}
        </>
    )
}

export default Footer;