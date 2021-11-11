import React from 'react'
import './Category.css'
import CardProduct from '../../components/micro/CardProduct/CardProduct'
import { Col, Container, ListGroup, Row, Form } from 'react-bootstrap'

function Category(props) {

    return (
        <>
            <Container fluid className='background'>
                <Row>
                    <Col md={2} className='filter-column'>
                        <div className='filter-title'>
                            FILTROS
                        </div>
                        <Form>
                            <ListGroup variant="flush" className='filter-list'>
                                <ListGroup.Item>PREÇOS</ListGroup.Item>
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
                                />
                                <Form.Check
                                    type="radio"
                                    label="De R$200,00 à R$300,00"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="De R$300,00 à R$400,00"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios4"
                                />
                                <Form.Check
                                    type="radio"
                                    label="De R$400,00 à R$500,00"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios5"
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
                                />
                                <Form.Check
                                    type="radio"
                                    label="Nova de Fábrica (Factory New)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios7"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Pouco Usada (Minimal Wear)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios8"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Testada em Campo (Field-Tested)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios9"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Bem Desgastada (Well-Worn)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios10"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Veterana de Guerra (Batle-Scarred)"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios11"
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
                                />
                                <Form.Check
                                    type="radio"
                                    label="Azul"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Roxo"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Pink"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Vermelho"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Faca/Luva"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <br />
                            </ListGroup>
                        </Form>

                    </Col>
                    <Col md={10} className='d-flex'>
                        <Container fluid>
                            <div className='title-category'>
                                PISTOLAS
                            </div>
                            <ListGroup horizontal className='cards'>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal className='cards'>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal className='cards'>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal className='cards'>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal className='cards'>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                                <ListGroup.Item className='card'><CardProduct /></ListGroup.Item>
                            </ListGroup>
                        </Container>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Category