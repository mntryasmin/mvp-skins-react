import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'
import InputMask from 'react-input-mask';

function InputPassword(props) {
    
    
    const [password, setPassword] = useState('');

    const formatChars = {
        '9': '[0-9]',
        "a": "[a-zA-Z]",
        '*': '[A-Za-z0-9@._]'
        }

    const getPassword = () => {
        return (
            <>
            {/* <FormControl 
            type="password" 
             
            className='box-insert '
            onChange={(event) =>{setPassword(event.target.value)}}
            value={password}/>
            {props.function("password", password)} */}
            <InputMask 
            className='box-insert-register py-3'
            formatChars={formatChars}
            mask="****************************************************************************************************" 
            maskChar=""
            type="password"
            value={password}
            onChange={(event) =>{setPassword(event.target.value)}}
            placeholder="Digite a senha"/>
            {props.function("password", password)}
            </>
        )
    }

    return(
        <>
            {getPassword()}
        </>
    )
}

export default InputPassword;
