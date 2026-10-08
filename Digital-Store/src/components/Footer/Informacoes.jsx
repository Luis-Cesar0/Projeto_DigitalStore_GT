import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Informacoes.css';

const Informacoes = ({ title, informations }) => {
    return (
        <div className="informacoes">
            <h3 className="subtitle">{title}</h3>
            <ul>
                {informations.map((info) => (
                    <li key={info.link}>
                        <Link to={info.link}>{info.text}</Link>
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
