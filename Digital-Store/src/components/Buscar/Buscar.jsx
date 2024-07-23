import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Buscar.css'

export default function Buscar(){
    const [searchTerm, setSearchTerm] = useState('');
    const pesquisa = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            pesquisa(`/${searchTerm}`);
        }
    };
    return(
        <form onSubmit={handleSubmit}  id="form-search-nav" >
            <input type="search" name="pesProduto" id="pesProduto"  placeholder="Pesquisar produto..." onChange={(e) => {
                let paginas = e.target.value.toLowerCase()
                setSearchTerm(paginas)
            }} />
            <button type="submit" className="nav-btn " id="btnPesquisa"><i className="bi bi-search"></i></button>
        </form>
    )
}