import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Product.css';
import { Row, Col, Breadcrumb } from "react-bootstrap";
import Title from '../../components/micro/Title/Title';
import ProductContainer from '../../components/macro/Product/ProductContainer';
import ProductPrice from '../../components/micro/Product/ProductPrice/ProductPrice';
import ProductText from '../../components/micro/Product/ProductText/ProductText';
import Button from '../../components/micro/Button/Button'
import CarouselProducts from '../../components/macro/CarouselProducts/CarouselProducts';

export default function Product() {

    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/produtos/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    }, [])



    // const exterior = product.exterior.descricao;

    return (
        <>
        
        <div className="div-produto">
            <Col xs={11} md={10} className="m-0">
            <Title title="PRODUTO"/>
                <Row className="justify-content-center">
                <Breadcrumb>
                    <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Categoria</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Subcategoria</Breadcrumb.Item>
                    <Breadcrumb.Item active>Produto</Breadcrumb.Item>
                </Breadcrumb>
                    
                    
                    <Col xs={10} className="container-produto my-3 p-0">
                        <Col xs={12} md={7}>
                            <div className="container-imagem">
                                <img src={Product} alt="luva de especialista" className="imagem-descricao"/>
                            </div>
                        </Col>
                        <Col xs={12} md={5} className="informacao-produto">
                            <div className="descricao">
                                <div className="texto-descricao">ESCOPETA</div>
                                <div className="texto-descricao">EXTERIOR: USAHDSDAS</div>
                                <div className="texto-descricao">RARIDADE: USAHDSDAS</div>
                                <div className="texto-nome-produto">MAG-7 | COTA DE MALHA</div>
                                <div className="container-preco">
                                    <div className="preco-descricao">R$ 49,90</div>
                                    <button type="button" className="btn btn-primary btn-mvp btn-primario-mvp me-2">Comprar</button>
                                   
                                </div>
                                <div className="texto-descricao">Coleção: SUHAIHSADDAS</div>
                                <div className="texto-descricao">Float: USAHDSDAS</div>
                                
                            </div>
                        </Col>
                    </Col>
                    
                    <Breadcrumb bsPrefix="" className="mt-2">
                        <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/category">Categoria</Breadcrumb.Item>
                        <Breadcrumb.Item href="/category">Subcategoria</Breadcrumb.Item>
                        <Breadcrumb.Item active>Produto</Breadcrumb.Item>
                    </Breadcrumb>
                    <ProductContainer urlImagem="pistola-visoes-ancestrais">
                        <ProductText category="PISTOLAS" class="product-text-category"/>
                        <ProductText category="EXTERIOR :" description="Bem desgastada (Well-Worn)"/>
                        <ProductText category="RARIDADE :" description="Azul"/>
                        <ProductText description="Visões Ancestrais" class="product-text-name"/>
                        <ProductPrice idProduto={id}/>
                        <Button label="COMPRAR" class="btn btn-primary btn-mvp btn-primario-mvp mb-3"
                        route="/cart" navigation/>
                        <ProductText category="Coleção :" description="A Coleção Ancient"/>
                        <ProductText category="Float :" description="0.44"/>
                    </ProductContainer>
                </Row>
                <ProductText description="Veja também:" class="product-text-carousel"/>
                <CarouselProducts/>
                <ProductText description="Veja também:" class="product-text-carousel"/>
                <CarouselProducts/>
                <div className="mb-5"></div>
            </Col>
        </div>
        
        
        </>
    )


}
