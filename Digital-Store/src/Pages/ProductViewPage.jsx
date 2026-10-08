import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Gallery from '../components/Gallery/Gallery'
import BuyBox from '../components/BuyBox/BuyBox'
import ProductListing from '../components/ProductListing/ProductListing'
import Section from '../components/Section/Section'
import { contextoImgProduto } from '../Context/ContextImgProdut'
import PaginaNaoEncontrada from './PaginaNaoEncontrada'
import './ProductViewPage.css'

export default function ProductViewPage() {
    const { id } = useParams()
    const { imgProduto } = useContext(contextoImgProduto)
    const product = imgProduto.produtos.find((item) => item.id === Number(id))

    if (!product) return <PaginaNaoEncontrada />

    const detailImages = [product.image, ...imgProduto.productDetailImages.filter((image) => image !== product.image)]
    const highlights = imgProduto.produtos.filter((item) => item.id !== product.id).slice(0, 4)

    return (
        <main className="principal-detlhes">
            <nav className="caminho" aria-label="Caminho de navegação">
                <Link to="/" className="Homelink caminhoLink">Home</Link>
                <span aria-hidden="true">/</span>
                <Link to="/produtos" className="ProdutosLink caminhoLink">Produtos</Link>
                <span aria-hidden="true">/</span>
                <span className="NomeLink caminhoLink" aria-current="page">{product.name}</span>
            </nav>

            <div className="detalhes">
                <Gallery
                    images={detailImages}
                    showThumbs
                    ClassName="container-preview"
                    radius={5}
                    height={600}
                />
                <BuyBox
                    categoria={product.categoria}
                    description="Produto demonstrativo do catálogo local da Digital Store."
                    name={product.name}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                    reference={product.id}
                />
            </div>

            <Section title="Produtos em alta" link="/produtos" Width={1800}>
                <ProductListing listProduto={highlights} />
            </Section>
        </main>
    )
}
