import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'
import InputMask from 'react-input-mask';

function Comp(props) {
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
                mask="99999999999" 
                maskChar=""
                type="text"
                value={phoneNumber}
                onChange={(event) =>{setPhoneNumber(event.target.value)}}
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