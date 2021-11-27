import React from 'react';
import './ImagesProduct.css'

function Images(props) {

    let nomeImagem = props.url;

    return(
        <>
            <img src={require('../../../assets/images/PRODUTOS/'+`${nomeImagem}`+'.png').default} alt={nomeImagem}
            className={props.class}/>
        </>
    )
}

export default Images