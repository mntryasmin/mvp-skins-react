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
    const cliente = JSON.parse(localStorage.getItem("client"));

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [save, setSave] = useState(false);

    const [disabled, setDisabled] = useState(false);
    const [adressResult, setAdressResult] = useState('');
    const addressFound = 'No seu último pedido você utilizou o endereço abaixo. Você pode utilizá-lo novamente ou alterar e, em seguida, salvar.';
    const adressNotFound = 'Parece que esse é o seu primeiro pedido conosco. Por favor, informe um endereço para cobrança abaixo.';

    async function GetRequestsClient() {
        let response = await axios.get(
            `http://localhost:8080/pedidos/order-history/${cliente.codigoCliente}`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        });

        if (response.data.length > 0) {
            let lastRequest = response.data[response.data.length - 1].id;

            let responseAdress = await axios.get(
                `http://localhost:8080/billing-address/request/${lastRequest}`, {
                headers: {
                    Authorization: localStorage.getItem('Authorization')
                }
            })

            if (responseAdress) {

                setCep(responseAdress.data.cep);
                setLogradouro(responseAdress.data.logradouro);
                setNumero(responseAdress.data.numero);
                setComplemento(responseAdress.data.complemento);
                setBairro(responseAdress.data.bairro);
                setCidade(responseAdress.data.cidade);
                setEstado(responseAdress.data.estado);

                setDisabled(true);
                setAdressResult(addressFound);
            } 
        } else {
            setAdressResult(adressNotFound);
        }
    }

    useEffect(() => {
        GetRequestsClient();
    }, []);

    const maskCEP = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{3})\d+?$/, "$1");
    };

    const maskTextNumber = (value) => {
        return value.replace(/[!@#¨$%^&*)}",|?;{(+=._-]+/g, "");
    }

    const maskNumber = (value) => {
        return value.replace(/[!@#¨$%^&*)}'",|?;{(+=._-]+/g, "");
    }

    const maskUF = (value) => {
        return value
            .replace(/[!@#¨$%^&*)}'",|?;{(+=._-]+/g, "")
            .replace(/(\d{2})(\d{0})(\d)/, "$1")
    }

    const changeDisabled = () => {
        setDisabled(false);
    }

    function validAdress() {
        let endereco = {
            cep: cep,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
        };

        setDisabled(true);
        setSave(true);
        props.func(endereco);
        props.save(save);
    }

    return (
        <>
            <Form className="col-12 form-endereco-cobranca">
                <p>{adressResult}</p>
                <Col className="col-12">
                    <Form.Label className="mt-3"> CEP </Form.Label>
                    <Form.Control disabled={disabled} className="input-disabled" type="text" name="cep" placeholder="Digite o CEP" value={cep}
                        onChange={(event) => {
                            setCep(maskCEP(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Logradouro </Form.Label>
                    <Form.Control disabled={disabled} className="input-disabled" type="text" name="logradouro" placeholder="Digite o nome da rua" value={logradouro}
                        onChange={(event) => {
                            setLogradouro(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-3">
                    <Form.Label className="mt-3"> Nº </Form.Label>
                    <Form.Control disabled={disabled} className="input-disabled" type="text" name="numero" placeholder="Digite o nº da residência" value={numero}
                        onChange={(event) => {
                            setNumero(maskNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-8">
                    <Form.Label className="mt-3"> Complemento </Form.Label>
                    <Form.Control disabled={disabled} className="input-disabled" type="text" name="complemento" placeholder="Digite o complemento" value={complemento}
                        onChange={(event) => {
                            setComplemento(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Bairro</Form.Label>
                    <Form.Control disabled={disabled} className="input-disabled" type="text" name="bairro" placeholder="Digite o bairro" value={bairro}
                        onChange={(event) => {
                            setBairro(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Cidade </Form.Label>
                    <Form.Control disabled={disabled} className="input-disabled" type="text" name="cidade" placeholder="Digite a cidade" value={cidade}
                        onChange={(event) => {
                            setCidade(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Estado </Form.Label>
                    <Form.Select disabled={disabled} className="input-disabled" aria-label="Default select example" value={estado} onChange={(event) => {
                        setEstado(maskUF(event.target.value))
                    }}>
                        <option>Selecione um estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </Form.Select>
                </Col>
            </Form>

            <Col className="adress-payment-buttons">
                <Button label="Alterar" onclick={() => changeDisabled()} class="mt-3 btn-mvp btn-mvp-purple-solid col-4" />
                <Button label="Salvar" onclick={() => validAdress()} class="mt-3 btn-mvp btn-mvp-orange-solid col-4" />
            </Col>
        </>
    )
}