import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

function Button(props) {

    const typeButton = () => {
        if (props.navigation) {
            return (
                <Link to={props.route} className={"btn-mvp" + props.class}>
                    {props.label}
                </Link>

            ) 
            
           
                
         } else {
            return (
                <button onClick={() => props.onclick} className={"btn-mvp" + props.class}>
                    {props.label}
                </button>
                
                
                
                
            )

        }
        
        
    }

    return(
        <>
            {typeButton()}
        </>
    )
}

export default Button