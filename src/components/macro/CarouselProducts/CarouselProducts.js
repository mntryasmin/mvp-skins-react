import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselProducts.css'
import Card from '../../micro/CardProduct/CardProduct'


export default function CarouselProducts(props) {
    
    const products = props.productList;
    
    console.log(products)
    while(products == undefined){
        return(
            <>
            </>
        )
    }
    return (
        <Carousel>
            <Carousel.Item>
                <div  className="carousel-cards">
                    <Card idProduct={products[0].id}/>
                    <Card idProduct={products[1].id}/>
                    <Card idProduct={products[2].id}/>
                    <Card idProduct={products[3].id}/>
                    <Card idProduct={products[4].id}/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div  className="carousel-cards">
                    <Card idProduct={products[5].id}/>
                    <Card idProduct={products[6].id}/>
                    <Card idProduct={products[7].id}/>
                    <Card idProduct={products[8].id}/>
                    <Card idProduct={products[9].id}/>
                </div>
            </Carousel.Item>
            
            {/* <Carousel.Item>
            <div  className="carousel-cards">
                    <Card idProduct={products[10].id}/>
                    <Card idProduct={products[11].id}/>
                    <Card idProduct={products[12].id}/>
                    <Card idProduct={products[13].id}/>
                    <Card idProduct={products[14].id}/>
                </div>
            </Carousel.Item> */}
        </Carousel>
    );
}