// REACT
import React from 'react'
import { Container, Row } from 'react-bootstrap'

// ESTILO
import '../../assets/css/Style.css'
import './Home.css'

// PÁGINAS/COMPONENTES
import Banners from '../../components/macro/Banners/Banner'
import CarouselProductsXs from '../../components/macro/CarouselProducts/CarouselProducts-xs'
import CarouselProductsSm from '../../components/macro/CarouselProducts/CarouselProducts-sm'
import CarouselProductsMd from '../../components/macro/CarouselProducts/CarouselProducts-md'
import CarouselProductsLgXl from '../../components/macro/CarouselProducts/CarouselProducts-lg-xl'

function Home(props) {

    return (
        <>
            <Container fluid className="px-2 py-4 mx-0 home">
                {/* BANNERS  */}
                <p className="mt-0 mb-0 pt-3 pb-1 title-banner card-caption-mvp">Destaques</p>
                <Row className='row-banner'>
                <Banners banner/>
                </Row>
                
                <p className="mt-5 mb-0 title-banner card-caption-mvp">Eventos</p>
                <Row>
                <Banners />
                </Row>

                {/* CAROUSEL'S DE PRODUTOS  */}
                <Container className="p-0 m-0 home-xs">
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Skins mais vendidas</p>
                    <CarouselProductsXs />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top armas</p>
                    <CarouselProductsXs />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top facas</p>
                    <CarouselProductsXs />
                </Container>

                <Container className="p-0 m-0 home-sm">
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Skins mais vendidas</p>
                    <CarouselProductsSm />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top armas</p>
                    <CarouselProductsSm />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top facas</p>
                    <CarouselProductsSm />
                </Container>

                <Container className="p-0 m-0 home-md">
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Skins mais vendidas</p>
                    <CarouselProductsMd />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top armas</p>
                    <CarouselProductsMd />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top facas</p>
                    <CarouselProductsMd />
                </Container>

                <Container className="p-0 m-0 home-respons-lg-xl">
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Skins mais vendidas</p>
                    <CarouselProductsLgXl />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top armas</p>
                    <CarouselProductsLgXl />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top facas</p>
                    <CarouselProductsLgXl />
                </Container>
            </Container>
        </>
    )
}

export default Home