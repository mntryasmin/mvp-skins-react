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
            counpons: [],
            coupon: '',
            validation: '',
            price: this.props.price
        };
        this.discountValue = 0;
        this.discountPercent = 0;
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/productpromotion`)
            .then(async (response) => {
                const p = await response.data
                this.setState({ counpons: p })
            }).catch((error) => {
                console.log("Não carregou as pomoções" + error)
            })
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
                if (p.porcentagemDesconto != 0) {
                    this.discountValue = 0
                    this.discountPercent = p.porcentagemDesconto
                    console.log(this.discountPercent)
                    console.log(this.discountValue)
                    window.location.reload(true)
                } else {
                    this.discountValue = p.valorDesconto
                    this.discountPercent = 0
                    console.log(this.discountValue)
                    console.log(this.discountPercent)
                    window.location.reload(true)
                }
            })
            .catch((erro) => {
                console.log("Ocorreu um erro " + erro)
            })
    }

    // VALIDA O CÓDIGO INSERIDO PELO USUÁRIO E SE ESTÁ DENTRO DA DATA
    handleValidedCodCoupon = () => {
        
        axios.get(`http://localhost:8080/promotion/coupon-validate/` + this.state.coupon)
            .then(async (response) => {
                const v = await response.data
                console.log(v)
                if (v) {
                    this.setState({ validation: 'Cupom válido' });
                    this.handleGetDiscount()
                } else {
                    this.setState({ validation: 'Cupom inválido' });
                }
            });
    }

    Submit = event => {
        event.preventDefault();
        this.handleValidedCodCoupon();
    }

    render() {
        if (this.props.boxDiscount) {

            return (
                <>
                    <p className="m-0"> Cupom </p>
                    <p className="m-0 mt-1">R$  {this.discountValue}</p>
                </>
            )
        } else {
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
                                <Button label='Aplicar'class="btn-secundary-mvp  mx-2" onclick={(event) => this.Submit(event)}></Button>
                            </Container>
                        </Form>
                        <p className="response-coupon"> {this.state.validation}</p>
                    </Container>
                </>
            )
        }

    }
}