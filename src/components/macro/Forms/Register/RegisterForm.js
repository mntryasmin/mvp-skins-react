import React from 'react'
import './RegisterForm.css'
import InputName from '../../../micro/Forms/Input/FormClient/InputName/InputName';
import InputPhone from '../../../micro/Forms/Input/FormClient/InputPhoneNumber/InputPhoneNumber';
import InputEmail from '../../../micro/Forms/Input/FormClient/InputEmail/InputEmail';
import InputTradeLink from '../../../micro/Forms/Input/FormClient/InputTradeLink/InputTradeLink';
import InputPassword from '../../../micro/Forms/Input/FormClient/InputPassword/InputPassword';
import InputDate from '../../../micro/Forms/Input/FormClient/InputDate/InputDate';
import SelectDate from '../../../micro/Forms/Input/FormClient/SelectGender/SelectGender';


function RegisterForm(props) {

    // let regexCpf = /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i;
    const name = () => {
        return <InputName/>
    }

    const email = () => {
        return <InputEmail/>
    }

    const phoneNumber = () => {
        return <InputPhone/>
    }

    const tradeLink = () => {
        return <InputTradeLink/>
    }

    const gener = () => {
        return (
            <>
                <SelectDate/>
            </>
        )
    }

    const date = () => {
        return  <InputDate/>
    }

    const password = () => {
        return <InputPassword/>
    }


    if (props.name) { return name() }

    if (props.email) { return email() }

    if (props.phoneNumber) { return phoneNumber() }

    if (props.trade) { return tradeLink() }

    if (props.gener) { return gener() }

    if (props.date) { return date() }

    if (props.password) { return password() }
}

export default RegisterForm