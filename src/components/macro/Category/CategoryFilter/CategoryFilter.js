import React from 'react'
import { Col, ListGroup, Form, Row, Container } from 'react-bootstrap'
import './CategoryFilter.css'

function Comp(props) {

    const url = 'http://localhost:3000/category/'
    return (
        <>

            <Col xs={12} className='filter-column '>
                <div className='filter-title p-0 my-2'>
                    FILTROS
                </div>
                <Form>
                    <ListGroup horizontal variant="flush" className='text-center'>
                        <Col>
                            <ListGroup.Item className="categoryfilter-item mx-0">EXTERIOR</ListGroup.Item>
                            <Form.Check
                                type="radio"
                                label="Nova de Fábrica (Factory New)"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios7"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'exterior=1' }}
                            />
                            <Form.Check
                                type="radio"
                                label="Pouco Usada (Minimal Wear)"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios8"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'exterior=2' }}
                            />
                            <Form.Check
                                type="radio"
                                label="Testada em Campo (Field-Tested)"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios9"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'exterior=3' }}
                            />
                            <Form.Check
                                type="radio"
                                label="Bem Desgastada (Well-Worn)"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios10"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'exterior=4' }}
                            />
                            <Form.Check
                                type="radio"
                                label='Veterana de Guerra (Batle-Scarred)'
                                name="formHorizontalRadios"
                                id="formHorizontalRadios11"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'exterior=5' }}
                            />

                        </Col>
                        <Col>
                            <ListGroup.Item className="categoryfilter-item mx-0">RARIDADE</ListGroup.Item>
                            <Form.Check
                                type="radio"
                                label="Azul"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios13"
                                className='check-box  py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'rarity=1' }}
                            />
                            <Form.Check
                                type="radio"
                                label="Roxo"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios14"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'rarity=2' }}
                            />
                            <Form.Check
                                type="radio"
                                label="Pink"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios15"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'rarity=3' }}
                            />
                            <Form.Check
                                type="radio"
                                label="Vermelho"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios16"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'rarity=4' }}
                            />
                            <Form.Check
                                type="radio"
                                label="Faca/Luva"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios17"
                                className='check-box py-2 filter-check-box'
                                onClick={() => { window.location.href = url + 'rarity=5' }}
                            />

                        </Col>
                    </ListGroup>
                </Form>
            </Col>


        </>
    )
}

export default Comp