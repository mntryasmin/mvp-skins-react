import React from 'react'
import { Col,  ListGroup, Form } from 'react-bootstrap'
import './CategoryFilter.css'

function Comp(props) {

    const url = 'http://localhost:3000/category/'
    return(
        <>
            <Col sm={3} md={2} className='filter-column p-0'>
                <div className='filter-title pt-3'>
                    FILTROS
                </div>
                <Form>
                    <ListGroup variant="flush" className='py-3'>
                        <ListGroup.Item className="categoryfilter-item mx-0 my-2">EXTERIOR</ListGroup.Item>
                        <Form.Check
                            type="radio"
                            label="Nova de Fábrica &emsp; &emsp; (Factory New)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios7"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'exterior=1'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Pouco Usada &emsp; &emsp; &emsp; &emsp; (Minimal Wear)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios8"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'exterior=2'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Testada em Campo &emsp; &emsp; (Field-Tested)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios9"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'exterior=3'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Bem Desgastada &emsp; &emsp; &emsp; &emsp; (Well-Worn)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios10"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'exterior=4'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Veterana de Guerra &emsp; &emsp; (Batle-Scarred)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios11"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'exterior=5'}}
                        />
                        <br />
                        <ListGroup.Item className="categoryfilter-item mx-0 my-2">RARIDADE</ListGroup.Item>
                        <Form.Check
                            type="radio"
                            label="Azul"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios13"
                            className='check-box  py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'rarity=1'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Roxo"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios14"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'rarity=2'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Pink"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios15"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'rarity=3'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Vermelho"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios16"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'rarity=4'}}
                        />
                        <Form.Check
                            type="radio"
                            label="Faca/Luva"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios17"
                            className='check-box py-2 filter-check-box'
                            onClick={()=>{window.location.href=url+'rarity=5'}}
                        />
                        <br />
                    </ListGroup>
                </Form>
            </Col>
        </>
    )
}

export default Comp