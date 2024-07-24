import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Buscar.css'

export default function Buscar(){
    const [searchPage, setSearchPage] = useState('');
    const pesquisa = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchPage.trim()) {
            pesquisa(`${searchPage}`);
        }
    };
    return(
        <form onSubmit={handleSubmit}  id="form-search-nav" >
            <input type="search" name="pesProduto" id="pesProduto"  placeholder="Pesquisar produto..." onChange={(e) => {
                let paginas = e.target.value.toLowerCase()
                paginas == 'home' ? paginas= '/ ' : paginas
                setSearchPage(paginas)
            }} />
            <button type="submit" className="nav-btn " id="btnPesquisa"><i className="bi bi-search"></i></button>
        </form>
    )
}
