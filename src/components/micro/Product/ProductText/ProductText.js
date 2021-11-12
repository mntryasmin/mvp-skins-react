import React from 'react';
import './ProductText.css'

function ProductText(props) {

    return (
        <>
            <div className={"product-text-description " + props.class}>{props.category} {props.description}</div>
        </>
    )
}

export default ProductText;