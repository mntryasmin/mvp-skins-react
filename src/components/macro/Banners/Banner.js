import React from 'react'
import './Banner.css'
import { Carousel, CarouselItem, Container } from 'react-bootstrap'
import Banner1 from '../../../assets/images/banners/banner-destaques-1.png'
import Banner2 from '../../../assets/images/banners/banner-destaques-2.png'
import Banner3 from '../../../assets/images/banners/banner-destaque-3.jpg'
import BannerEventos1 from '../../../assets/images/banners/banner-eventos-1.png'
import BannerEventos2 from '../../../assets/images/banners/banner-eventos-2.png'
import BannerEventos3 from '../../../assets/images/banners/banner-eventos-3.png'

function Banner(props) {
    <>

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container fluid className = "banner-eventos">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src={BannerEventos1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"src={BannerEventos2} alt = "Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BannerEventos3} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
            </Container>
        </>
    
    if (props.banner) {
        return (
            <>
                 
                    <Carousel variant="dark" className='container-banner'>
                        <CarouselItem>
                            <img className="d-block" src={Banner1} alt="First slide" className='banner'/>
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block" src={Banner2} alt="Second slide" className='banner'/>
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block" src={Banner3} alt="Third slide" className='banner'/>
                        </CarouselItem>
                    </Carousel>
                
            </>
        )
    } else{
        return (
            <>
                    <Carousel variant="dark" className='container-banner'>
                        <CarouselItem>
                            <img className="d-block w-100" src={BannerEventos1} alt="First slide" className='banner'/>
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src={BannerEventos2} alt="Second slide" className='banner'/>
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src={BannerEventos3} alt="Third slide" className='banner'/>
                        </CarouselItem>
                    </Carousel>
    
            </>
        )
    }

}

export default Banner