// REACT
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Popover, OverlayTrigger } from 'react-bootstrap'

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
    //Função para recuperar produto ao carregar componente
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/produtos/${idProduct}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.log('Ocorreu um erro: ' + error)
            })
    }, [])

    //Função para recuperar preço ao carregar componente
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

    //Função para verificar estoque do produto
    const [inventory, setInventory] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8080/estoque/verificar-estoque/${idProduct}`)
            .then((response) => {
                setInventory(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    })

    //Controla a quantidade de caracteres no card
    function cardTitle(subcategoria, title) {
        if (subcategoria.length + title.length > 23) {
            return ((subcategoria).toUpperCase() + ' - ' + (title.substr(0, 23) + '...'))
        } else {
            return ((subcategoria).toUpperCase() + ' - ' + title)
        }
    }

    //Enquanto o produto não for carregado, irá exibir uma div vazia
    while (product.id == undefined) {
        return (
            <>
                <div className="p-0 my-3 card card-link"></div>
            </>
        )
    }

    //Adiciona o produto ao carrinho de compras
    function addProductToCart(productCart) {
        let productCartList = localStorage.getItem("cart") ?
            JSON.parse(localStorage.getItem("cart")) :
            [];

        for (var i = 0; i < productCartList.length; i++) {
            if (productCart.id == productCartList[i].id) {
                productCartList.splice((i), 1);
            }
        }

        productCartList.push(productCart);
        let productCartString = JSON.stringify(productCartList)
        localStorage.setItem("cart", productCartString)

    }

    const messageAddCart = (
        <Popover id="popover-basic">
            <Popover.Body>
                Item adicionado ao carrinho!
            </Popover.Body>
        </Popover>
    )

    if (inventory == true) {
        return (
            <>
                <div xs={6} sm={4} md={3} lg={2} xl={2} className="p-0 my-3 card card-link">
                    <Container className="py-2 px-0 card-hover">
                        <Row className="mb-4 cart-icon-card-container">
                            <a onClick={() => addProductToCart(product)}
                                className="cart-icon-card mx-2">
                                <OverlayTrigger trigger="click"
                                    placement="top"
                                    overlay={messageAddCart}
                                    rootClose>
                                    {/* setTimeOut, setInterval */}
                                    <img className="p-2 card-icon"
                                        src={addCart}
                                        alt="Adicionar produto ao carrinho" />
                                </OverlayTrigger>
                            </a>
                        </Row>
                        <Row>
                            <Button label="Ver mais" class="mt-5 btn-mvp btn-mvp-orange-solid" route={'/product/' + idProduct} navigation></Button>
                        </Row>
                    </Container>

                    <Container className="p-1 my-2 card-product">
                        <Container className="px-0 mx-0 card-image">
                            <Image url={product.urlImagem} class="product-card-image" />
                        </Container>

                        <hr className="p-0 m-0 card-line" />

                        <Col className="px-2 card-body card-price-container">
                            <p className="mb-2 card-description">{cardTitle(product.subcategoria.descricao, product.descricao)}</p>
                            <p className="my-0 card-price">de R${(preco * 1.08).toFixed(2)}</p>
                            <p className="my-0 card-price-final">por {preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </Col>
                    </Container>
                </div>
            </>
        )
    } else {
        return null
    }
}

export default CardProduct