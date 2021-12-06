import react, { useState, useEffect } from 'react'
import { Row, Form, Spinner } from 'react-bootstrap'
import PixImg from '../../../../assets/images/Payment/Pix.png'
import QRCode from '../../../../assets/images/Payment/QRCode.png'
import Check from '../../../../assets/images/icones/check.png'
import './Pix.css'


export default function Pix(props) {
    const pixKey = props.pixKey
    const [payment, setPayment] = useState(false)


    const checkPayment = () => {
        if (payment) {
            return (
                <div>
                    Pagamento Realizado!
                    <img src={Check} />
                </div>
            )
        } else {
            return (
                <div >
                    Aguardando pagamento...
                    <Spinner animation="border" variant="primary" size="sm" />
                    <br />
                </div>
            )
        }
    }

    const changePaymentStatus = () => {
        setPayment(true)
        props.func(true)
    }

    return (
        <>
            <div className='container-pix mt-3'>
                <Row className='justify-content-center'> 
                    <img src={PixImg} className='pix-img mt-2' />
                </Row>
                <Row className='d-flex justify-content-center'>
                    <img src={QRCode} className=' QR-Code' onClick={() => { changePaymentStatus(); }} />
                </Row>
                <Row>
                    <p className='box-key' onClick={() => changePaymentStatus()}>
                        7177f6a2-9b93-45c8-aa75-3318d906c0a0
                    </p>
                    <br />
                    <p className='box-key'>Aponte a câmera do seu celular no QRCode ou copie a chave pix acima e cole no app do seu banco para efetuar o pagamento e prosseguir para a tela de finalização</p>
                </Row>
                <Row>
                    <p className='box-key'> {checkPayment()} </p>
                </Row>
            </div>
        </>
    )

}