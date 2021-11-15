import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetDiscount(props) {
    const [discount, setDiscount] = useState(0);

    // BUSCA O VALOR DO DESCONTO DO CUPOM E INSERE NA VARIAVEL CUPOM

    axios.get(`http://localhost:8080/promotion/coupon-discount/${props.coupon}`)
        .then((response) => {
            setDiscount(response.data);
        })
        .catch((erro) => {
            console.log("Ocorreu um erro " + erro)
        }
    )

    return (
        { discount }
    )
}

export default GetDiscount;