import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ListGroup } from 'react-bootstrap'

function Categories(props) {

    const URL = 'http://localhost:8080/categoria'
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        axios.get(`${URL}`).then((response) => {
            setCategories(response.data)
        })
    }

    return categories.map(item => {
        return (
            <>
                <ListGroup.Item key={item.codigoCategoria}>
                    <a href="#" className="link-header ">{item.descricao}</a>
                </ListGroup.Item>
            </>
        )
    })
}
export default Categories