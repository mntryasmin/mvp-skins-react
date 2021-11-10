import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './Product.css';
import {Row, Col, Breadcrumb} from "react-bootstrap";
import Title from '../../components/micro/Title/Title';
import ProductContainer from '../../components/macro/Product/ProductContainer';
import ProductPrice from '../../components/micro/Product/ProductPrice/ProductPrice';
import ProductText from  '../../components/micro/Product/ProductText/ProductText';
import ProductName from  '../../components/micro/Product/ProductName/ProductName';
import Button from '../../components/micro/Button/Button'
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Product() {

    const[product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/produtos/${id}`)
        .then((response)=> {
            setProduct(response.data)
        })
        .catch((erro)=>{
            console.log("Ocorreu um erro "+ erro)
        })
    },[])

    

    // const exterior = product.exterior.descricao;

    return(
        <>
        
        <div className="div-produto">
            <Col xs={11} md={10} className="m-0">
            <Title title="PRODUTO"/>
                <Row className="justify-content-center">
                    <Breadcrumb bsPrefix="" className="mt-2">
                        <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Categoria</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Subcategoria</Breadcrumb.Item>
                        <Breadcrumb.Item active>Produto</Breadcrumb.Item>
                    </Breadcrumb>
                    <ProductContainer urlImagem="pistola-visoes-ancestrais">
                        <ProductText category="PISTOLAS"/>
                        <ProductText category="EXTERIOR :" description="Bem desgastada (Well-Worn)"/>
                        <ProductText category="RARIDADE :" description="Azul"/>
                        <ProductName name="Visões Ancestrais"/>
                        <ProductPrice idProduto={id}/>
                        <Button label="COMPRAR" class="btn btn-primary btn-mvp btn-primario-mvp mb-3"/>
                        <ProductText category="Coleção :" description="A Coleção Ancient"/>
                        <ProductText category="Float :" description="0.44"/>
                    </ProductContainer>
                </Row>
            </Col>
        </div>
        
        
        </>
    )

    
}
