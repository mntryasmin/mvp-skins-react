import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

    function ButtonMVP(props) {

    const typeButton = () => {
        if (props.navigation) {
            return (
                <Link to={props.route} className={"p-1 px-3 my-2 btn-mvp " + props.class}>
                    {props.label}
                </Link>
                )
        } else {
            return (
                <button onClick={props.onclick} className={"p-1 px-3 btn-mvp " + props.class}>
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