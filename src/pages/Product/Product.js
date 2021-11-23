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
import NotFound from '../NotFound/Error.js'



function Product() {

    const { id } = useParams();
    const URL = 'http://localhost:8080/produtos/'
    const [product, setProduct] = useState({});

    //Ao carregar a página irá recuperar o produto pelo ID
    useEffect(() => {
        axios.get(`${URL}` + id)
            .then((response) => {
                setProduct(response.data)
                console.log('carregado')
                setTimeout(() => {
                    console.log(product)
                }, 5000)

            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    }, [])

    const [carouselA, setCarouselA] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/produtos/category/1`)
        .then((response)=>{
            setCarouselA(response.data)
        })
        .catch((error)=>{
            console.log('Ocorreu um erro: '+error)
        })
    },[])

    //Enquanto o produto estiver indefinido a página irá renderizar o NotFound
    const charge = () => {

        while (product.urlImagem == undefined) {
            return (
                <>
                    <NotFound />
                </>
            )
        }
    
    //Adiciona o produto ao carrinho de compras
    function addProductToCart(productCart){
        let productCartList = localStorage.getItem("cart") ? 
                                JSON.parse(localStorage.getItem("cart")) : 
                                [];
        productCartList.push(product);
        let productCartString = JSON.stringify(productCartList)
        localStorage.setItem("cart", productCartString)
        window.location.href='http://localhost:3000/cart'
    }

        return (
            <>
                <div className="div-produto content-container">
                    <Col xs={11} md={10} className="m-0">
                        <Title title="PRODUTO" class="mt-5" />
                        <Row className="justify-content-center">
                            <Breadcrumb bsPrefix="breadcrumb" className="mt-2">
                                <Breadcrumb.Item href="/" className="product-breadcrumb">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/category" className="product-breadcrumb">Categoria</Breadcrumb.Item>
                                <Breadcrumb.Item href="/category" className="product-breadcrumb">Subcategoria</Breadcrumb.Item>
                                <Breadcrumb.Item active>Produto</Breadcrumb.Item>
                            </Breadcrumb>
                            <ProductContainer id={product.id} urlImagem={product.urlImagem}>
                                <ProductText category="CATEGORIA :" description={product.categoria.descricao} class="product-text-category" />
                                <ProductText category="EXTERIOR :" description={product.exterior.descricao} />
                                <ProductText category="RARIDADE :" description={product.raridade.descricao} class="mb-4" />
                                <ProductText description={product.descricao} class="product-text-name" />
                                <ProductPrice idProduto={id} />

                                <Button label="COMPRAR" 
                                    class=" btn-primary-mvp p-2 mt-2 mb-5"
                                    route="/cart" 
                                    onclick={()=>addProductToCart(product)} />

                                <ProductText category="Coleção :" description={product.colecao.descricao} class="mt-4" />
                                <ProductText category="Float :" description={product.desgaste} />
                                <ProductText category="ATENÇÃO :" description="Esse item é uma customização 
                                para o jogo online Counter Strike: GO (CS:GO), podendo ser utilizada apenas dentro do jogo CS:GO" class="mt-4" />
                            </ProductContainer>
                        </Row>
                        <ProductText description="Veja também:" class="product-text-carousel" />
                        <CarouselProducts productList={carouselA}/>
                        <div className="mb-5"></div>
                    </Col>
                </div>
            </>
        )
    }

    return (
        <>
            {charge()}
        </>
    )
}
export default Product