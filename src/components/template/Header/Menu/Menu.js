import React, { useState } from 'react';
import './Menu.css'
import { Button, Offcanvas, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BtnMenu from '../../../../assets/images/icones/icon-menu.png'
import Categories from '../Categories/GetCategories.js'

function Menu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="link" onClick={handleShow} >
                <img src={BtnMenu} width="30" height="30"></img>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='title-menu'>Categorias</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup variant="flush">
                        <Categories />
                        <ListGroup.Item>
                            <Link to="/dashboard" className="link-header ">SEUS DADOS</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default Menu