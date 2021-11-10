import React from 'react';
import './ProductName.css'

function Comp(props) {

    return(
        <>
            <div className="product-text-name">{props.name}</div>
        </>
    )
}

export default Comp