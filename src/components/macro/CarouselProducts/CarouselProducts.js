import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselProducts.css'
import Card from '../../micro/CardProduct/CardProduct'


export default function CarouselProducts() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carousel-cards">
                <Card /><Card /><Card /><Card /><Card />
            </Carousel.Item>
            
            <Carousel.Item className="carousel-cards">
                <Card /><Card /><Card /><Card /><Card />
            </Carousel.Item>
            
            <Carousel.Item className="carousel-cards">
                <Card /><Card /><Card /><Card /><Card />
            </Carousel.Item>
        </Carousel>
    );
}