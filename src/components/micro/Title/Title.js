import React from 'react'
import './Title.css'

function Title(props) {

    return(
        <>
            <h2 className="title-text">{props.title}</h2>
        </>
    )
}

export default Title