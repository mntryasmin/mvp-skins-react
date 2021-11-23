import React, { useEffect, useState } from 'react'
import './Category.css'
import { Col, Container, ListGroup, Row, Form } from 'react-bootstrap'
import CategoryContainer from '../../components/macro/Category/CategoryContainer'
import { useParams } from 'react-router-dom';

function Category(props) {

    const { id } = useParams();
    // console.log(id);
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



                        <Col>
                            {/* <CategoryContainer idRarity={id}/>
                        <CategoryContainer idExterior={id}/>
                        <CategoryContainer idColection={id}/> */}

                            {id.includes('search=') ?
                                <CategoryContainer idCategory={id} search /> :
                                <CategoryContainer idCategory={id} />
                            }
                        </Col>
                    
                </Row>
            </Container>

        </>
    )
}

export default Category