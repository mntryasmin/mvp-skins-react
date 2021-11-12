import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'

function InputName(props) {
    
    let regexTexto = /^[a-zA-Z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/i;
    
    const [nameDescription, setNameDescription] = useState('');
    const getName = () => {
        return (
            <>
                <FormControl 
                type="text" 
                placeholder="Digite seu nome" 
                className='box-insert py-3'
                onChange={(event) =>{setNameDescription(event.target.value)}}
                value={nameDescription}/>
            </>
        )
    }

    return(
        <>
            {getName()}
        </>
    )
}

export default InputName;