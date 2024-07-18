import React, { useState } from "react";
import img from '../../images/sapato_perfil_carde_vendas.png';
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
    const [bgColor, setBgColor] = useState(imagens[0].bc);

    const handleLeftClick = () => {
        const newIndex = imagem === 0 ? imagens.length - 1 : imagem - 1;
        setImagem(newIndex);
        setBgColor(imagens[newIndex].bc);
    };

    const handleRightClick = () => {
        const newIndex = imagem === imagens.length - 1 ? 0 : imagem + 1;
        setImagem(newIndex);
        setBgColor(imagens[newIndex].bc);
    };

    return (
        <div style={{ backgroundColor: bgColor }}>
            <div className="container">
                <div className="imgPrincipal">
                    <button className="normalLeft" onClick={handleLeftClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="#474747" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <button className="mediaLeft" onClick={handleLeftClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="#474747" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <img src={img} alt="Tenis" />
                    <button className="normalRight" onClick={handleRightClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="#474747" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    <button className="mediaRight" onClick={handleRightClick}>
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
                            onClick={() => {
                                setImagem(index);
                                setBgColor(imagens[index].bc);
                            }}
                        >
                            <div style={imagem === index ? { boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)" } : { border: "none" }}>
                                <img src={img} alt="Tenis" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}