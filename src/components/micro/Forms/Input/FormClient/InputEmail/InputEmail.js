import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap';
import InputMask from 'react-input-mask';

function InputName(props) {
    
    const [email, setEmail] = useState('');

    const formatChars = {
        '9': '[0-9]',
        "a": "[a-zA-Z]",
        '*': '[A-Za-z0-9@._]'
        }

    const getEmail = () => {
        return (
            <>
                {/* <FormControl 
                type="email" 
                 
                className='box-insert py-3'
                onChange={(event) =>{setEmail(event.target.value)}}
                value={email}/>
                {props.function("email", email)} */}
                <InputMask 
                className='box-insert py-3'
                formatChars={formatChars}
                mask="****************************************************************************************************" 
                maskChar=""
                type="text"
                value={email}
                onChange={(event) =>{setEmail(event.target.value)}}
                placeholder="Digite seu e-mail"/>
                {props.function("email", email)}
            </>
        )
    }

    return(
        <>
            {getEmail()}
        </>
    )
}

export default InputName;