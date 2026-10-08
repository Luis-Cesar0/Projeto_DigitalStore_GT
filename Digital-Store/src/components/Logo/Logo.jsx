import PropTypes from 'prop-types'
import logo from '../../images/logo_DStore.png'
import logoBranca from '../../images/logo_DStore_branca.png'

export default function Logo({ cor = 'rosa' }) {
    return (
        <img
            src={cor === 'branca' ? logoBranca : logo}
            alt="Digital Store"
        />
    )
}

Logo.propTypes = {
    cor: PropTypes.oneOf(['branca', 'rosa']),
}
