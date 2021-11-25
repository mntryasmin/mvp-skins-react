import React, { useState } from 'react'
import Lupa from '../../../../assets/images/icones/icon-lupa.png'
import {Form} from 'react-bootstrap'

function Comp(props) {
    
    const [searchText, setSearchText] = useState('')
    return(
        <>
            <Form >
                <Form.Group >
                    <div className='d-flex flex-row input-box'>
                        <Form.Control 
                        type="text" 
                        placeholder="O que você procura?" 
                        className="search-bar" 
                        onChange={(event)=>{setSearchText(event.target.value)}}/>
                        <a onClick={()=>{
                            if(searchText==''){

                            } else {
                                window.location.href='http://localhost:3000/category/search='+searchText
                            }
                            }} >
                            <img src={Lupa} className="lupa" />
                        </a>
                    </div>
                </Form.Group>
            </Form>
        </>
    )
}

export default Comp