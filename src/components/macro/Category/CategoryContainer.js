import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CardProduct from '../../../components/micro/CardProduct/CardProduct'
import { Container, ListGroup, Row} from 'react-bootstrap'
import "./CategoryContainer.css"

function CategoryContainer(props) {

    const [product, setProduct] = useState([]);
    const idCategory = props.idCategory;
    // const idRarity = props.idRarity;
    // const idExterior = props.idExterior;
    // const idColection = props.idColection;
    let url = '';
    if(idCategory==0){
        url = `http://localhost:8080/produtos`
    } 
    
    else if(idCategory.includes('search=')){
        var idCategorySearch = idCategory.substring('search='.length)
        url = 'http://localhost:8080/produtos/search/'+idCategorySearch
    }
    else {
        url = `http://localhost:8080/produtos/category/${idCategory}`
    }

    if(idRarity==0){
        url =`http://localhost:8080/produtos/rarity`
    }else {
        url =`http://localhost:8080/produtos/rarity/${idRarity}`
    }
    if(idExterior==0){
        url =`http://localhost:8080/produtos/exterior`
    } else {
        url = `http://localhost:8080/produtos/exterior/${idExterior}`
    }
    if(idColection==0){
        url=`http://localhost:8080/produtos/colection`
    }
    else {
        url = `http://localhost:8080/produtos/colection/${idColection}`
    }
    


 
    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setProduct(response.data)
        })
        .catch((error)=>{
            console.log('Ocorreu um erro: '+error)
        })
    },[])

    function getProductsCards(){
        return product.map(p =>{
            return(
                <>
                    <ListGroup.Item className='item'>
                        <CardProduct idProduct={p.id}/>
                    </ListGroup.Item>
                </>
            )
        })
    }

    while(product[0] == undefined && props.search){
        return(
            <>
                <Container fluid>
                    <div className='search-category'>
                        Resultados para "{idCategorySearch}" ...
                    </div>
                </Container>
            </>
        )
    }

    while(product[0] == undefined){
        return(
            <>
                <Container fluid>
                    <div className='search-category'>
                        
                    </div>
                </Container>
            </>
        )
    }

    if(props.search){
        return(
            <>
                <Container fluid>
                    <div className='search-category'>
                        Resultados para "{idCategorySearch}" ...
                    </div>
                    <Row >
                        <ListGroup horizontal className='cards'>
                            {getProductsCards()}
                        </ListGroup>
                    </Row>
                </Container>
            </>
        )
    }

    return(
        <>
            <Container fluid>
                <div className='title-category'>
                    {idCategory==0?'SKINS':product[0].categoria.descricao}
                </div>
                <Row >
                    <ListGroup horizontal className='cards'>
                        {getProductsCards()}
                    </ListGroup>
                </Row>
            </Container>
        </>
    )
}

export default CategoryContainer