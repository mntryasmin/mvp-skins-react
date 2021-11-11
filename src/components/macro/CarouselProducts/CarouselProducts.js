import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './CarouselProducts.css'
import Card from '../../micro/CardProduct/CardProduct'
import image from '../../../assets/images/PRODUTOS/luva-abate.png'


function CarouselProducts(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            {/* CAROUSEL lg e xl  */}
            <Carousel className="carousel-lg-xl" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-cards">
                    <Card /><Card /><Card /><Card /><Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /><Card /><Card /><Card /><Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /><Card /><Card /><Card /><Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /><Card /><Card /><Card /><Card />
                </Carousel.Item >
            </Carousel >

            {/* CAROUSEL MD  */}
            <Carousel className="carousel-md" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card /> <Card />
                </Carousel.Item >
            </Carousel >

            {/* CAROUSEL SM  */}
            <Carousel className="carousel-sm" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card /> <Card />
                </Carousel.Item >
            </Carousel >

            {/* CAROUSEL XS  */}
            <Carousel className="carousel-xs" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >

                <Carousel.Item className="carousel-cards">
                    <Card /> <Card />
                </Carousel.Item >
            </Carousel >
        </>
    );
}

export default CarouselProducts