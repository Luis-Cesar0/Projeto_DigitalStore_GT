import React from 'react';
import PropTypes from 'prop-types';
import './Informacoes.css';

const Informacoes = ({ title, informations }) => {
    return (
        <div className="informacoes">
            <h3 className="subtitle">{title}</h3>
            <ul>
                {informations.map((info, index) => (
                    <li key={index}>
                        <a href={info.link}>{info.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Informacoes.propTypes = {
    title: PropTypes.string.isRequired,
    informations: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Informacoes;
