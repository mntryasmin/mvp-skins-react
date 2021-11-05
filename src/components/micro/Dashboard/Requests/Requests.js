import React, {useState} from 'react'
import '../../../../assets/css/Style.css'
import './Requests.css'
import RequestsList from './RequestsList.js'
import RequestsItems from './../RequestsItems/RequestsItems'
import arrow from '../../../../assets/images/icones/icon-seta-baixo.png'

function Requests(props) {

    function GetRequests() {
        return RequestsList.map(requests => {
            return (
                <>
                    <ul className="request-style">
                        <li className="col-2">{requests.id}</li>
                        <li className="col-2">{requests.dataRegistro}</li>
                        <li className="col-2">R$ {requests.valorLiquido}</li>
                        <li className="col-3">{requests.status}</li>
                        <a href="" onClick={RequestsItems}><li className="col-2"><img className="arrow" src={arrow}/></li></a>
                    </ul>
                    
                </>
            )
        })
    }

    return (
        <>
            <ul className="request-title">
                <li className="col-2">Pedido</li>
                <li className="col-2">Data</li>
                <li className="col-2">Valor</li>
                <li className="col-3">Status</li>
                <li className="col-2">Seta</li>
            </ul>

            {GetRequests()}
        </>
    )
}

export default Requests