import React from 'react'
import './Favorites.css'
import {Row, Nav,ListGroupItem, ListGroup, Container, Col, BreadcrumbItem, Breadcrumb} from 'react-bootstrap'
import Image1 from '../../assets/images/PRODUTOS/adaga-marcara-urbana.png'
import Image2 from '../../assets/images/PRODUTOS/luva-abate.png'
import Image3 from '../../assets/images/PRODUTOS/aug-momento.png'




function Favorites(props) {

    return (
        <React.Fragment>
            <div>Favorites</div>
            
            <Row>
                <Container>
                <Nav className="row d-none d-lg-flex col-2 d-flex py-3 px-0 mx-0 h-100 nav-dashboard">
                    <div className="text-center titulo-nav">MINHA CONTA</div>
                    <ListGroupItem>
                        <Breadcrumb>
                        <BreadcrumbItem href ="historico">Histórico de Compras</BreadcrumbItem>
                        <ListGroup className="ps-4 itens-nav nav-dados">Meus dados
                            <ListGroupItem className="ps-3">
                                <ListGroupItem>Dados Pessoais</ListGroupItem>
                                <BreadcrumbItem href ="cartoes-credito">Cartões de Credito</BreadcrumbItem>
                                <BreadcrumbItem href ="dados-conta">Dados da conta</BreadcrumbItem>
                                <BreadcrumbItem href ="seguranca">Alterar senha</BreadcrumbItem>
                            </ListGroupItem>
                        </ListGroup>
                        </Breadcrumb>
                    </ListGroupItem>
                </Nav>
                </Container>
            </Row>
            
            <Container fluid = "md">
                <Row className="justify-content-center"><Row>
                    <Col xs={11} my={3} p={2}>
                        <div id="historico" className="col-12 text-center titulo-div">Suas Skins Favoritas</div>
                        <Row className="row col-12 d-flex mx-0 justify-content-center"></Row>
                    </Col>
                
                </Row>

                    
                    <Col className="col-12 d-flex mx-0 justify-content-center"></Col>
                    <Col className="col-12 d-flex flex-row px-0 texto-coluna"></Col>
                    <Col className="d-none d-md-flex" md={2}><img className= "d-flex w-100" src={Image1} /></Col> 
                    <Col className="d-none d-md-flex" md={3} md={4}>FACAS | ADAGA MARCARA </Col>
                    <Col lg={3} md={2}>R$1.482,00</Col>

                </Row>
            </Container>

            <Container fluid = "md">
            <Row className="row col-12 d-flex mx-0 justify-content-center">
                <div className="col-12 d-flex flex-row px-0 texto-coluna"></div>
                <div className="col-12 d-flexnone d-md-flex col-md-2"><img className="d-flex w-100" src={Image2} /></div>
                <Col lg={3} md={4}>ARMAS | BATRÁQUIO BRONZEADO</Col>
                <Col lg={3} md={2}>R$1.482,00</Col>

            </Row>
            </Container>

            <Container fluid = "md">

            <Row className="row col-12 d-flex mx-0 justify-content-center"> </Row>
            <Row className="col-12 d-flex flex-row px-0 texto-coluna"></Row>
            <div className="d-none d-md-flex col-md-2"><img className="d-flex w-100"src={Image3} /></div>
            <Col xs={3} md={4}>LUVAS ESPORTIVAS | BATRÁQUIO BRONZEADO</Col>
            <Col xs={3} md={2}>R$1.482,00</Col>
            </Container>

          






        </React.Fragment>
    )
}
export default Favorites