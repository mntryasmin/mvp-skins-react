import React from 'react'
import { Carousel, CarouselItem, Container } from 'react-bootstrap'
import Banner1 from '../../../assets/images/banners/banner-destaques-1.png'
import Banner2 from '../../../assets/images/banners/banner-destaques-2.png'
import Banner3 from '../../../assets/images/banners/banner-destaque-3.jpg'
import BannerEventos1 from '../../../assets/images/banners/banner-eventos-1.png'
import BannerEventos2 from '../../../assets/images/banners/banner-eventos-2.png'
import BannerEventos3 from '../../../assets/images/banners/banner-eventos-3.png'




function Banner(props) {

    if (props.banner) {
        return (
            <>
                 <Container>
                    <Carousel variant="dark">
                        <CarouselItem>
                            <img className="d-block w-100" src={Banner1} alt="First slide" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src={Banner2} alt="Second slide" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src={Banner3} alt="Third slide" />
                        </CarouselItem>
                    </Carousel>
                </Container>
            </>
        )
    } else{
        return (
            <>
    
    
    
                <Container>
                    <Carousel variant="dark">
                        <CarouselItem>
                            <img className="d-block w-100" src={BannerEventos1} alt="First slide" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src={BannerEventos2} alt="Second slide" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src={BannerEventos3} alt="Third slide" />
                        </CarouselItem>
                    </Carousel>
                </Container>
    
            </>
        )
    }

    
}

export default Banner