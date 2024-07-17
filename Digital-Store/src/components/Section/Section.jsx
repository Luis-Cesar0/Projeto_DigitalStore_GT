
import "./Section.css"

export default function Section({title , titleAling = 'left',children,link ='#' }){
    return(
        <div className="section-externa">
            <div className="cont-title-link ">
                {title && titleAling === 'left' && <h2  className="section-title">{title}</h2> }
                {title && titleAling === 'center' && <h2 style={{marginLeft: '47%'}} className="section-title">{title}</h2> }
                {link !=  '#' && <a href={link} className="section-link">Ver Todos <i className="bi bi-arrow-right"></i></a>}
            </div>
            <div className="section-interna">
                {children}
            </div>
        </div>
    )
}