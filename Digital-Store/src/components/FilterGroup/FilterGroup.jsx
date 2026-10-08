import PropTypes from 'prop-types'
import './FilterGroup.css'

export default function FilterGroup({ listaOpcos, titulo, name, value, onChange }) {
    return (
        <fieldset className="cont-Categorias">
            <legend className="subtitulos">{titulo}</legend>
            {listaOpcos.map((opcao) => {
                const id = `${name}-${opcao.value}`
                return (
                    <div key={opcao.value}>
                        <input
                            type="checkbox"
                            value={opcao.value}
                            name={name}
                            id={id}
                            checked={value.includes(opcao.value)}
                            onChange={() => onChange(opcao.value)}
                        />
                        <label htmlFor={id}>{opcao.text}</label>
                    </div>
                )
            })}
        </fieldset>
    )
}

FilterGroup.propTypes = {
    listaOpcos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })).isRequired,
    titulo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
}
