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
            {/* Carousel 1 */}
            {products.length>=5
            ?<Carousel.Item>
                {/* Telas extra large */}
                <div  className="carousel-cards carousel-xl">
                    <Card idProduct={products[0].id}/>
                    <Card idProduct={products[1].id}/>
                    <Card idProduct={products[2].id}/>
                    <Card idProduct={products[3].id}/>
                    <Card idProduct={products[4].id}/>
                </div>
                {/* Telas large */}
                <div  className="carousel-cards carousel-lg">
                    <Card idProduct={products[0].id}/>
                    <Card idProduct={products[1].id}/>
                    <Card idProduct={products[2].id}/>
                    <Card idProduct={products[3].id}/>
                </div>
                {/* Telas small */}
                <div  className="carousel-cards carousel-sm">
                    <Card idProduct={products[0].id}/>
                    <Card idProduct={products[1].id}/>
                    <Card idProduct={products[2].id}/>
                </div>
                {/* Telas extra small */}
                <div  className="carousel-cards carousel-xs">
                    <Card idProduct={products[0].id}/>
                    <Card idProduct={products[1].id}/>
                </div>
            </Carousel.Item>
            :<></>}

            {/* Carousel 2 */}
            {products.length>=10?<Carousel.Item>
                {/* Telas extra large */}
                <div  className="carousel-cards carousel-xl">
                    <Card idProduct={products[5].id}/>
                    <Card idProduct={products[6].id}/>
                    <Card idProduct={products[7].id}/>
                    <Card idProduct={products[8].id}/>
                    <Card idProduct={products[9].id}/>
                </div>
                {/* Telas large */}
                <div  className="carousel-cards carousel-lg">
                    <Card idProduct={products[4].id}/>
                    <Card idProduct={products[5].id}/>
                    <Card idProduct={products[6].id}/>
                    <Card idProduct={products[7].id}/>
                </div>
                {/* Telas small */}
                <div  className="carousel-cards carousel-sm">
                    <Card idProduct={products[3].id}/>
                    <Card idProduct={products[4].id}/>
                    <Card idProduct={products[5].id}/>
                </div>
                {/* Telas extra small */}
                <div  className="carousel-cards carousel-xs">
                    <Card idProduct={products[2].id}/>
                    <Card idProduct={products[3].id}/>
                </div>
            </Carousel.Item>:
            <></>}

        </Carousel>
    );
}