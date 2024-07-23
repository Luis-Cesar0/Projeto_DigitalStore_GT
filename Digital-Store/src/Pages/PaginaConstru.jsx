import React from "react";
import pagconstru from '../images/pagconstru.png'
import './PaginaConstru.css'
export default function PaginaemConstrucao() {

    return (
        <div className="container">
                <div>

                    <img src={pagconstru} alt="Página em construção" />

                    <h1>Página em construção!</h1>
                    <h3>Estamos preparando para melhorar a sua experiência!</h3>                 
                </div>
            </div>
  );
}
