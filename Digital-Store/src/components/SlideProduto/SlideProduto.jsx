import React, { useState } from "react";
import img from '../../images/sapato-roxo.png';
import './SlideProduto.css';

export default function SlideProduto() {
    let imagens = [
        { tenis: { img }, bc: "#E2E3FF" },
        { tenis: { img }, bc: "#FFC0BC" },
        { tenis: { img }, bc: "#DEC699" },
        { tenis: { img }, bc: "#E8DFCF" },
        { tenis: { img }, bc: "#E8DFCF" }
    ];

    const [imagem, setImagem] = useState(0);

    const handleLeftArrowClick = () => {
        if (imagem === 0) {
            setImagem(imagens.length - 1);
        } else {
            setImagem(imagem - 1);
        }
    };

    const handleRightArrowClick = () => {
        if (imagem === imagens.length - 1) {
            setImagem(0);
        } else {
            setImagem(imagem + 1);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="imgPrincipal">
                    <button className="normalLeft" onClick={handleLeftArrowClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="#474747" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <button className="mediaLeft" onClick={handleLeftArrowClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="#474747" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <img src={img} alt="Tenis" style={{ backgroundColor: imagens[imagem].bc }} />
                    <button className="normalRight" onClick={handleRightArrowClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="#474747" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    <button className="mediaRight" onClick={handleRightArrowClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="#474747" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                
                <div className="imgSecundarias">
                    {imagens.map((imagemProd, index) => (
                        <div
                            className="img"
                            key={index}
                            style={imagem === index ? { border: "1px solid #C92071", backgroundColor: imagemProd.bc } : { backgroundColor: imagemProd.bc, border: "none" }}
                            onClick={() => setImagem(index)}
                        >
                            <div style={imagem === index ? { boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)" } : { border: "none" }}>
                                <img src={img} alt="Tenis" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
