import React from 'react'
import './Favorites.css'
import {Row,  Container, Col, Breadcrumb, BreadcrumbItem}  from 'react-bootstrap'
import favorite from '../../assets/images/icones/icon-coracao-produto.png'
import addCart from '../../assets/images/icones/icon-add-cart.png'
import Card from '../../components/micro/CardProduct/CardProduct'
import Title from '../../components/micro/Title/Title'
import product from '../../assets/images/PRODUTOS/luva-abate.png'
import CarouselProducts from '../../components/macro/CarouselProducts/CarouselProducts'



function Favorites(props) {
    return (

        <React.Fragment>

            <div className="div-favoritos">
                <Col xs={11} md={10} className="m-0"></Col>
                <Title title="FAVORITOS" />
                <Row className="justify-content-center"></Row>
                


                <Breadcrumb bsPrefix="" className="mt-2">
                    <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Categoria</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Subcategoria</Breadcrumb.Item>
                    <Breadcrumb.Item active>Favoritos</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Container fluid className="p-0 my-3 favoritos">
                <Row className="m-0">
                    <Col lg={12} className="coluna-favoritos">
                        <h1 className="favorites-h1">Suas Skins Favoritas</h1>
                        <Row className="row col-12 d-flex mx-0 justify-content-center"></Row>
                    </Col>
                </Row>



                <Container xs={4} sm={4} md={3} lg={2} xl={2} className="p-o mx-0 card-container">
                    <a href="" className="p-0 mx-0 card card-link">
                        <Container className="p-1 my-0 card-hover">
                            <a href=""><img className="card-icon" src={favorite} alt="Favoritar produto" /></a>
                            <a href="">
                                <img className="card-icon" src={addCart} alt="Favoritar produto" />
                            </a>
                        </Container>

                        <Container className="p-1 my-2 card-product">
                            <Container className="card-image"></Container>
                            <img className="card-img-top" src={product} alt="Produto" />
                        </Container>
                        <hr className="p-0 mx-0 my-2 card-line" />
                        <Col className="py-1 px-1 card-body card-price-container">
                            <p className="mb-2 card-description">AK-47 | LINHAS VERMELHAS {props.description}</p>
                            <p className="my-0 card-price"> de R$450,00 {props.price}</p>
                            <p className="my-0 card-price-final"> por R$399,99 {props.priceDiscount}</p>
                        </Col>

                    </a>
                </Container>

                <Container xs={4} sm={4} md={3} lg={2} xl={2} className="p-o mx-0 card-container">
                    <a href="" className="p-0 mx-0 card card-link">
                        <Container className="p-1 my-0 card-hover">
                            <a href=""><img className="card-icon" src={favorite} alt="Favoritar produto" /></a>
                            <a href="">
                                <img className="card-icon" src={addCart} alt="Favoritar produto" />
                            </a>
                        </Container>

                        <Container className="p-1 my-2 card-product">
                            <Container className="card-image"></Container>
                            <img className="card-img-top" src={product} alt="Produto" />
                        </Container>
                        <hr className="p-0 mx-0 my-2 card-line" />
                        <Col className="py-1 px-1 card-body card-price-container">
                            <p className="mb-2 card-description">AK-47 | LINHAS VERMELHAS {props.description}</p>
                            <p className="my-0 card-price"> de R$450,00 {props.price}</p>
                            <p className="my-0 card-price-final"> por R$399,99 {props.priceDiscount}</p>
                        </Col>

                    </a>
                </Container>

               
            </Container > 
    </React.Fragment >
    )
}
export default Favorites