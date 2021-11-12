import React from 'react';
import "./FooterText.css"

function Comp(props) {

    return(
        <>
            <div className={"footer-text "+props.class}>{props.text}</div>
        </>
    )
}

export default Comp