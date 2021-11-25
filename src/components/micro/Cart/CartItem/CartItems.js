// REACT
import React, { useEffect, useState } from 'react'
import { Nav, Col, Container } from 'react-bootstrap'


// ESTILO
import '../../../../assets/css/Style.css'
import './CartItems.css'

// PÁGINAS/COMPONENTES
import trash from '../../../../assets/images/icones/delete.png'
import axios from 'axios'
import Images from '../../Images/Images'


function CartItems(props) {
    
    const product = props.product
    const [price, setPrice] = useState(0.0)

    useEffect(()=> {
        axios.get(`http://localhost:8080/preco/recente/1/${product.id}`)
            .then((response) => {
                setPrice(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    },[])
    
    function removeItem(idProduct){
        console.log(idProduct)
    }

    while(price == undefined){
        return <div/>
    }
     return (
         <>
            <Nav className="py-2 px-0 product-list-cart" defaultActiveKey="/home" as="ul">
                <Col className="col-3 cart-item-image" >
                    <Nav.Item as="li"> <Images url={product.urlImagem}/> </Nav.Item>
                </Col>

                <Col className="col-4" >
                    <Nav.Item as="li"> {product.descricao} </Nav.Item>
                </Col>

                <Col className="col-3" >
                    <Nav.Item as="li"> R$ {price.toFixed(2).replace(".", ",")} </Nav.Item>
                </Col>

                <Col className="col-2" >
                    <Nav.Item as="li">
                        <a onClick={()=>props.removeItem(product)} className="cart-trash">
                            <img className="arrow" src={trash} />
                        </a>
                    </Nav.Item>
                </Col>
            </Nav>
            {props.totalPrice(price)}
            {console.log(price)}
         </>
     )
}


export default CartItems;