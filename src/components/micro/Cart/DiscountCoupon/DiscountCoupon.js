// REACT
import React, { Component } from 'react'
import axios from 'axios'
import { Container, Form, FormControl, Button } from 'react-bootstrap'

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
            validation: '',
            discount: (null),
        };
    }

    // LIDANDO COM OS EVENTOS DOS STATES INICIADOS
    handleChange = event => {
        this.setState({ coupon: event.target.value });
    }

    // BUSCANDO A ATUALIZANDO O VALOR DO CUPOM
    handleGetDiscount() {
        axios.get(`http://localhost:8080/promotion/coupon-discount/${this.state.coupon}`)
            .then((response) => {
                this.setState({ discount: response.data });
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    }

    // VALIDA O CÓDIGO INSERIDO PELO USUÁRIO E SE ESTÁ DENTRO DA DATA
    handleValidedCodCoupon = event => {
        event.preventDefault();

        axios.get(`http://localhost:8080/promotion/coupon-validate/${this.state.coupon}`)
            .then(response => {

                if (response.data == true) {
                    this.setState({ validation: 'Cupom válido' });
                    this.handleGetDiscount();
                } else {
                    this.setState({ validation: 'Cupom inválido' });
                    this.setState({ discount: null });
                }
            });
    }

    render() {
        return (
            <>
                <Container className="discount-container px-0">
                    <Form className="py-2 discount-coupon" onSubmit={this.handleValidedCodCoupon}>
                        <p className="mx-3"> Cupom de desconto </p>

                        <Container className="discount px-0">
                            <FormControl
                                type="text"
                                name="coupon"
                                className="discount-input mx-3 py-3"
                                onChange={this.handleChange}
                                placeholder="Digite o código"
                            />
                            <Button className="mx-2 btn btn-mvp btn-secundary-mvp" type="submit">Aplicar</Button>
                        </Container>
                    </Form>
                    <p className="response-coupon"> {this.state.validation}</p>
                    <p className="response-coupon"> {this.state.discount}</p>
                </Container>
            </>
        )
    }
}