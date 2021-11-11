import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function ButtonMVP(props) {

    const typeButton = () => {
        if (props.route) {
            if (props.class == "btn-primario-mvp") {
                return (
                    <Button className="btn btn-mvp btn-primario-mvp">
                        <a href={props.route}>
                            {props.label}
                        </a>
                    </Button>
                )
            } else {
                return (
                    <Button className="btn btn-mvp btn-secundario-mvp">
                        <a href={props.route}>
                            {props.label}
                        </a>
                    </Button>
                )
            }
        } else {
            return (
                <button onClick={props.onclick} className={"btn-mvp " + props.class}>
                    {props.label}
                </button>
            )

        }
    }

    return (
        <>
            {typeButton()}
        </>
    )
}

export default ButtonMVP