import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Nav} from 'react-bootstrap'

function CheckoutItemsPrice(props) {
    const [price, setPrice] = useState(0.0)
    //Ao renderizar, irá setar o price com o preço mais recente do produto
    useEffect(() => {
        axios.get(`http://localhost:8080/preco/recente/1/${props.idProduto}`)
            .then((response) => {
                setPrice(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    })

    return(
        <>
        <Nav.Item as="li" className="py-1 checkout-items-price"> R$ {price} </Nav.Item>
        </>
    )
}

export default CheckoutItemsPrice