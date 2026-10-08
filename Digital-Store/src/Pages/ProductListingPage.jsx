import { useContext, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterGroup from '../components/FilterGroup/FilterGroup'
import ProductListing from '../components/ProductListing/ProductListing'
import Section from '../components/Section/Section'
import { contextoImgProduto } from '../Context/ContextImgProdut'
import './ProductListingPage.css'

const categories = [{ text: 'Tênis', value: 'Tênis' }]
const priceOptions = [
    { text: 'Com desconto', value: 'discount' },
    { text: 'Preço integral', value: 'regular' },
]

function normalize(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

export default function ProductListingPage() {
    const { imgProduto } = useContext(contextoImgProduto)
    const [searchParams] = useSearchParams()
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedPrices, setSelectedPrices] = useState([])
    const [sortOrder, setSortOrder] = useState('asc')
    const searchQuery = searchParams.get('q')?.trim() ?? ''

    const products = useMemo(() => {
        const query = normalize(searchQuery)
        return imgProduto.produtos
            .filter((product) => {
                const matchesSearch = !query || normalize(`${product.name} ${product.categoria}`).includes(query)
                const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.categoria)
                const isDiscounted = Number.isFinite(product.priceDiscount) && product.priceDiscount < product.price
                const matchesPrice = selectedPrices.length === 0 || selectedPrices.includes(isDiscounted ? 'discount' : 'regular')
                return matchesSearch && matchesCategory && matchesPrice
            })
            .sort((first, second) => {
                const firstPrice = first.priceDiscount ?? first.price
                const secondPrice = second.priceDiscount ?? second.price
                return sortOrder === 'asc' ? firstPrice - secondPrice : secondPrice - firstPrice
            })
    }, [imgProduto.produtos, searchQuery, selectedCategories, selectedPrices, sortOrder])

    const toggleValue = (value, setValues) => {
        setValues((current) => current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value])
    }

    return (
        <main className="cont-principal">
            <div className="cont-orden">
                <p>
                    <strong>{searchQuery ? `Resultados para “${searchQuery}”` : 'Todos os produtos'}</strong>
                    {' '}— {products.length} {products.length === 1 ? 'produto' : 'produtos'}
                </p>
                <div className="selct-orden">
                    <label htmlFor="ordenProduto">Ordenar por</label>
                    <select
                        name="ordenProduto"
                        id="ordenProduto"
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                    >
                        <option value="asc">Menor preço</option>
                        <option value="desc">Maior preço</option>
                    </select>
                </div>
            </div>

            <div className="cont-lista-filtro">
                <aside className="cont-filtro" aria-label="Filtros de produtos">
                    <p>Filtrar por:</p>
                    <FilterGroup
                        listaOpcos={categories}
                        titulo="Categoria"
                        name="categoria"
                        value={selectedCategories}
                        onChange={(value) => toggleValue(value, setSelectedCategories)}
                    />
                    <FilterGroup
                        listaOpcos={priceOptions}
                        titulo="Preço"
                        name="preco"
                        value={selectedPrices}
                        onChange={(value) => toggleValue(value, setSelectedPrices)}
                    />
                </aside>

                <Section Width={1500}>
                    {products.length > 0
                        ? <ProductListing listProduto={products} />
                        : <p className="sem-resultados" role="status">Nenhum produto encontrado. Ajuste sua busca ou filtros.</p>}
                </Section>
            </div>
        </main>
    )
}
