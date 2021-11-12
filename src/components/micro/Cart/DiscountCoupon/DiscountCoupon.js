// REACT
import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './DiscountCoupon.css'

// PÁGINAS/COMPONENTES
import Button from '../../Button/Button'


class DiscountCoupon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            response: ''
        };

        // this.value = this.value.bind(this);
        // this.response = this.response.bind(this);
    }

    // verifiedCoupon(event) {
    //     event.preventDefault;
    // }

    render() {
        return (
            <>
                <Container className="discount-container px-0">
                    <Form className="py-2 discount-coupon" onSubmit={this.verifiedCoupon}>
                        <p className="mx-3"> Cupom de desconto </p>

                        <Container className="discount px-0">
                            <Form.Control className="discount-input mx-3 py-3" onChange={this.verifiedCoupon} type="text" name="cupom" placeholder="Digite seu cupom" />
                            <Button label="Aplicar" class="mx-2 btn-secundary-mvp" route=""></Button>
                        </Container>
                    </Form>
                    <p>{this.response}</p>
                </Container>

            </>
        )
    }
}

export default DiscountCoupon