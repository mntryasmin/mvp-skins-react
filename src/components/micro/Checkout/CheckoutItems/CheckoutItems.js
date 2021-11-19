// REACT
import React from 'react'
import { Nav, Col, Container } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './CheckoutItems.css'

// PÁGINAS/COMPONENTES
import Image from '../../Images/Images'
import CheckoutItemsPrice from '../CheckoutItemsPrice/CheckoutItemsPrice'

function CheckoutItems(props) {
    const itemsList = props.productList
    return itemsList.map(items => {
        return (
            <>
            <Nav key={items.id} className="my-1 p-3 checkout-items" defaultActiveKey="/home" as="ul">
                <Col className="col-6 checkout-items-img" >
                    <Nav.Item as="li"> 
                        <Image url={items.urlImagem}/> 
                    </Nav.Item>
                </Col>

                <Col className="col-6" >
                    <Nav.Item as="li" className="py-1"> {items.descricao} </Nav.Item>
                    <Nav.Item as="li" className="py-1"> Quantidade: 1 </Nav.Item>
                    <CheckoutItemsPrice idProduto={items.id}/>
                </Col>
            </Nav>
            </>
        )
    })
}

export default CheckoutItems