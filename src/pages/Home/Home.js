// REACT
import React from 'react'

// ESTILO
import '../../assets/css/Style.css'
import './Home.css' 

// PÁGINAS/COMPONENTES
import Banners from '../../components/macro/Banners/Banner'
import CarouselProducts from '../../components/macro/ProductsCarousel/ProductsCarousel'

function Home(props) {

    return(
        <>

        {/* BANNERS  */}
        <p className="title-banner">Destaques</p>
        <Banners/>

        <p className="title-banner">Eventos</p>
        <Banners/>

        {/* CAROUSEL'S DE PRODUTOS  */}
        <p className="title-carousel">Mais vendidas</p>
        <CarouselProducts/>

        <p className="title-carousel">Top armas</p>
        <CarouselProducts/>

        <p className="title-carousel">Top facas</p>
        <CarouselProducts/>

        </>
    )
}

export default Home