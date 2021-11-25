import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './Favorites.css'
import { Row, Container, Col, Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import favorite from '../../assets/images/icones/icon-coracao-produto.png'
import addCart from '../../assets/images/icones/icon-add-cart.png'
import Card from '../../components/micro/CardProduct/CardProduct'
import Title from '../../components/micro/Title/Title'
import product from '../../assets/images/PRODUTOS/luva-abate.png'
import CarouselProducts from '../../components/macro/CarouselProducts/CarouselProducts'
import axios from 'axios'




function Favorites(props) {
    const { id } = useParams();
    const [favorite, setFavorite] = useState({});
    const URL = 'http://localhost:8080/cliente/'

    useEffect(() => {
        axios.get(`${URL}` + id)
            .then((response) => {
                setFavorite(response.data)
            })
            .catch((error) => {
                console.log("Ocorreu um erro" + error)
            })

    }, []);
    //Funcao para adicionar o produto aos favoritos//
    function addFavorite(productFavorite) {
        let favoriteProductList = localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [];
        favoriteProductList.push(productFavorite);
        let favoriteProductString = JSON.stringify(favoriteProductList)
        localStorage.setItem("favorite", favoriteProductString)
        window.location.href = 'http://localhost:3000/favorites'
    }


    return (

        <React.Fragment>

            <div className="div-favoritos1">
                <Col xs={2} md={2} className="mb-1"></Col>
                <Title title="SUAS SKINS FAVORITAS" />
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