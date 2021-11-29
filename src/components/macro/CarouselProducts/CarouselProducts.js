import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselProducts.css'
import Card from '../../micro/CardProduct/CardProduct'

export default function CarouselProducts(props) {

    const products = props.productList;

    while (products == undefined) {
        return (
            <>
            </>
        )
    }
    return (
        <Carousel>
            {products.length>=5?<Carousel.Item>
                <div  className="carousel-cards">
                    <Card idProduct={products[0].id}/>
                    <Card idProduct={products[1].id}/>
                    <Card idProduct={products[2].id}/>
                    <Card idProduct={products[3].id}/>
                    <Card idProduct={products[4].id}/>
                    <Card idProduct={products[5].id}/>
                </div>
            </Carousel.Item>:
            <></>}
            {products.length>=10?<Carousel.Item>
                <div  className="carousel-cards">
                    <Card idProduct={products[6].id}/>
                    <Card idProduct={products[7].id}/>
                    <Card idProduct={products[8].id}/>
                    <Card idProduct={products[9].id}/>
                    <Card idProduct={products[3].id}/>
                    <Card idProduct={products[6].id}/>
                </div>
            </Carousel.Item>:
            <></>}
        </Carousel>
    );
}