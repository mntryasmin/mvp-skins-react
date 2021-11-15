import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap';
import InputMask from 'react-input-mask';

function InputName(props) {
    
    
    
    const [nameDescription, setNameDescription] = useState('');
    const formatChars = {
        '9': '[0-9]',
        "a": "[a-zA-Z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ']{1,200}",
        '*': '[A-Za-z0-9]'
        }
    const getName = () => {
        return (
            <>
                {/* <FormControl 
                type="text" 
                placeholder="Digite seu nome" 
                className='box-insert py-3'
                onChange={(event) =>{setNameDescription(event.target.value)}}
                value={nameDescription}/> */}
                <InputMask 
                className='box-insert py-3'
                formatChars={formatChars}
                mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" 
                maskChar=""
                type="text"
                value={nameDescription} 
                onChange={(event)=>{setNameDescription(event.target.value)}}
                maskPlaceholder="Digite seu nome"/>
                {props.function("name", nameDescription)}
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