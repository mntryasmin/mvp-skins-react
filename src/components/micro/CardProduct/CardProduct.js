// REACT
import React, {useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

// ESTILO
import '../../../assets/css/Style.css'
import './CardProduct.css'
import favorite from '../../../assets/images/icones/icon-coracao-produto.png'
import addCart from '../../../assets/images/icones/icon-add-cart.png'

// PÁGINAS/COMPONENTES
import Button from '../../micro/Button/Button'
import axios from 'axios'
import Image from '../Images/Images'

function CardProduct(props) {

    const idProduct = props.idProduct
    const [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8080/produtos/${idProduct}`)
        .then((response)=>{
            setProduct(response.data)
        })
        .catch((error)=>{
            console.log('Ocorreu um erro: '+error)
        })
    },[])

    const [preco, setPreco] = useState(0.0);

    useEffect(() => {
        axios.get(`http://localhost:8080/preco/recente/1/${idProduct}`)
            .then((response) => {
                setPreco(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    })

    while(product.id == undefined){
        return(
            <>
                <div className="p-0 my-3 card card-link"></div>
            </>
        )
    }
    return (
        <>
            <a xs={6} sm={4} md={3} lg={2} xl={2} href={'/product/'+idProduct} className="p-0 my-3 card card-link">
                <Container className="py-2 px-0 card-hover">
                    <a href="/favorites" className="mb-2 mx-0"><img className="p-2 card-icon" src={favorite} alt="Favoritar produto" /></a>
                    <a href="/cart" className="mb-2 mx-0"><img className="p-2 card-icon" src={addCart} alt="Favoritar produto" /></a>
                    <Button label="Ver mais" class="col-10 mt-5 btn-primary-mvp" route="/products/1"></Button>
                </Container>

                <Container className="p-1 my-2 card-product">
                    <Container className="px-0 mx-0 card-image">
                        <Image url={product.urlImagem} class="product-card-image"/>
                    </Container>

                    <hr className="p-0 mx-0 my-1 card-line" />

                    <Col className="px-1 card-body card-price-container">
                        <p className="mb-2 card-description">{product.subcategoria.descricao} | {product.descricao}</p>
                        <p className="my-0 card-price">de R${(preco*1.08).toFixed(2)}</p>
                        <p className="my-0 card-price-final">por R${preco}</p>
                    </Col>
                </Container>
            </a>
        </>
    )
}

export default CardProduct