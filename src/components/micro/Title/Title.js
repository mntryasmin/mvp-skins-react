import React from 'react'
import './Title.css'

function Title(props) {

    if(props.h1){
        return (
            <>
                <h1 className={'title-text-h1 ' + props.class}>{props.title}</h1>
            </>
        )
    } else {
        return (
            <>
                <h2 className={'title-text ' + props.class}>{props.title}</h2>
            </>
        )
    }
    
}

export default Title