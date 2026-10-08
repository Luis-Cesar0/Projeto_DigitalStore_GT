import PropTypes from 'prop-types'
import { contextoImgProduto } from './ContextImgProdut'
import storefront from '../data/products'

export default function ContextoImgProdutoProvedor({ children }) {
  return (
    <contextoImgProduto.Provider value={{ imgProduto: storefront }}>
      {children}
    </contextoImgProduto.Provider>
  )
}

ContextoImgProdutoProvedor.propTypes = {
  children: PropTypes.node.isRequired,
}
