// REACT
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

// ESTILO
import './../../assets/css/Style.css'
import './Success.css'

// PÁGINAS/COMPONENTES
import iconSucess from '../../assets/images/icones/icon-sucess.png';
import Title from '../../components/micro/Title/Title';
import Button from '../../components/micro/Button/Button';
import Error from '../NotFound/Error'

function Sucess(props) {
    const[order, setOrder] = useState(JSON.parse(localStorage.getItem('order')))
    const config = { headers: {
            Authorization: localStorage.getItem('Authorization')
            }
        }

    console.log(config)

    useEffect(()=>{
        
        if(order!=null && order.id!=null){
            sendOrderEmail()
        } else {
            alert("Não há um pedido para ser finalizado!")
            window.location.href='http://localhost:3000'
        }
        
    })
    
    function sendOrderEmail(){
        axios.post(`http://localhost:8080/pedidos/email/${order.id}`, {}, config)
        .then((response)=>{
            deleteOrder()
        })
        .catch((error)=>{
            console.log("Ocorreu um erro: "+error)
        })
        
    }

    function deleteOrder(){
        localStorage.removeItem('order')
    }

    while(order==undefined){
        return null;
    }

    const load = () => {
        const token = localStorage.getItem("Authorization")
        if (token) {
            return (
                <>
                <Container fluid className="row m-0 py-5 px-0 success-container content-container">
    
                    <Row className="col-9 my-0 p-5 success justify-content-center">
                        <Row className="row py-1 sucessImg"><img src={iconSucess} /></Row>
                        <Title title="Pedido realizado com sucesso" class="py-3 " />
                        <h1 className='order-num py-3'>Numero do pedido: #{order.id}</h1>
                        <p className="py-3 px-3 sucess-text">O pedido foi efetuado com sucesso. Após a confirmação do pagamento sua skin estará disponível em até 1 dia útil por meio de um Trade Link da Steam que você receberá em seu e-mail. </p>
    
                        <Row className="py-3 sucess-button">
                            <Col md={6} lg={5} className="success-button-dashboard">
                                <Button route="/myaccount" label="Acompanhar pedido" class="btn-mvp btn-mvp-purple-solid p-2 w-100" navigation />
                            </Col>
                            <Col md={6} lg={5} className="success-button-home">
                                <Button route="/" label="Voltar para a home" class="btn-mvp btn-mvp-orange-solid p-2 w-100" navigation />
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </>
            )
        }else {
            return <Error/>
        }
    }

    return  load()
    
}

export default Sucess