import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap'

function InputDate(props) {
    
    const [date, setDate] = useState('');
    const getDate = () => {
        return (
            <>
                <FormControl 
                type="date" 
                className='box-insert'
                onChange={(event) =>{setDate(event.target.value)}}
                value={date}/>
            </>
        )
    }

    return(
        <>
            {getDate()}
        </>
    )
}

export default InputDate;
