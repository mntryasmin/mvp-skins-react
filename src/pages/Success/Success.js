// REACT
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Success.css'

// PÁGINAS/COMPONENTES
import iconSucess from '../../assets/images/icones/icon-sucess.png';
import Title from '../../components/micro/Title/Title';
import Button from '../../components/micro/Button/Button';

function Sucess(props) {

    return (
        <>
            <Container fluid className="row m-0 py-5 px-0 success-container  content-container">

                <Row className="col-9 my-0 p-5 success justify-content-center">
                    <Row className="row py-1 sucessImg"><img src={iconSucess} /></Row>
                    <Title title="Pedido realizado com sucesso" class="py-3 "/>
                    <Title title="Número do pedido: 86"/>
                    <p className="py-3 px-3 sucess-text">O pedido {props.pedido} foi efetuado com sucesso. Após a confirmação do pagamento sua skin estará disponível em até 1 dia útil por meio de um Trade Link da Steam que você receberá em seu e-mail. </p>

                    <Row className="py-3 sucess-button">
                        <Col md={6} className="success-button-dashboard">
                            <Button route="/dashboard" label="Acompanhar pedido" class="btn-primary-mvp p-2 w-100" navigation/>
                    '   </Col>
                        <Col md={6} className="success-button-home">
                            <Button route="/" label="Voltar para a home" class="btn-primary-mvp p-2 w-100" navigation/>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default Sucess