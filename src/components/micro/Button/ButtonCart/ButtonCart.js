import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './ButtonCart.css'
import Cart from '../../../../assets/images/icones/icon-carrinho.png'
import { getSuggestedQuery } from '@testing-library/dom'

function ButtonCart(props) {
    
    // const [qty, setQty] = useState(0)

    // useEffect(()=>{
    //     const products = JSON.parse(localStorage.getItem('cart'))
    //     if (products!=null){
    //         setQty(products.length)
    //     }
        
    // },[])

    return(
        <>
            <Link to="/cart">
                <div className='d-flex align-items-center justify-content-center'>
                    <spam  className="link-header">Carrinho</spam>
                    <img src={Cart} width="30" height="30"/>
                    {/* {qty>0?
                    <div className="header-qty-cart">{qty}</div>:
                    <></>} */}
                </div>
            </Link>
        </>
    )
}

export default ButtonCart