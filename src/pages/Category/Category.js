import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'
import CardProduct from '../../components/micro/CardProduct/CardProduct'
import { Col, Container, ListGroup, Row, Form } from 'react-bootstrap'
import ProductPrice from '../../components/micro/Product/ProductPrice/ProductPrice';

function Category(props) {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/produtos`)
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
            <Col sm={3} md={2} className='filter-column'>
                <div className='filter-title'>
                    FILTROS
                </div>
                <Form>
                    <ListGroup variant="flush" className='filter-list'>
                        <ListGroup.Item >PREÇOS</ListGroup.Item>
                        <Form.Check
                            type="radio"
                            label="Todos"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="De R$100,00 à R$200,00"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="De R$200,00 à R$300,00"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="De R$300,00 à R$400,00"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="De R$400,00 à R$500,00"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios5"
                            className='check-box'
                        />
                    </ListGroup>
                    <br />
                </Form>
                <Form>
                    <ListGroup>
                        <ListGroup.Item>EXTERIOR</ListGroup.Item>
                        <Form.Check
                            type="radio"
                            label="Todos"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios6"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Nova de Fábrica (Factory New)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios7"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Pouco Usada (Minimal Wear)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios8"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Testada em Campo (Field-Tested)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios9"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Bem Desgastada (Well-Worn)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios10"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Veterana de Guerra (Batle-Scarred)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios11"
                            className='check-box'
                        />
                        <br />
                    </ListGroup>
                </Form>
                <Form>
                    <ListGroup>
                        <ListGroup.Item>RARIDADE</ListGroup.Item>
                        <Form.Check
                            type="radio"
                            label="Todos"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Azul"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Roxo"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Pink"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Vermelho"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Faca/Luva"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            className='check-box'
                        />
                        <br />
                    </ListGroup>
                </Form>



            </Col>
            </>
        )
    }
    return (
        <>
            <Container fluid className='background content-container'>
                <Row>
                    <Col sm={3} md={2} className='filter-column'>
                        <div className='filter-title'>
                            FILTROS
                        </div>
                        <Form>
                            <ListGroup variant="flush" className='filter-list'>
                                <ListGroup.Item >PREÇOS</ListGroup.Item>
                                <Form.Check
                                    type="radio"
                                    label="Todos"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="De R$100,00 à R$200,00"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="De R$200,00 à R$300,00"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="De R$300,00 à R$400,00"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios4"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="De R$400,00 à R$500,00"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios5"
                                    className='check-box'
                                />
                            </ListGroup>
                            <br />
                        </Form>
                        <Form>
                            <ListGroup>
                                <ListGroup.Item>EXTERIOR</ListGroup.Item>
                                <Form.Check
                                    type="radio"
                                    label="Todos"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios6"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Nova de Fábrica (Factory New)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios7"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Pouco Usada (Minimal Wear)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios8"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Testada em Campo (Field-Tested)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios9"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Bem Desgastada (Well-Worn)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios10"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Veterana de Guerra (Batle-Scarred)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios11"
                                    className='check-box'
                                />
                                <br />
                            </ListGroup>
                        </Form>
                        <Form>
                            <ListGroup>
                                <ListGroup.Item>RARIDADE</ListGroup.Item>
                                <Form.Check
                                    type="radio"
                                    label="Todos"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Azul"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Roxo"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Pink"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Vermelho"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    className='check-box'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Faca/Luva"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    className='check-box'
                                />
                                <br />
                            </ListGroup>
                        </Form>



                    </Col>
                    <Col sm={9} md={10} className='d-flex justify-content-center'>
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

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Category