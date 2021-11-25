// REACT
import React, { Component } from 'react'
import axios from 'axios'
import { Container, Form, FormControl, } from 'react-bootstrap'
import Button from '../../Button/Button'

// ESTILO
import '../../../../assets/css/Style.css'
import './DiscountCoupon.css'

// PÁGINAS/COMPONENTES
// import Button from '../../Button/Button'

export default class DiscountCoupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coupon: '',
            validation: this.props.validation,
            price: this.props.price
        };

    }

    // LIDANDO COM OS EVENTOS NOS STATES INICIADOS
    handleChange = event => {
        this.setState({ coupon: event.target.value });
    }

    // BUSCANDO A ATUALIZANDO O VALOR DO CUPOM
    handleGetDiscount() {
        axios.get(`http://localhost:8080/promotion/coupon-discount/` + this.state.coupon)
            .then(async (response) => {
                const p = await response.data
                console.log(p)
                
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    }

    // VALIDA O CÓDIGO INSERIDO PELO USUÁRIO E SE ESTÁ DENTRO DA DATA
    handleValidedCodCoupon = () => {

        
    }

Submit = event => {
    event.preventDefault();
    this.props.func(this.state.coupon);
}

render() {
    return (
        <>
            <Container className="discount-container px-0">
                <Form className="py-2 discount-coupon">
                    <p className="mx-3"> Cupom de desconto </p>

                    <Container className="discount px-0">
                        <FormControl
                            type="text"
                            name="coupon"
                            className="discount-input mx-3 py-3"
                            onChange={this.handleChange}
                            placeholder="Digite o código"
                        />
                        <Button label='Aplicar' class="btn-secundary-mvp  mx-2" onclick={(event) => this.Submit(event)}></Button>
                    </Container>
                </Form>
                <p className="response-coupon"> {this.state.validation}</p>
            </Container>
        </>
    )}
}



