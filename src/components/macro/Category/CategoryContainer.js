import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CardProduct from '../../../components/micro/CardProduct/CardProduct'
import { Container, ListGroup, Row} from 'react-bootstrap'
import ProductPrice from '../../../components/micro/Product/ProductPrice/ProductPrice';

function CategoryContainer(props) {

    const [product, setProduct] = useState([]);
    const idCategory = props.idCategory;
    let url = '';
    if(idCategory==0){
        url = `http://localhost:8080/produtos`
    } else {
        url = `http://localhost:8080/produtos/category/${idCategory}`
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

    while(product[0] == undefined){
        return(
            <>
            
            </>
        )
    }
    return(
        <>
            <Container fluid>
                <div className='title-category'>
                    PISTOLAS
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