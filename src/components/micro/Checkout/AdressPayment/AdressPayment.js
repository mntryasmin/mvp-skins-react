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


    const client = JSON.parse(localStorage.getItem("client"));
    const [listRequests, setListRequests] = useState([]);

    const [validation, setValidation] = useState('')
    const [classTerm, setClassTerm] = useState('')
    const [cep, setcep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const endereco = {
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado
    };

    const [adressResult, setAdressResult] = useState('');
    const addressFound = 'No seu último pedido você utilizou o endereço abaixo. Você pode utilizá-lo novamente ou alterar e, em seguida, salvar.'
    const adressNotFound = 'Parece que esse é o seu primeiro pedido conosco. Por favor, informe um endereço para cobrança abaixo.'
    const [changeAdress, setChangeAdress] = useState('input-disabled');

    useEffect(() => {
        console.log(client);
        axios.get(`http://localhost:8080/pedidos/order-history/${client.codigoCliente}`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
            .then((response) => {
                console.log(response.data);
                setListRequests(response.data);
                if (listRequests.length > 0) {
                    getLastAdressClient();
                } else {
                    setAdressResult(adressNotFound);
                    props.func(endereco);
                }
            })
            .catch((erro) => {
                console.log("Não foi possível buscar os pedidos do cliente: " + erro)
            }
            );
    }, []);

    //Função para recuperar o último endereço de cobrança do cliente
    function getLastAdressClient() {
        console.log(listRequests);

        axios.get(`http://localhost:8080/billing-address/request/${listRequests[listRequests.length - 1]}`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
            .then((response) => {
                console.log(response.data);
                endereco = response.data;
                setAdressResult(addressFound);
            })
            .catch((erro) => {
                console.log("Não foi possível buscar o último endereço do cliente: " + erro)
            }
            );
    };

    //Recupera o endereço através do CEP (usando a API do viacep)
    function consultarcep(cep){
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response)=>{
            // setEndereco(response.data)
            if(response.data.erro){
                setLogradouro('')
                setBairro('')
                setCidade('')
                setEstado('')
                validateCep(false)
            } else {
                setcep(response.data.cep)
                setLogradouro(response.data.logradouro)
                setBairro(response.data.bairro)
                setCidade(response.data.localidade)
                setEstado(response.data.uf)
                validateCep(true)
            }
            
        })
        .catch((error)=>{
            console.log("Ocorreu um erro ao consultar o cep "+ error)
            setLogradouro('')
            setBairro('')
            setCidade('')
            setEstado('')
            validateCep(false)
        })
    }

    //Regex CEP
    const maskcep = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{3})\d+?$/, "$1");
    };

    //Regex para Textos e Números 
    const maskTextNumber = (value) => {
        return value.replace(/[!@#¨$%^&*)}",|?;{(+=._-]+/g, "");
    }

    //Regex número
    const maskNumber = (value) => {
        return value.replace(/[!@#¨$%^&*)}'",|?;{(+=._-]+/g, "");
    }

    //Regex UF
    const maskUF = (value) => {
        return value
            .replace(/[!@#¨$%^&*)}'",|?;{(+=._-]+/g, "")
            .replace(/(\d{2})(\d{0})(\d)/, "$1")
    }


    const changeDisabled = () => {
        document.getElementsByClassName("input-disabled").disabled = false;
    }

    function validAdress () {
        console.log(endereco);
        document.getElementsByClassName('input-disabled').disabled = true;
        props.func(endereco);
    }

    function validateCep(cepBoolean){
        if(cepBoolean == false){
            setValidation('CEP inválido')
            setClassTerm('validation-term p-2')
        } else {
            setValidation('')
            setClassTerm('')
        }
    }

    return (
        <>
            <Form className="col-12 form-endereco-cobranca">
                <p>{adressResult}</p>
                <div className={classTerm}>
                    {validation}
                </div>
                <Col className="col-12">
                    <Form.Label className="mt-3"> CEP </Form.Label>
                    <Form.Control className="input-disabled" 
                    type="text" 
                    name="cep" 
                    placeholder="Digite o CEP" 
                    value={cep}
                    onBlur={()=>{consultarcep(cep)}}
                    onChange={(event) => {
                        setcep(maskcep(event.target.value));
                    }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Logradouro </Form.Label>
                    <Form.Control className={changeAdress} type="text" name="logradouro" placeholder="Logradouro" value={logradouro}
                        onChange={(event) => {
                            setLogradouro(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-3">
                    <Form.Label className="mt-3"> Nº </Form.Label>
                    <Form.Control className={changeAdress} type="text" name="numero" placeholder="Digite o nº da residência" value={numero}
                        onChange={(event) => {
                            setNumero(maskNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-8">
                    <Form.Label className="mt-3"> Complemento </Form.Label>
                    <Form.Control className={changeAdress} type="text" name="complemento" placeholder="Digite o complemento" value={complemento}
                        onChange={(event) => {
                            setComplemento(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Bairro</Form.Label>
                    <Form.Control className={changeAdress} type="text" name="bairro" placeholder="Bairro" value={bairro}
                        onChange={(event) => {
                            setBairro(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Cidade </Form.Label>
                    <Form.Control className={changeAdress} type="text" name="cidade" placeholder="Cidade" value={cidade}
                        onChange={(event) => {
                            setCidade(maskTextNumber(event.target.value));
                        }} />
                </Col>

                <Col className="col-12">
                    <Form.Label className="mt-3"> Estado </Form.Label>
                    <Form.Select className={changeAdress} aria-label="Default select example" value={estado} onChange={(event) => {
                        setEstado(maskUF(event.target.value))
                    }}>
                        <option>Estado</option>
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
            {props.func(endereco)}
            {/* {console.log(endereco)} */}
        </>
    )
}