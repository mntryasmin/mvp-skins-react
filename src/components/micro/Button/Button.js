import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


    // const typeButton = () => {
    //     if (props.navigation) {
    //         return (
    //             <Link to={props.route} className={"btn-mvp" + props.class}>
    //                 {props.label}
    //             </Link>

    //         ) 
            
           
                
    //      } else {
    //         return (
    //             <button onClick={() => props.onclick} className={"btn-mvp" + props.class}>
    //                 {props.label}
    //             </button>
                
                
                
                
    function ButtonMVP(props) {

    const typeButton = () => {
        if (props.route) {
            if (props.class == "btn-primario-mvp") {
                return (
                    <Link to={props.route}>
                        <Button className="btn btn-mvp btn-primario-mvp">
                            {props.label}
                        </Button>
                    </Link>
                )
            } else {
                return (
                    <Link to={props.route}>
                        <Button className="btn btn-mvp btn-secundario-mvp">
                            {props.label}
                        </Button>
                    </Link>
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