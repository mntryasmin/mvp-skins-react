import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'
import InputMask from 'react-input-mask';

function Comp(props) {

    const maskPhone = value => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
    };

    const [phoneNumber, setPhoneNumber] = useState('');
    const getPhoneNumber = () => {
        return (
            <>
                {/* <FormControl 
                type="text" 
                className='box-insert'
                onChange={(event) =>{setPhoneNumber(event.target.value)}}
                value={phoneNumber}/>
                {props.function("phoneNumber", phoneNumber)} */}
                <InputMask 
                className='box-insert-register py-3' 
                maskChar=""
                type="text"
                value={phoneNumber}
                onChange={(event) =>{setPhoneNumber(maskPhone(event.target.value))}}
                placeholder="Digite seu telefone" 
                />
                {props.function("phoneNumber", phoneNumber)}
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