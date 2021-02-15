import React from 'react';
import{formatRelative, subDays} from  'date-fns';
import {ptBR } from 'date-fns/locale'

import './Comentario.css';
import imagemUsuario from './user.png';
//componente : funcao ou classe

//jsx permite usar html dentro do javaScript
//usando fragmentos para retornar um elemento só por componente.
const Comentario = props => {
    const estilo = {
        color: 'red',
        padding: '10px',
        fontSize: '30px'
    }

    return <div className="Comentario">
        {/* <h2  style={estilo}>{props.name}</h2> */}
        <img className="avatar" src={imagemUsuario} alt={props.name} />
        <div className="conteudo">
            <h2 className="name" style={estilo}>{props.name}</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="data">{formatRelative(subDays(props.date,3), new Date(),{locale: ptBR})}</p>
            <div className="botao1">
                 <button onClick={props.onRemove}>&times;
            </button></div>
           

        </div>
    </div>
};

export default Comentario;