import React from 'react';
import './Styles/RecipeDetails.css';
import { useLocation } from 'react-router-dom';

export default function RecipeDetails() {
    const location = useLocation();
    const { recipe } = location.state;
    
    return(
        <div>
            <h1>{recipe.titulo}</h1>
            <h2>Ingredientes</h2>
            <ol className="recipe-ingredients-list">
                {recipe.ingredientes.map(ingrediente => (
                    <li className="ingredient-item" key={recipe.ingredientes.indexOf(ingrediente) + 10000} >{ingrediente}</li>   // Tive que usar + 10000 porque o metodo map requere chaves unicas
                ))}
            </ol>
            <h2>Modo de Preparo</h2>
            <p>{recipe.modoPreparo}</p>
        </div>
    );
}

/*
    Anotações que achei relevantes
    1. O componente <Link /> possui um state que armazena a receita selecionada pelo usuario
*/