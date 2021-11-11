import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'

function InputPassword(props) {
    
    
    const [password, setPassword] = useState('');
    const getPassword = () => {
        return (
            <>
            <FormControl 
            type="password" 
            placeholder="Digite a senha" 
            className='box-insert '
            onChange={(event) =>{setPassword(event.target.value)}}
            value={password}/>
                
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
