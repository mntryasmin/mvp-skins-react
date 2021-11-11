import React from 'react'
import './Error.css'
import Erro from '../../assets/images/Erros/Error-404.webp'
import { Container, Row, Button } from 'react-bootstrap'

function Error() {

    return (
        <>
            <Container fluid className="background-page  content-container">
                <Container className="d-flex justify-content-center text-center">
                    <Row>
                        <h1 className="title">
                            Houve algum engano...
                            <br />
                            Essa página não existe, tente outra URL
                        </h1>
                        <img src={Erro} height='490' className='img-error' />
                        <a href="localhost:3000/" className="link-error">
                            <h1 className='text-error'>
                                Retornar para Home
                            </h1>
                        </a>
                    </Row>
                </Container>
            </Container>


        </>
    )
}
export default Error