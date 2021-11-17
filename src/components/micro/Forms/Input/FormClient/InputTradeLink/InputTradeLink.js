import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap';
import InputMask from 'react-input-mask';

function InputTradeLink(props) {
    
    const formatChars = {
        '9': '[0-9]',
        "a": "[a-zA-Z]",
        '*': '[A-Za-z0-9@._/?=-]'
        }
    
    const [tradeLink, setTradelink] = useState('');
    const getTradelink = () => {
        return (
            <>
                {/* <FormControl 
                type="text" 
                 
                className='box-insert'
                onChange={(event) =>{setTradelink(event.target.value)}}
                value={tradeLink}/> */}
                <InputMask 
                className='box-insert py-3'
                formatChars={formatChars}
                mask="****************************************************************************************************" 
                maskChar=""
                type="text"
                value={tradeLink}
                onChange={(event) =>{setTradelink(event.target.value)}}
                placeholder="Digite seu trade-link da steam"/>
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
