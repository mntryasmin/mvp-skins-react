import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'

function InputName(props) {
    
    let regexTexto = /^[a-zA-Z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/i;
    
    const [email, setEmail] = useState('');
    const getEmail = () => {
        return (
            <>
                <FormControl 
                type="email" 
                placeholder="Digite seu e-mail" 
                className='box-insert py-3'
                onChange={(event) =>{setEmail(event.target.value)}}
                value={email}/>
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