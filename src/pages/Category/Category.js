import React, { useEffect, useState } from 'react'
import './Category.css'
import { Col, Container, ListGroup, Row, Form } from 'react-bootstrap'
import CategoryContainer from '../../components/macro/Category/CategoryContainer'
import { useParams } from 'react-router-dom';
import CategoryFilter from '../../components/macro/Category/CategoryFilter/CategoryFilter';

function Category(props) {

    const { id } = useParams();
    var idCategory = id

    function setId(id) {
        idCategory = id;
        console.log(idCategory)
    }

    return (
        <>
            <Container fluid className='background content-container justify-content-center'>
                <Row className='justify-content-center'>
                    {id == 0 || id.includes('rarity=') || id.includes('exterior')
                        ? <CategoryFilter link={setId} />
                        : <></>}
                </Row>
                <Row className='mx-0 justify-content-center'>
                    {id.includes('search=') ?
                        <CategoryContainer idCategory={idCategory} search /> :
                        <CategoryContainer idCategory={idCategory} />
                    }
                </Row>


            </Container>

        </>
    )
}

export default Category