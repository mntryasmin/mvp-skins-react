import React, { Component, TextInput, Button } from 'react'
import '../../../../assets/css/Style.css'
import './MyAccount.css'
import AccountList from './AccountList'

export default class MyAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: AccountList.name,
            email: AccountList.email,
            birthdate: AccountList.birthdate,
            tradeLink: AccountList.tradeLink,
            tel: AccountList.tel,
            gender: AccountList.gender
        }
    }

    render() {
        return (
            <>
                <h1>Minha conta</h1>
                <form className="myAccountForm px-3">
                    <label className="col-8 my-2">
                        Nome
                        <input className="w-100 px-3" type="text" name="name" value={this.state.name}
                            // onChange={(event) =>
                                // this.setState({name:event.target.value})}
                        />
                    </label>

                    <label className="col-3 my-2">
                        Data de nascimento
                        <input className="w-100 px-3" type="date" name="birthday" value={this.state.birthdate} />
                    </label>

                    <label className="col-8 my-2">
                        E-mail
                        <input className="w-100 px-3" type="email" name="email" value={this.state.email} />
                    </label>

                    <label className="col-3 my-2">
                        Telefone
                        <input className="w-100 px-3" type="tel" name="tel" value={this.state.tel} />
                    </label>

                    <label className="col-12 my-2">
                        Trade link
                        <input className="w-100 px-3" type="url" name="tradeLink" value={this.state.tradeLink} />
                    </label>

                    <div className="gender">
                        <label className="col-12 my-2">
                            Identidade de gênero
                        </label>

                        <div className="col-3 input" >
                            <input type="checkbox" id="feminino" name="feminino" value="Feminino" />
                            <label className="col-4" for="feminino">Feminino</label>
                        </div>

                        <div className="col-3 input" >
                            <input type="checkbox" id="masculino" name="masculino" value="Masculino" />
                            <label className="col-4" for="masculino">Masculino</label>
                        </div>

                        <div className="col-4 input" >
                            <input className="mx-2" type="checkbox" id="prefiroNaoDizer" name="prefiroNaoDizer" value="prefiroNaoDizer" />
                            <label for="prefiroNaoDizer">Prefiro não dizer</label>
                        </div>
                    </div>

                    <div className="col-12 py-4 button">
                        <button className="outline-primary">Salvar</button>
                    </div>
                </form>
            </>
        )
    }
}