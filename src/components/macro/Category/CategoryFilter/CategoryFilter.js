import React from 'react'
import { Col,  ListGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CategoryFilter.css'

function Comp(props) {

    return(
        <>
            <Col sm={3} md={2} className='filter-column'>
                <div className='filter-title'>
                    FILTROS
                </div>
                <Form>
                    <ListGroup variant="flush" className='filter-list'>
                        <ListGroup.Item >PREÇOS</ListGroup.Item>
                        {/* <Link to="/category/exterior=1"> */}
                        <Form.Check
                            type="radio"
                            label="Todos"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onClick={()=>props.link('1')}
                            className='check-box'
                        />
                        {/* </Link> */}
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
                        <br />
                        <ListGroup.Item>EXTERIOR</ListGroup.Item>
                        <Form.Check
                            type="radio"
                            label="Todos"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios6"
                            className='check-box'
                            onClick={()=>{<Link to="/category/exterior=1"/>}}
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
                        <ListGroup.Item>RARIDADE</ListGroup.Item>
                        <Form.Check
                            type="radio"
                            label="Todos"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios12"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Azul"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios13"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Roxo"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios14"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Pink"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios15"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Vermelho"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios16"
                            className='check-box'
                        />
                        <Form.Check
                            type="radio"
                            label="Faca/Luva"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios17"
                            className='check-box'
                        />
                        <br />
                    </ListGroup>
                </Form>
            </Col>
        </>
    )
}

export default Comp