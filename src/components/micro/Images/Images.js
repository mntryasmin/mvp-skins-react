import React from 'react';

function Images(props) {

    let nomeImagem = props.url;

    return(
        <>
            <img src={require('../../../assets/images/PRODUTOS/'+`${nomeImagem}`+'.png').default} alt="luva de especialista"/>
        </>
    )
}

export default Images