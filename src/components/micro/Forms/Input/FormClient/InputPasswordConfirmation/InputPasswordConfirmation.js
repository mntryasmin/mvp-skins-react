import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'
import InputMask from 'react-input-mask';

function InputPasswordConfirmation(props) {
    
    
    const [password, setPassword] = useState('');

    const formatChars = {
        '9': '[0-9]',
        "a": "[a-zA-Z]",
        '*': '[A-Za-z0-9@._]'
        }

    const getPasswordConfirmation = () => {
        return (
            <>
            {/* <FormControl 
            type="password" 
            placeholder="Digite a senha" 
            className='box-insert '
            onChange={(event) =>{setPassword(event.target.value)}}
            value={password}/>
            {props.function("password", password)} */}
            <InputMask 
            className='box-insert py-3'
            formatChars={formatChars}
            mask="****************************************************************************************************" 
            maskChar=""
            type="password"
            value={password}
            onChange={(event) =>{setPassword(event.target.value)}}
            maskPlaceholder="Repita sua senha"/>
            {props.function(password)}
            </>
        )
    }

    return(
        <>
            {getPasswordConfirmation()}
        </>
    )
}

export default InputPasswordConfirmation;
