import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'

function Comp(props) {

    let regexTelCel = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/i;

    const [phoneNumber, setPhoneNumber] = useState('');
    const getPhoneNumber = () => {
        return (
            <>
                <FormControl 
                type="text" 
                placeholder="Digite seu telefone" 
                className='box-insert'
                onChange={(event) =>{setPhoneNumber(event.target.value)}}
                value={phoneNumber}/>
            </>
        )
    }

    return(
        <>
            {getPhoneNumber()}
        </>
    )
}

export default Comp