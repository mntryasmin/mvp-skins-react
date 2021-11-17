import React from 'react'
import './RegisterForm.css'
import InputName from '../../../micro/Forms/Input/FormClient/InputName/InputName';
import InputPhone from '../../../micro/Forms/Input/FormClient/InputPhoneNumber/InputPhoneNumber';
import InputEmail from '../../../micro/Forms/Input/FormClient/InputEmail/InputEmail';
import InputTradeLink from '../../../micro/Forms/Input/FormClient/InputTradeLink/InputTradeLink';
import InputPassword from '../../../micro/Forms/Input/FormClient/InputPassword/InputPassword';
import InputPasswordConfirmation from '../../../micro/Forms/Input/FormClient/InputPasswordConfirmation/InputPasswordConfirmation';
import InputDate from '../../../micro/Forms/Input/FormClient/InputDate/InputDate';
import SelectGender from '../../../micro/Forms/Input/FormClient/SelectGender/SelectGender';


function RegisterForm(props) {

    const name = () => {
        return <InputName function={props.function} placeholder='digite'/>
    }

    const email = () => {
        return <InputEmail function={props.function}/>
    }

    const phoneNumber = () => {
        return <InputPhone function={props.function}/>
    }

    const tradeLink = () => {
        return <InputTradeLink function={props.function}/>
    }

    const gender = () => {
        return (
            <>
                <SelectGender function={props.function}/>
            </>
        )
    }

    const date = () => {
        return  <InputDate function={props.function}/>
    }

    const password = () => {
        return <InputPassword function={props.function}/>
    }

    const passwordConfirmation = () => {
        return <InputPasswordConfirmation function={props.function}/>
    }


    if (props.name) { return name() }

    if (props.email) { return email() }

    if (props.phoneNumber) { return phoneNumber() }

    if (props.trade) { return tradeLink() }

    if (props.gender) { return gender() }

    if (props.date) { return date() }

    if (props.password) { return password() }

    if (props.passwordConfirmation) { return passwordConfirmation() }
}

export default RegisterForm