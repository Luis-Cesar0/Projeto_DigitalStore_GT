import React from 'react';
import './Section.css';

export default function Section({ title, titleAlign = 'left', children, link = '#',Width}) {
    return (
        <div className="section-externa" style={{width:Width}}>
            <div className="cont-title-link">
                {/* define onde e como o titulo vai ser exibido e o link */}
                {title && titleAlign === 'left' && <h2 id='section-title'>{title}</h2>}
                {title && titleAlign === 'center' && <h2 className="center" id='section-title'>{title}</h2>}
                {link !== '#' && <a href={link} className="section-link">Ver Todos <i className="bi bi-arrow-right"></i></a>}
            </div>
            <div className="section-interna">
                {/* elemento a ser adicionado dentro da sction */}
                {children}
            </div>
        </div>
    );
}

