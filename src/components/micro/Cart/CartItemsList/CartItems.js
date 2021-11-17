// REACT
import React, { useEffect, useState } from 'react'
import { Nav, Col, Container } from 'react-bootstrap'


// ESTILO
import '../../../../assets/css/Style.css'
import './CartItems.css'

// PÁGINAS/COMPONENTES
import CartItemsList from './CartItemsList'
import trash from '../../../../assets/images/icones/delete.png'
import imagem from '../../../../assets/images/PRODUTOS/rifle-vulcan.png'
import axios from 'axios'
import Images from '../../../../components/micro/Images/Images'


function ProductListCart(props) {
    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)
    const [id, setId] = useState('')
    

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
        
    }, [])

    // function Product(id){
    //     setId(id) 
    //     axios.get(`http://localhost:8080/produtos/${id}`)
    //     .then((async response => {
    //         const p = await response.data
    //         products.add(p)
            
            
    //         console.log(p)
            
    //     }))

    // }
    
    
    function getCartItemsList() {
       

        return products.map(items => {
            
            return (
                <Nav className="py-2 px-0 product-list-cart" defaultActiveKey="/home" as="ul">
                    <Col className="col-3 cart-item-image" >
                        <Nav.Item as="li"> <Images url={items.urlImagem}/> </Nav.Item>
                    </Col>

                    <Col className="col-4" >
                        <Nav.Item as="li"> {items.descricao} </Nav.Item>
                    </Col>

                    <Col className="col-3" >
                        <Nav.Item as="li"> R$ {getPrices(items.id)} </Nav.Item>
                    </Col>

                    <Col className="col-2" >
                        <Nav.Item as="li">
                            <Nav.Link>
                                <img className="arrow" src={trash} />
                            </Nav.Link>
                        </Nav.Item>
                    </Col>
                </Nav>
            )
        })
    }
    
    
    function getPrices(idProduct) {
        let price = 0 
        axios.get(`http://localhost:8080/preco/recente/1/${idProduct}`)
            .then((response) => {
                price = (response.data)
                console.log (response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
            return price;
    }

     return (
         <>
            <h1 className="card-title-mvp pt-4">Meus produtos</h1>
            <Nav className="pt-3 pb-2 px-0 product-list-cart card-caption-mvp" defaultActiveKey="/home" as="ul">
                <Col className="col-3">
                    <Nav.Item as="li"> Produto </Nav.Item>
                </Col>

                <Col className="col-4">
                    <Nav.Item as="li"> Descrição </Nav.Item>
             </Col>

                <Col className="col-3">
                <Nav.Item as="li"> Preço </Nav.Item>
                </Col>

                <Col className="col-2" >
                    <Nav.Item as="li"> Remover </Nav.Item>
                </Col>
            </Nav>

            {getCartItemsList()}
         </>
     )
}


export default ProductListCart