import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function SelectGender(props) {

    const [gender, setGender] = useState('')

    const getGender = () => {

        if (props.disabled) {
            return (
                <>
                    <Form.Select disabled
                        aria-label="Default select example"
                        className="box-insert-register d-flex"
                        onChange={(event) => { setGender(event.target.value) ;}}
                        value={gender}>
                        <option >Selecione o gênero</option>
                        <option value="1">Masculino</option>
                        <option value="2">Feminino</option>
                        <option value="3">Prefiro não informar</option>
                    </Form.Select>
                    {props.function("gender", gender)}
                </>
            )
        } else {
            return (
                <>
                    <Form.Select
                        aria-label="Default select example"
                        className="box-insert-register"
                        onChange={(event) => { setGender(event.target.value) }}
                        value={gender}>
                        <option >Selecione o gênero</option>
                        <option value="1">Masculino</option>
                        <option value="2">Feminino</option>
                        <option value="3">Prefiro não informar</option>
                    </Form.Select>
                    {props.function("gender", gender)}
                </>
            )
        }
    }
    return (
        <>
            {getGender()}
        </>
    )
}

export default SelectGender;