// REACT
import React from 'react'
import { Container, Row } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Success.css'

// PÁGINAS/COMPONENTES
import iconSucess from '../../assets/images/icones/icon-sucess.png'

function Sucess(props) {

    return (
        <>
            <Container fluid className="row m-0 py-5 px-0 success-container">

                <Row className="col-9 my-0 p-5 success">
                    <Row className="row py-1 sucessImg"><img src={iconSucess} /></Row>
                    <h1 className="py-3 ">Pedido realizado com sucesso</h1>
                    <p className="py-3 px-3">O pedido {props.pedido} foi efetuado com sucesso. Após a confirmação do pagamento sua skin estará disponível em até 1 dia útil por meio de um Trade Link da Steam que você receberá em seu e-mail. </p>

                    <Row className="py-3 sucess-button">
                        <a className="col-3" href=""><button>Acompanhar pedido</button></a>
                        <a className="col-3" href=""><button>Voltar para a home</button></a>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default Sucess