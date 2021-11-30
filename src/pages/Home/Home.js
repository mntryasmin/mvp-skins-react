// REACT
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'

// ESTILO
import '../../assets/css/Style.css'
import './Home.css'

// PÁGINAS/COMPONENTES
import Banners from '../../components/macro/Banners/Banner'
import CarouselProducts from '../../components/macro/CarouselProducts/CarouselProducts'
import Title from '../../components/micro/Title/Title'
import CardProduct from '../../components/micro/CardProduct/CardProduct'

function Home(props) {

    const [productSubcategory, setProductSubcategory] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/produtos/category/3`)
            .then((response) => {
                setProductSubcategory(response.data)
            })
            .catch((error) => {
                console.log('Ocorreu um erro: ' + error)
            })
    }, [])

    const [productSubcategoryB, setProductSubcategoryB] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/produtos/category/4`)
            .then((response) => {
                setProductSubcategoryB(response.data)
            })
            .catch((error) => {
                console.log('Ocorreu um erro: ' + error)
            })
    }, [])

    const [productSubcategoryC, setProductSubcategoryC] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/produtos/category/1`)
            .then((response) => {
                setProductSubcategoryC(response.data)
            })
            .catch((error) => {
                console.log('Ocorreu um erro: ' + error)
            })
    }, [])

    while (productSubcategory[0] == undefined) {
        return (
            <>
                <Container fluid className="py-4 mx-0 home">
                    {/* BANNERS  */}
                    <p className="mt-2 mb-2 title-carousel card-caption-mvp">Destaques</p>
                    <Row className='row-banner'>
                        <Banners banner />
                    </Row>

                    <p className="mt-2 mb-2 title-carousel card-caption-mvp">Eventos</p>
                    <Row className='row-banner'>
                        <Banners />
                    </Row>
                </Container>
            </>
        )
    }
    return (
        document.title = 'SKINS CS:GO | Home',
        <>
            <Container fluid className="pb-5 home content-container">
                {/* BANNERS  */}
                <p className="mt-5 mb-3 title-carousel card-caption-mvp">Destaques</p>
                <Row className='row-banner'>
                    <Banners banner />
                </Row>

                <p className="mt-5 mb-3
                 title-carousel card-caption-mvp">Eventos</p>
                <Row className='row-banner'>
                    <Banners />
                </Row>

                {/* CAROUSEL'S DE PRODUTOS  */}
                <Row className='carousel-home'>
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Rifles</p>
                    <CarouselProducts productList={productSubcategory} />
                </Row>


                <Row className='carousel-home'>
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Agentes</p>
                    <CarouselProducts productList={productSubcategoryB} />
                </Row>

                <Row className='carousel-home'>
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Pistolas</p>
                    <CarouselProducts productList={productSubcategoryC} />
                </Row>


                {/* PRODUTOS PARA FORMATO RESPONSIVO  */}
                <Row className='carousel-home-resp'>
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Rifles</p>
                    <CardProduct idProduct={24}/>
                    <CardProduct idProduct={28}/>
                    <CardProduct idProduct={29}/>
                    <CardProduct idProduct={27}/>
                    <CardProduct idProduct={35}/>
                    <CardProduct idProduct={32}/>
                </Row>


                <Row className='carousel-home-resp'>
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Agentes</p>
                    <CardProduct idProduct={32}/>
                    <CardProduct idProduct={40}/>
                    <CardProduct idProduct={41}/>
                    <CardProduct idProduct={36}/>
                    <CardProduct idProduct={38}/>
                    <CardProduct idProduct={34}/>
                </Row>

                
                <Row className='carousel-home-resp'>
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Pistolas</p>
                    <CardProduct idProduct={2}/>
                    <CardProduct idProduct={8}/>
                    <CardProduct idProduct={9}/>
                    <CardProduct idProduct={7}/>
                    <CardProduct idProduct={6}/>
                    <CardProduct idProduct={5}/>


                    {console.log(productSubcategoryC)}
                    
                </Row>
            </Container>
        </>
    )
}

export default Home