import React, { useEffect, useState } from 'react';
import './ProductPrice.css';
import axios from 'axios';

function ProductPrice(props) {
    const [preco, setPreco] = useState(0.0);

    useEffect(() => {
        axios.get(`http://localhost:8080/preco/recente/1/${props.idProduto}`)
            .then((response) => {
                setPreco(response.data)
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    })

    return (
        <>
            <div className="preco-descricao">{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
        </>
    )
}

export default ProductPrice;