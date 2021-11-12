import React from 'react';
import './Images.css'

function Images(props) {

    let nomeImagem = props.url;

    return(
        <>
            <img src={require('../../../assets/images/PRODUTOS/'+`${nomeImagem}`+'.png').default} alt={nomeImagem}
            class={props.class}/>
        </>
    )
}

export default Images