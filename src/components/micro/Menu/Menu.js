import { Button, Offcanvas, ListGroup } from 'react-bootstrap'
import React, { useState } from 'react';
import BtnMenu from '../../../assets/images/icones/icon-menu.png'

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
                    <Offcanvas.Title>Categorias</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <a href="#">PISTOLAS</a>
                        </ListGroup.Item>
                        <ListGroup.Item><a href="#">SUBMETRALHADORAS</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">RIFLES</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">PESADAS</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">FACAS</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">AGENTES</a></ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default Menu