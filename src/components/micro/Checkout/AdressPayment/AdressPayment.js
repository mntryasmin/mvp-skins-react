// REACT
import React, { useState, useEffect, Modal } from 'react'
import axios from 'axios'
import { Container, Col, Row, Form } from 'react-bootstrap'

// ESTILO
import '../../../../assets/css/Style.css'
import './AdressPayment.css'

// PÁGINAS/COMPONENTES
import Button from '../../Button/Button'

export default function AdressPayment(props) {
    const[ID, setID] = useState('');
    const[pedido, setPedido] = useState({});
    const[CEP, setCEP] = useState('');
    const[logradouro, setLogradouro] = useState('');
    const[numero, setNumero] = useState('');
    const[complemento, setComplemento] = useState('');
    const[bairro, setBairro] = useState('');
    const[cidade, setCidade] = useState('');
    const[estado, setEstado] = useState('');

    const[adressResult, setAdressResult] = useState('');
    const addressFound = 'No seu último pedido você utilizou o endereço abaixo. Você pode salvar esse novamente ou alterar e, em seguida, salvar.'
    const adressNotFound = 'Parece que esse é o seu primeiro pedido conosco. Por favor, informe um endereço para cobrança abaixo.'


    const maskCEP = (value) => {
        return value
            .replace(/^[\d]{2}.[\d]{3}-[\d]{3}/)
    };

    return (
        <>
            <Form className="col-12 form-endereco-cobranca">
                <p>{adressResult}</p>
                <Col className="col-12">
                    <Form.Label className="mt-3"> CEP </Form.Label>
                    {/* <Form.Control type="text" name="cvv" placeholder="Digite o CEP" value={cep} onBlur={() => validateCvv()} */}
                    <Form.Control type="text" name="cep" placeholder="Digite o CEP" value={CEP}
                        onChange={(event) => {
                            setCEP(maskCEP(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Logradouro </Form.Label>
                    {/* <Form.Control type="text" name="cvv" placeholder="Digite o CEP" value={cep} onBlur={() => validateCvv()} */}
                    <Form.Control type="text" name="logradouro" placeholder="Digite o nome da rua"
                        onChange={(event) => {
                            // setCep(maskCVV(event.target.value));
                            setLogradouro(event.target.value);
                        }} />
                </Col>

                <Col className="col-3">
                    <Form.Label className="mt-3"> Nº </Form.Label>
                    {/* <Form.Control type="text" name="cvv" placeholder="Digite o CEP" value={cep} onBlur={() => validateCvv()} */}
                    <Form.Control type="text" name="numero" placeholder="Digite o nº da residência"
                        onChange={(event) => {
                            // setCep(maskCVV(event.target.value));
                            setNumero(event.target.value);
                        }} />
                </Col>

                <Col className="col-8">
                    <Form.Label className="mt-3"> Complemento </Form.Label>
                    {/* <Form.Control type="text" name="cvv" placeholder="Digite o CEP" value={cep} onBlur={() => validateCvv()} */}
                    <Form.Control type="text" name="complemento" placeholder="Digite o complemento"
                        onChange={(event) => {
                            // setCep(maskCVV(event.target.value));
                            setComplemento(event.target.value);
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Bairro</Form.Label>
                    {/* <Form.Control type="text" name="cvv" placeholder="Digite o CEP" value={cep} onBlur={() => validateCvv()} */}
                    <Form.Control type="text" name="bairro" placeholder="Digite o bairro"
                        onChange={(event) => {
                            // setCep(maskCVV(event.target.value));
                            setBairro(event.target.value);
                        }} />
                </Col>
                
                <Col className="col-8">
                    <Form.Label className="mt-3"> Cidade </Form.Label>
                    {/* <Form.Control type="text" name="cvv" placeholder="Digite o CEP" value={cep} onBlur={() => validateCvv()} */}
                    <Form.Control type="text" name="cidade" placeholder="Digite a cidade"
                        onChange={(event) => {
                            // setCep(maskCVV(event.target.value));
                            setCidade(event.target.value);
                        }} />
                </Col>

                <Col className="col-3">
                    <Form.Label className="mt-3"> UF </Form.Label>
                    {/* <Form.Control type="text" name="cvv" placeholder="Digite o CEP" value={cep} onBlur={() => validateCvv()} */}
                    <Form.Control type="text" name="uf" placeholder="Digite a UF"
                        onChange={(event) => {
                            // setCep(maskCVV(event.target.value));
                            setEstado(event.target.value);
                        }} />
                </Col>
            </Form>

            <Col className="adress-payment-buttons">
            {/* <Button label="Manter" route="/success" class="mt-3 btn-mvp btn-mvp-purple-solid" onclick={() => postOrder()}></Button> */}
            <Button label="Manter" route="/success" class="mt-3 btn-mvp btn-mvp-purple-solid col-4"/>
            <Button label="Alterar" route="/success" class="mt-3 btn-mvp btn-mvp-purple-solid col-4"/>
            </Col>
        </>
    )
}