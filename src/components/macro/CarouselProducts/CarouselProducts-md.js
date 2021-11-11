import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselProducts.css'
import Card from '../../micro/CardProduct/CardProduct'
import image from '../../../assets/images/PRODUTOS/luva-abate.png'


function CarouselProducts() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Container className="py-2 carousel-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="py-2 carousel-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="py-2 carousel-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="py-2 carousel-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container className="py-2 carousel-cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselProducts