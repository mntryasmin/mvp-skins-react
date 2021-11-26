import React, { useState } from 'react';
import './Menu.css'
import { Button, Offcanvas, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BtnMenu from '../../../../assets/images/icones/icon-menu.png'
import Categories from '../Categories/GetCategories.js'
import LoginModal from '../../../micro/LoginModal/LoginModal';

function Menu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const LinkDash = () => {
        if(localStorage.getItem("Authorization")){
            return <Link to='/myaccount'
                className='btn-mvp btn-mvp-orange-clean seus-dados-sidebar'>
                Seus dados
                </Link>
        }else {
            return <LoginModal linkDash/>
        }
    }

    return (
        <>
            <Button className="mx-3 sidebar-menu-icon" variant="link" onClick={handleShow} >
                <img src={BtnMenu} width="30" height="30"></img>
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="p-2 sidebar-menu">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='title-menu'>Categorias</Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body className="sidebar-menu-body">
                    <ListGroup variant="flush">
                        <Categories/>
                        <div className="py-3 button-login-sidebar">
                        {LinkDash()}
                        </div>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default Menu