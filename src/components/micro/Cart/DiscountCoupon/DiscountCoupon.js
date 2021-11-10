// REACT
import React from 'react'
import { Container, Form } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './DiscountCoupon.css'

// PÁGINAS/COMPONENTES
import Button from '../../Button/Button'


function DiscountCoupon(props) {

    return (
        <>
            <Container className="discount-container px-0">
                <Form className="discount-coupon">
                    <p className="mx-3 card-caption-mvp"> Cupom de desconto </p>

                    <Container className="discount px-0">
                        <Form.Control className="col-6 mx-2 py-3" type="text" name="cupom" placeholder="Digite seu cupom" />
                        <Button label="Aplicar" class="mx-2 btn btn-primary btn-mvp btn-secundario-mvp"></Button>
                    </Container>
                </Form>
            </Container>

        </>
    )
}

export default DiscountCoupon