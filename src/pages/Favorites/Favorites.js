import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Favorites.css'
import { Row, Col, Popover, Container } from 'react-bootstrap'
import Card from '../../components/micro/CardProduct/CardProduct'
import Title from '../../components/micro/Title/Title'
import axios from 'axios'

function Favorites(props) {
    const client = JSON.parse(localStorage.getItem('client'));
    console.log(client);
    const [favorite, setFavorite] = useState({});

    const Favs =
        axios.get(`http://localhost:8080/fav/client/` + client.codigoCliente, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
            .then((response) => {
                setFavorite(response.data);
            })
            .catch((erro) => {
                console.log("Não foi possível buscar os favoritos do cliente: " + erro)
            });



    return (
        document.title = `SKINS CS:GO | Meus favoritos`,
        <>
            <Container fluid className='fav py-4 m-0'>
                <Title title="SKINS FAVORITAS" />
                <Card />
            </Container>
        </>
    )
}
export default Favorites