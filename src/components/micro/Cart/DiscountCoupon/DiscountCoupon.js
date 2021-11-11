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
                    <Form className="discount-coupon" onSubmit={this.verifiedCoupon}>
                        <p className="mx-3 card-caption-mvp"> Cupom de desconto </p>

                        <Container className="discount px-0">
                            {/* value={this.state.value} */}
                            <Form.Control className="col-6 mx-2 py-3"  onChange={this.verifiedCoupon} type="text" name="cupom" placeholder="Digite seu cupom" />
                            <Button label="Aplicar" class="mx-2 btn btn-primary btn-mvp btn-secundario-mvp"></Button>
                        </Container>
                    </Form>
                    <p>{this.response}</p>
                </Container>

            </>
        )
    }
}

export default DiscountCoupon