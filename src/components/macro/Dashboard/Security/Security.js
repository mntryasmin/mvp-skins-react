import React from 'react'
import '../../../../assets/css/Style.css'
import './Security.css'

function Security(props) {

    return (
        <>
        <div className="security">
            <h1>Segurança</h1>
            <p></p>

            <form className="row SecurityForm">
                <label className="col-4 py-2">Digite sua senha antiga</label>
                <input className="col-4 py-2 px-3" type="password" name="password" />

                <label className="col-4 py-2">Digite a senha nova</label>
                <input className="col-4 py-2 px-3" type="password" name="password" />

                <label className="col-4 py-2">Repita a senha nova</label>
                <input className="col-4 py-2 px-3" type="password" name="password" />

                <div className="col-4 py-4 px-0 button-save">
                    <button className="m-0">Salvar</button>
                </div>
            </form>

            <div className="row p-3 pt-4 mt-5 button-delete">
                <button className="col-3">Excluir minha conta</button>
            </div>
            </div>
        </>
    )
}

export default Security