import React, { useState, useEffect } from 'react';
import './ProductContainer.css';
import { Row, Col } from "react-bootstrap";
import Images from '../../micro/Images/Images';

function ContainerProduto(props) {

    return (
        <>
            <Col xs={10} className="container-produto my-3 p-0" key={props.id}>
                <Col xs={12} md={7}>
                    <div className="container-imagem">
                        <Images url={props.urlImagem} class="product-image"></Images>
                    </div>
                </Col>
                <Col xs={12} md={5} className="informacao-produto">
                    <div className="descricao">
                        {props.children}
                    </div>
                </Col>
            </Col>
        </>
    )
}

export default ContainerProduto;