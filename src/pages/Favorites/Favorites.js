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

            <div className="div-favoritos1">
                <Col xs={2} md={2}  className="mb-1"></Col>
                <Title title="SKINS FAVORITAS" />
                <Row className="justify-content-center"></Row>
            </div>

         
                    
                <div className= "py-3 px-3 mb-0 fav container-fluid d-flex">
                <Container xs={2} sm={4} md={3} lg={3} xl={2} className="p-o mx-0 card-container">
                    <a href="" className="p-0 mx-0 card card-link">
                        <Container className="p-1 my-0 card-hover">
                           
                            <a href="">
                                <img className="card-icon" src={addCart} alt="Favoritar produto" />
                            </a>
                        </Container>

                        <Container className="p-1 my-2 card-product">
                            <Container className="card-image"></Container>
                            <img className="card-img-top" src={product} alt="Produto" />
                        </Container>
                        <hr className="p-0 mx-0 my-1 card-line" />
                        <Col className="py-1 px-1 card-body card-price-container">
                            <p className="mb-2 card-description">AK-47 | LINHAS VERMELHAS {props.description}</p>
                            <p className="my-0 card-price"> de R$450,00 {props.price}</p>
                            <p className="my-0 card-price-final"> por R$399,99 {props.priceDiscount}</p>
                        </Col>

                    </a>
                </Container>

                
                <Container xs={2} sm={4} md={3} lg={2} xl={2} className="p-o mx-0 card-container">
                    <a href="" className="p-0 mx-0 card card-link">
                        <Container className="p-1 my-0 card-hover">
                            
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
                <Container xs={2} sm={4} md={3} lg={2} xl={2} className="p-o mx-0 card-container">
                    <a href="" className="p-0 mx-0 card card-link">
                        <Container className="p-1 my-0 card-hover">
                            
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
                <Container xs={2} sm={4} md={3} lg={2} xl={2} className="p-o mx-0 card-container">
                    <a href="" className="p-0 mx-0 card card-link">
                        <Container className="p-1 my-0 card-hover">
                            
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
                <Container xs={2} sm={4} md={3} lg={2} xl={2} className="p-o mx-0 card-container">
                    <a href="" className="p-0 mx-0 card card-link">
                        <Container className="p-1 my-0 card-hover">
                            
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
                </div>
                


               
            
    </React.Fragment >
    )
}
export default Favorites