// REACT
import React from 'react'

// ESTILO
import '../../../../assets/css/Style.css'
import './RequestsItems.css'

// PÁGINAS/COMPONENTES
import RequestsItemsList from './RequestsItemsList'

function RequestsItems(props) {

    function getRequestsItems() {
        return RequestsItemsList.map(itens => {
            return (
                <ul className="requestItems-style">
                    <li className="col-3">{itens.imagem}</li>
                    <li className="col-4"><span>{itens.descricao}</span></li>
                    <li className="col-2">R$ {itens.preco}</li>
                </ul>
            )
        })
    }

    return (
        <>
            <ul className="requestItems-title">
                <li className="col-3">Produto</li>
                <li className="col-4">Descrição</li>
                <li className="col-2">Preço</li>
            </ul>

            {getRequestsItems()}
        </>
    )
}

export default RequestsItems