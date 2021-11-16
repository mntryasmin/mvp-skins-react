import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselProducts.css'
import Card from '../../micro/CardProduct/CardProduct'


export default function CarouselProducts(props) {
    
    const products = props.productList;
    
    function getCarouselItem(initialIndex){
        
        for(var i=initialIndex; i<i+5; i++){
            return(
                <>
                    <Card idProduct={i}/>
                </>
            )
        }
    }

    return (
        <Carousel>
            <Carousel.Item>
                <div  className="carousel-cards">
                    {getCarouselItem(0)}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div  className="carousel-cards">
                    <Card idProduct={2}/>
                    <Card idProduct={2}/>
                    <Card idProduct={2}/>
                    <Card idProduct={2}/>
                    <Card idProduct={2}/>
                </div>
            </Carousel.Item>
            
            <Carousel.Item>
            <div  className="carousel-cards">
                    <Card idProduct={3}/>
                    <Card idProduct={3}/>
                    <Card idProduct={3}/>
                    <Card idProduct={3}/>
                    <Card idProduct={3}/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}