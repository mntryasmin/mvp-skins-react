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

    const [messageCard, setMessageCard] = useState('Item adicionado ao carrinho!')
    const [messageFavorite, setMessageFavorite] = useState('Item adicionado aos favoritos!')
    const [showMessage, setShowMessage] = useState(false)

    const idProduct = props.idProduct
    //Função para recuperar produto ao carregar componente
    const [product, setProduct] = useState({})
    const getProduct = () => {
        axios.get(`http://localhost:8080/produtos/${idProduct}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.log('Ocorreu um erro: ' + error)
            }
        )
    }

    //Função para recuperar preço ao carregar componente
    const [preco, setPreco] = useState(0.0);
    const getPreco = () => {
        axios.get(`http://localhost:8080/preco/recente/1/${idProduct}`)
            .then((response) => {
                setPreco(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            }
        )
    }

    //Função para verificar estoque do produto
    const [inventory, setInventory] = useState(false);
    const getInventory = () => {
        axios.get(`http://localhost:8080/estoque/verificar-estoque/${idProduct}`)
            .then((response) => {
                setInventory(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            }
            )
    }

    useEffect(() => {
        getProduct();
        getPreco();
        getInventory();
    }, [])


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

    const checkItems = (productCart) => {
        const productCartList = localStorage.getItem("cart") ?
            JSON.parse(localStorage.getItem("cart")) :
            [];

        for (var i = 0; i < productCartList.length; i++) {
            if (productCart.id == productCartList[i].id) {
                productCartList.splice((i), 1);
                return false
            }
        }
        return true
    }

    //Adiciona o produto ao carrinho de compras
    function addProductToCart(productCart) {
        if (checkItems(productCart)) {
            let productCartList = localStorage.getItem("cart") ?
                JSON.parse(localStorage.getItem("cart")) :
                [];

            productCartList.push(productCart);
            let productCartString = JSON.stringify(productCartList)
            localStorage.setItem("cart", productCartString)
            window.location.reload(true)
        } else {
            setMessageCard('Esse item já está no carrinho!')

        }
    }

    const boxMessage = () => {

        let boxMessage = (<Popover id="popover-basic">
            <Popover.Body>
                {messageCard}
            </Popover.Body>
        </Popover>)

        return boxMessage
    }




    // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    // PARA CHECAR E ADICIONAR OS FAVORITOS TEM QUE PUXAR DO BANCO, AQUI ESTÁ PUXANDO DO LOCALHOST 
    const checkItemsFav = (productFav) => {
        const productFavList = localStorage.getItem("fav") ?
            JSON.parse(localStorage.getItem("fav")) :
            [];

        for (var i = 0; i < productFavList.length; i++) {
            if (productFav.id == productFavList[i].id) {
                productFavList.splice((i), 1);
                return false
            }
        }
        return true
    }

    //Adiciona o produto à página de favoritos
    function addProductToFavorite(productCart) {
        axios.post(`http://localhost:8080/fav/`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
            .then((response) => {
                console.log("Produto adicionado")
            })
            .catch((erro) => {
                console.log("Não foi possível adicionar o produto aos favoritos do cliente: " + erro)
            });
    }

    const favoriteBoxMessage = () => {

        let boxMessage = (<Popover id="popover-basic">
            <Popover.Body>
                {messageFavorite}
            </Popover.Body>
        </Popover>)

        return boxMessage
    }
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


    if (inventory == true) {
        return (
            <>
                <div xs={6} sm={4} md={3} lg={2} xl={2} className="mx-3 my-3 card card-link">
                    <Container className="py-2 px-0 card-hover">
                        <Row className="mb-4 cart-icon-card-container">
                            <a onClick={() => addProductToCart(product)}
                                className="cart-icon-card mx-2">
                                <OverlayTrigger trigger="click"
                                    placement="top"
                                    overlay={boxMessage()}
                                    rootClose>
                                    <img className="p-2 card-icon"
                                        src={addCart}
                                        alt="Adicionar produto ao carrinho" />
                                </OverlayTrigger>
                            </a>

                            <a onClick={() => addProductToFavorite(product)}
                                className="cart-icon-card mx-2">
                                <OverlayTrigger trigger="click"
                                    placement="top"
                                    overlay={favoriteBoxMessage()}
                                    rootClose>
                                    <img className="p-2 card-icon"
                                        src={favorite}
                                        alt="Adicionar produto aos favoritos" />
                                </OverlayTrigger>
                            </a>
                        </Row>
                        <Row>
                            <Button label="Ver mais" class="mt-5 btn-card" route={'/product/' + idProduct} navigation></Button>
                        </Row>
                    </Container>

                    <Container className="p-1 my-2 card-product">
                        <Container className="px-0 mx-0 card-image">
                            <Image url={product.urlImagem} class="product-card-image" />
                        </Container>

                        <hr className="p-0 m-0 card-line" />

                        <Col className="px-2 card-body card-price-container">
                            <p className="mb-2 card-description">{cardTitle(product.subcategoria.descricao, product.descricao)}</p>
                            <p className="my-0 card-price">de R$ {(preco * 1.08).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })} </p>
                            <p className="my-0 card-price-final">por {(preco).toLocaleString('pt-BR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })} </p>
                        </Col>
                    </Container>
                </div>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default CardProduct