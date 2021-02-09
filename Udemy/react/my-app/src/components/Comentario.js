import React from 'react';
import './Comentario.css';
//componente : funcao ou classe

//jsx permite usar html dentro do javaScript
//usando fragmentos para retornar um elemento só por componente.
const Comentario = props => (
    <div className="Comentario">
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.date.toString()}</p>





    </div>
);

export default Comentario;