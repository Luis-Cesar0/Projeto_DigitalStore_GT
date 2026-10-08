import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Buscar.css'

export default function Buscar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [searchPage, setSearchPage] = useState('')

    useEffect(() => {
        const search = new URLSearchParams(location.search).get('q') ?? ''
        setSearchPage(search)
    }, [location.search])

    const handleSubmit = (event) => {
        event.preventDefault()
        const query = searchPage.trim()
        navigate(query ? `/produtos?q=${encodeURIComponent(query)}` : '/produtos')
    }

    return (
        <form onSubmit={handleSubmit} id="form-search-nav" role="search">
            <input
                type="search"
                name="pesProduto"
                id="pesProduto"
                placeholder="Pesquisar produto..."
                aria-label="Pesquisar produto"
                value={searchPage}
                onChange={(event) => setSearchPage(event.target.value)}
            />
            <button type="submit" className="nav-btn" id="btnPesquisa" aria-label="Buscar">
                <i className="bi bi-search" aria-hidden="true" />
            </button>
        </form>
    )
}
