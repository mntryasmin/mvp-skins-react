import React from 'react'
import '../../../../assets/css/Style.css'
import './OrderHistory.css'
import Requests from '../../../micro/Dashboard/Requests/Requests'

import img from '../../../../assets/images/PRODUTOS/adaga-marcara-urbana.png'

function OrderHistory(props) {
    return (
        <>
            <h1 className="mb-4">Histórico de compras</h1>
            <div className="row mx-0">
                <Requests/>
            </div>
        </>
    )
}

export default OrderHistory