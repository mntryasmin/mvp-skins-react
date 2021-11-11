// REACT
import React from 'react'
import { Container } from 'react-bootstrap'

// ESTILO
import '../../assets/css/Style.css'
import './Home.css'

// PÁGINAS/COMPONENTES
import Banners from '../../components/macro/Banners/Banner'
import CarouselProducts from '../../components/macro/CarouselProducts/CarouselProducts'
function Home(props) {

    return (
        <>
            <Container fluid className="px-2 py-4 mx-0 home">
                {/* BANNERS  */}
                <p className="mt-0 mb-0 pt-3 pb-1 title-banner card-caption-mvp">Destaques</p>
                <Banners />

                <p className="mt-5 mb-0 title-banner card-caption-mvp">Eventos</p>
                <Banners />

                {/* CAROUSEL'S DE PRODUTOS  */}
                <Container className="home-carousel">
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Skins mais vendidas</p>
                    <CarouselProducts />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top armas</p>
                    <CarouselProducts />

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Top facas</p>
                    <CarouselProducts />
                </Container>
            </Container>
        </>
    )
}

export default Home