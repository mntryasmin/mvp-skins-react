import React from 'react'
import './Favorites.css'
import {Row,  Container, Col, Breadcrumb, BreadcrumbItem}  from 'react-bootstrap'
import Image1 from '../../assets/images/PRODUTOS/adaga-marcara-urbana.png'
import Image2 from '../../assets/images/PRODUTOS/luva-abate.png'
import Image3 from '../../assets/images/PRODUTOS/aug-momento.png'
import Title from '../../components/micro/Title/Title'
import Card from '../../components/micro/CardProduct/CardProduct'



function Favorites(props) {

    return (

        <React.Fragment>
            
            <div className = "div-favoritos">
            <Col xs={11} md={5} className="m-0"></Col>
            <Title title="FAVORITOS"/>
            <Row className="justify-content-center"></Row>
            
            <Breadcrumb>
            <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Categoria</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Subcategoria</Breadcrumb.Item>
            <Breadcrumb.Item active>Favoritos</Breadcrumb.Item>
            </Breadcrumb> 
            </div>
          
          
            <Container fluid className = "p-0 my-3 favoritos">
                <Row className="m-0">
                    <Col lg={12} className="coluna-favoritos">
                        <h1 className="favorites-h1">Suas Skins Favoritas</h1>
                        <Row className="row col-12 d-flex mx-0 justify-content-center"></Row>
                    </Col>
                </Row>
                    
                  
                    <Row className = "pb-5 container-favoritos">
                        <div className="imagem-favoritos">
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} className="favorites-info px-3">
                            <img className ="py-2 favorite-icon" src={Image1} alt="favorite1"/>
                            <p className = "favorite-description">FACAS || ADAGA-MARCARÁ-URBANA</p>
                        </Col>
                        </div>
                        <div className="imagem-favoritos">
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} className = "favorites-info px-3">
                        <img className = "py-2 favorite-icon" src={Image2} alt="favorite2"/>
                        <p className = "favorite-description">LUVAS || LUVA ABATE </p>
                        </Col>
                        </div>
                        
                        <div className="imagem-favoritos">
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} className = "favorites-info px-3">
                        <img className = "py-2 favorite-icon" src={Image3} alt="favorite3"/>
                        <p className = "favorite-description">METRALHADORA || AUG MOMENTUM UMP-45 </p>
                        </Col>
                        </div>
                </Row>
            </Container>
            
            
            

    </React.Fragment>
    )
}
export default Favorites