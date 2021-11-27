import React from 'react'
import './Error.css'
import Erro from '../../assets/images/Erros/Error-404.webp'
import { Container, Row } from 'react-bootstrap'

function Error() {

    return (
        <>
            <Container fluid className="background-page content-container m-0 p-5">
                <h1 className="title">
                    Ops... houve algum engano.
                    <br />
                    Essa página não existe. Tente novamente.
                </h1>
                <img src={Erro} height='490' className='img-error' />
                <a href="/" className="btn-mvp btn-mvp-orange-clean mx-5">
                    Voltar para a home
                </a>
            </Container>


        </>
    )
}
export default Error