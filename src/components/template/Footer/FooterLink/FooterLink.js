import React from 'react';
import './FooterLink.css';
import { Link } from 'react-router-dom'

function Comp(props) {

    return(
        <>
            <div className="footer-text">
                <Link to={props.route}  className="footer-link">
                    {props.label}
                </Link>
            </div>
        </>
    )
}

export default Comp