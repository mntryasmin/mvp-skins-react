// REACT
import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './DiscountCoupon.css'

// PÁGINAS/COMPONENTES

function DiscountCoupon(props) {

    return (
        <>
            <Container className="px-4">
                <Form className="discount-coupon">
                    <p className="card-caption-mvp"> Cupom de desconto </p>

                    <Container className="discount  px-0">
                        <Form.Control className="py-3" type="text" name="cupom" placeholder="Digite seu cupom" />
                        <Button>Aplicar</Button>
                    </Container>
                </Form>
            </Container>

        </>
    )
}

export default DiscountCoupon