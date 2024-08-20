import React, { useState } from 'react';

import './Styles/Form.css';

export default function Form() {
    return(
        <form>
            <label>Insira o Nome da Receita:</label><br/>
            <input className="name-form" type="text" placeholder='Bolo de Alfafa com Mel'></input><br/>
            <label>Insira os Ingredientes (separados por vírgula):</label><br/>
            <input className="ingredient-form" type="text" placeholder='alfafa, mel, ovos'></input><br/>
            <label>Insira o Modo de Preparo:</label><br/>
            <textarea className="how-to-form" type="text" placeholder='1. Aqueça o forno em temperatura ambiente, 2. Bata as claras em neve'></textarea><br/>
        </form>
    );
}