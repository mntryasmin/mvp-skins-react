import React from 'react'
import './Banner.css'
import { Carousel, CarouselItem, Container } from 'react-bootstrap'
import Banner1 from '../../../assets/images/banners/destaque_1.png'
import Banner2 from '../../../assets/images/banners/destaque_2.png'
import Banner3 from '../../../assets/images/banners/destaque_3.png'
import BannerEventos1 from '../../../assets/images/banners/eventos_1.jpg'
import BannerEventos2 from '../../../assets/images/banners/eventos_2.gif'

function Banner(props) {
    <>

        <Carousel className="banner-img" variant="dark">
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

        <Container fluid className="banner-eventos banner-img">
            <Carousel variant="dark">
                <Carousel.Item>
                    <a href="https://www.twitch.tv/gaules"><img className="d-block w-100" src={BannerEventos1} alt="First slide" /></a>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={BannerEventos2} alt="Second slide" />
                </Carousel.Item>
            </Carousel>
        </Container>
    </>

    if (props.banner) {
        return (
            <>

                <Carousel variant="dark" className='container-banner'>
                    <CarouselItem>
                        <img className="d-block" src={Banner1} alt="First slide" className='banner' />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block" src={Banner2} alt="Second slide" className='banner' />
                    </CarouselItem>
                    <CarouselItem>
                        <a href="http://localhost:3000/product/35"><img className="d-block" src={Banner3} alt="Third slide" className='banner' /></a>
                    </CarouselItem>
                </Carousel>

            </>
        )
    } else {
        return (
            <>
                <Carousel variant="dark" className='container-banner'>
                    <CarouselItem>
                        <a href="https://www.youtube.com/channel/UC5jpxDZx4yoBo324pMQ91Ww" target="_blank"><img className="d-block w-100" src={BannerEventos1} alt="First slide" className='banner' /></a>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100" src={BannerEventos2} alt="Second slide" className='banner' />
                    </CarouselItem>
                </Carousel>

            </>
        )
    }

}

export default Banner