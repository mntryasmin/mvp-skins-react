import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'

function InputTradeLink(props) {
    
    let regexTexto = /^[a-zA-Z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/i;
    
    const [tradeLink, setTradelink] = useState('');
    const getTradelink = () => {
        return (
            <>
                <FormControl 
                type="text" 
                placeholder="Digite seu trade-link da steam" 
                className='box-insert'
                onChange={(event) =>{setTradelink(event.target.value)}}
                value={tradeLink}/>
                {props.function("trade", tradeLink)}
            </>
        )
    }

    return(
        <>
            {getTradelink()}
        </>
    )
}

export default InputTradeLink;
