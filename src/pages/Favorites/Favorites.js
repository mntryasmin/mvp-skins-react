import React from 'react'
import './Favorites.css'
import { Row, Container, Col, } from 'react-bootstrap'
import Image1 from '../../assets/images/PRODUTOS/adaga-marcara-urbana.png'
import Image2 from '../../assets/images/PRODUTOS/luva-abate.png'
import Image3 from '../../assets/images/PRODUTOS/aug-momento.png'

function Favorites(props) {
    return (
        <React.Fragment>

            <Container fluid className="favoritos content-container">
                <Row className="pt-4">

                    <Col lg={12} className="coluna-favoritos">
                        <h1 className="favorites-h1">Suas Skins Favoritas</h1>
                        <Row className="row col-12 d-flex mx-0 justify-content-center"></Row>
                    </Col>
                </Row>


                <Row className="pb-5 container-favoritos">
                    <Col xs={12} sm={4} md={4} lg={4} xl={3} className="favorites-info px-5">
                        <img className="py-2 favorite-icon" src={Image1} alt="favorite1" />
                        <p className="favorite-description">FACAS || ADAGA-MARCARÁ-URBANA</p>
                    </Col>

                    <Col xs={12} sm={4} md={4} lg={4} xl={3} className="favorites-info px-5">
                        <img className="py-2 favorite-icon" src={Image2} alt="favorite2" />
                        <p className="favorite-description">LUVAS || LUVA ABATE </p>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} xl={3} className="favorites-info px-5">
                        <img className="py-2 favorite-icon" src={Image3} açt="favorite3" />
                        <p className="favorite-description">METRALHADORA || AUG MOMENTUM UMP-45 </p>
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Favorites