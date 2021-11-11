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
                    <Title title="PRODUTO" />
                    <Row className="justify-content-center">
                        <Breadcrumb bsPrefix="" className="mt-2">
                            <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/category">Categoria</Breadcrumb.Item>
                            <Breadcrumb.Item href="/category">Subcategoria</Breadcrumb.Item>
                            <Breadcrumb.Item active>Produto</Breadcrumb.Item>
                        </Breadcrumb>
                        <ProductContainer urlImagem="pistola-visoes-ancestrais">
                            <ProductText category="PISTOLAS" class="product-text-category" />
                            <ProductText category="EXTERIOR :" description="Bem desgastada (Well-Worn)" />
                            <ProductText category="RARIDADE :" description="Azul" />
                            <ProductText description="Visões Ancestrais" class="product-text-name" />
                            <ProductPrice idProduto={id} />
                            <Button label="COMPRAR" class=" btn-primary-mvp p-2 mt-2"
                                route="/cart" navigation/>
                            <ProductText category="Coleção :" description="A Coleção Ancient" class="mt-4"/>
                            <ProductText category="Float :" description="0.44" />
                            <ProductText category="ATENÇÃO :" description="Visões Ancestrais é uma customização 
                            de Item para o jogo online CS:GO, podendo ser utilizada apenas dentro do jogo CS:GO" class="mt-4"/>
                        </ProductContainer>
                    </Row>
                    <ProductText description="Veja também:" class="product-text-carousel" />
                    <CarouselProducts />
                    <ProductText description="Veja também:" class="product-text-carousel" />
                    <CarouselProducts />
                    <div className="mb-5"></div>
                </Col>
            </div>


        </>
    )


}
