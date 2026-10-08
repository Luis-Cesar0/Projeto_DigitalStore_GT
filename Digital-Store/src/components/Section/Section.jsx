import PropTypes from 'prop-types';
import './Section.css';
import { Link } from 'react-router-dom';

export default function Section({ title, titleAlign = 'left', children, link = '#',Width}) {
    return (
        <div className="section-externa" style={{ width: '100%', maxWidth: Width }}>
            <div className="cont-title-link">
                {/* define onde e como o titulo vai ser exibido e o link */}
                {title && titleAlign === 'left' && <h2>{title}</h2>}
                {title && titleAlign === 'center' && <h2 className="center">{title}</h2>}
                {link !== '#' && <Link to={link} className="section-link">Ver Todos <i className="bi bi-arrow-right"></i></Link>}
            </div>
            <div className="section-interna">
                {/* elemento a ser adicionado dentro da sction */}
                {children}
            </div>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    titleAlign: PropTypes.oneOf(['left', 'center']),
    children: PropTypes.node,
    link: PropTypes.string,
    Width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

