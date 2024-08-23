import React from 'react';
import './Styles/Form.css';

export default function Form() {
    return(
        <form id="recipe-form">
            <label>Insira o Nome da Receita:</label><br/>
            <input className="name-form" id="name-input" type="text" placeholder='Bolo de Alfafa com Mel'></input><br/>
            <label>Insira os Ingredientes (separados por vírgula):</label><br/>
            <input className="ingredient-form" id="ingredient-input" type="text" placeholder='alfafa, mel, ovos'></input><br/>
            <label>Insira uma URL da Imagem (Opcional):</label><br/>
            <input className="image-form" id="image-input" type="text" placeholder='https://google.com/images/...'></input><br/>
            <label>Insira o Modo de Preparo:</label><br/>
            <textarea className="how-to-form" id="how-to-input" type="text" placeholder='1. Aqueça o forno em temperatura ambiente, 2. Bata as claras em neve'></textarea><br/>
        </form>
    );
}