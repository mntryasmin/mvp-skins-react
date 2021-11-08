import React from 'react'
import './Product.css'
import {Row, Col, Breadcrumb} from "react-bootstrap";
import Images from '../../components/micro/Images/Images';


function Product(props) {


    return(
        <>
        
        <div className="div-produto">
            {/* inicio produto */}
            <Col xs={11} md={10} className="m-0">
            
                <Row className="justify-content-center">
                <Breadcrumb>
                    <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Categoria</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Subcategoria</Breadcrumb.Item>
                    <Breadcrumb.Item active>Produto</Breadcrumb.Item>
                </Breadcrumb>
                    
                    
                    <Col xs={10} className="container-produto my-3 p-0">
                        <Col xs={12} md={7}>
                            <div className="container-imagem">
                                <Images image={'agentefaquinha'}></Images>
                            </div>
                        </Col>
                        <Col xs={12} md={5} className="informacao-produto">
                            <div className="descricao">
                                <div className="texto-descricao">ESCOPETA</div>
                                <div className="texto-descricao">EXTERIOR: USAHDSDAS</div>
                                <div className="texto-descricao">RARIDADE: USAHDSDAS</div>
                                <div className="texto-nome-produto">MAG-7 | COTA DE MALHA</div>
                                <div className="container-preco">
                                    <div className="preco-descricao">R$ 49,90</div>
                                    <Col xs={10} md={4}>
                                        <button type="button" class="btn btn-primary btn-mvp btn-primario-mvp me-2">Comprar</button>
                                    </Col>
                                    
                                </div>
                                <div className="texto-descricao">Coleção: SUHAIHSADDAS</div>
                                <div className="texto-descricao">Float: USAHDSDAS</div>
                                
                            </div>
                        </Col>
                    </Col>
                    
                </Row>
            </Col>
            {/* fim produto */}
        </div>
        
        
        </>
    )
}

export default Product