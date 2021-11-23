// REACT
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'

// ESTILO
import '../../assets/css/Style.css'
import './Home.css'

// PÁGINAS/COMPONENTES
import Banners from '../../components/macro/Banners/Banner'
import CarouselProducts from '../../components/macro/CarouselProducts/CarouselProducts'
import Title from '../../components/micro/Title/Title'
function Home(props) {
    
    const [productSubcategory, setProductSubcategory] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/produtos/category/3`)
        .then((response)=>{
            setProductSubcategory(response.data)
        })
        .catch((error)=>{
            console.log('Ocorreu um erro: '+error)
        })
    },[])
    
    const [productSubcategoryB, setProductSubcategoryB] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/produtos/category/4`)
        .then((response)=>{
            setProductSubcategoryB(response.data)
        })
        .catch((error)=>{
            console.log('Ocorreu um erro: '+error)
        })
    },[])

    const [productSubcategoryC, setProductSubcategoryC] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/produtos/category/1`)
        .then((response)=>{
            setProductSubcategoryC(response.data)
        })
        .catch((error)=>{
            console.log('Ocorreu um erro: '+error)
        })
    },[])

    while(productSubcategory[0] == undefined){
        return (
            <>
                <Container fluid className="py-4 mx-0 home">
                    {/* BANNERS  */}
                    <Title title="Destaques" class="mb-4" h1/>
                    <Row className='row-banner'>
                        <Banners banner/>
                    </Row>
                    
                    <Title title="Eventos"  class="my-4" h1/>
                    <Row className='row-banner'>
                    <Banners />
                    </Row>
                </Container>
            </>
        )
    }
    return (
        <>
            <Container fluid className="py-4 mx-0 home">
                {/* BANNERS  */}
                <Title title="Destaques" class="mb-4" h1/>
                <Row className='row-banner'>
                    <Banners banner/>
                </Row>
                
                <Title title="Eventos"  class="my-4" h1/>
                <Row className='row-banner'>
                <Banners />
                </Row>

                {/* CAROUSEL'S DE PRODUTOS  */}
                <Container className="home-carousel">
                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Rifles</p>
                    <CarouselProducts productList={productSubcategory}/>

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Agentes</p>
                    <CarouselProducts productList={productSubcategoryB}/>

                    <p className="mt-5 mb-0 title-carousel card-caption-mvp">Pistolas</p>
                    <CarouselProducts productList={productSubcategoryC}/>
                </Container>
            </Container>
        </>
    )
}

export default Home