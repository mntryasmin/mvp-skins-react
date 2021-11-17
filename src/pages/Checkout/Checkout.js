// REACT
import React, { useState } from 'react'
import { Container, Col, Row, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


// ESTILO
import './../../assets/css/Style.css'
import './Checkout.css'

// PÁGINAS/COMPONENTES
import Products from '../../components/micro/Checkout/CheckoutItems/CheckoutItems'
import PaymentCreditCard from '../../components/micro/Checkout/PaymentCreditCard/PaymentCreditCard'
import Button from '../../components/micro/Button/Button'
import axios from 'axios'


function Checkout(props) {

    const productListArray = [
        { id: 1, urlImagem: "agente-faquinha", descricao: 'Disruptor Fantasma FT', preco: 20.0 },
        { id: 2, urlImagem: "agente-faquinha", descricao: 'Disruptor Fantasma FT', preco: 40.0 },
        { id: 3, urlImagem: "agente-faquinha", descricao: 'Disruptor Fantasma FT', preco: 10.0 },
        { id: 4, urlImagem: "agente-faquinha", descricao: 'Disruptor Fantasma FT', preco: 30.0 }
    ]


    let finalPrice = 0;
    const[price, setPrice] = useState(0.0)

    function setTotalPrice(totalPrice){
        finalPrice = finalPrice+totalPrice;
        //Está duplicando o valor total por algum motivo desconhecido
        setPrice(finalPrice/2);
    }

    function postOrder(){
        const order = {
            cliente : {
                codigoCliente : 1
            },
            formaPagamento : {
                id : 1
            },
            descontoProduto : price*0.1,
            valorBruto : price
        }
        //Post do Pedido
        axios.post(`http://localhost:8080/pedidos`, order)
        .then((response)=>{
            //Ao realizar o post do pedido, irá fazer o post de cada ItemPedido
            productListArray.forEach((product)=>{
                axios.post(`http://localhost:8080/itens-pedido`,{
                    id : {
                        produto : {
                            id: product.id
                        },
                        pedido : {
                            id: response.data.id
                        }
                    }
                })
                .then((responseProduct)=>{
                    console.log(responseProduct.data)
                })
                .catch((erro)=>{
                    console.log("Ocorreu um erro: " + erro)
                })
            })

        })
        .catch((error)=>{
            console.log("Ocorreu um erro: "+ error)
        })
    }

    return (
        <>
            <Container fluid className="row px-2 py-5 mx-0 checkout content-container">
                <h1 className="mb-3 card-title-mvp checkout-title"> Checkout </h1>

                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="py-4 mx-1 checkout-containers checkout-request checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Resumo do pedido </h1>
                    <Container >
                        <Row className="px-2 checkout-list-items-scroll">
                            <Products functionPrice={setTotalPrice} productList={productListArray}/>
                        </Row>

                        <Row className="p-2 mt-3 checkout-price-container">
                            <Row className="my-1 py-1 checkout-price ">
                                <p className="checkout-price-title"> Produtos </p>
                                <p> R$ {price}</p>
                            </Row>

                            <Row className="my-1 py-1 checkout-price checkout-line">
                                <p className="checkout-price-title"> Desconto </p>
                                <p> R$ {price*0.1}</p>
                            </Row>

                            <Row className="my-1 py-1  checkout-price checkout-line">
                                <p className="checkout-price-title"> Total </p>
                                <p> R$ {price-(price*0.1)}</p>
                            </Row>
                        </Row>
                    </Container>
                </Col>


                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="px-5 py-4 mx-1 checkout-containers checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Pagamento </h1>
                    <PaymentCreditCard />
                </Col>


                <Col xs={12} sm={12} md={12} lg={3} xl={3} className="py-4 px-4 mx-1 checkout-term checkout-containers checkout-respons">
                    <h1 className="mb-3 card-caption-mvp checkout-title"> Termos de serviço </h1>
                    <p className="pt-3">Eu estou ciente de que a após o recebimento da skin terei que aguardar por 7 (sete) dias para
                        realizar outra troca com a skin adquirida nesta transação. Confirmo também que estou fornecendo, através do meu 
                        perfil na MVP Skins, um trade link válido e atualizado para o recebimento da skin. 
                    </p>

                    <Form>
                        <Form.Group className="mb-3 checkout-checkbox" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Eu aceito os termos e condições." />
                        </Form.Group>
                    </Form>

                    <Button label="Finalizar a compra" route="/success" class="btn-primary-mvp" onclick={()=>postOrder()}></Button>
                </Col>
            </Container>
        </>
    )
}

export default Checkout