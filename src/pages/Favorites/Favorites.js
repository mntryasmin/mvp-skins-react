import React from 'react'
import './Favorites.css'
import { Row, Container, Col, Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import favorite from '../../assets/images/icones/icon-coracao-produto.png'
import addCart from '../../assets/images/icones/icon-add-cart.png'
import Card from '../../components/micro/CardProduct/CardProduct'
import Title from '../../components/micro/Title/Title'
import product from '../../assets/images/PRODUTOS/luva-abate.png'
import CarouselProducts from '../../components/macro/CarouselProducts/CarouselProducts'



function Favorites(props) {
    return (

        <React.Fragment>

            <div className="div-favoritos1">
                <Col xs={2} md={2} className="mb-1"></Col>
                <Title title="SKINS FAVORITAS" />
                <Row className="justify-content-center"></Row>
            </div>



            <div className="py-3 px-3 mb-0 fav container-fluid d-flex">

                <Row className="fav-row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Row>

                <Row className="fav-row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Row>

            </div>





        </React.Fragment >
    )
}
export default Favorites