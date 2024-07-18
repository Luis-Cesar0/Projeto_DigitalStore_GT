import React from 'react';
import './Botao.css';

export default function Botao(props) {
    return (
        <button 
            className="botao" 
            style={{
                backgroundColor: props.corFundo,
                width: props.largura,
                color: props.cor,
                height: props.altura
            }}
        >
            {props.texto}
        </button>
    );
}
