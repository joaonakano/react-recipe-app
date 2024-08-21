import { Link } from 'react-router-dom'

import './Styles/Recipe.css';

export default function Recipes({ recipeObject }) {
    return(
        <div>
            <Link
                className="recipe-link"
                to={`/receita/${recipeObject.id}`}
                state={{ recipe: recipeObject }}  // Armazena o objeto com a receita em um estado. Isso vai ser utilizado para renderizar informações sobre apenas essa receita em outros componentes
            >
                <h1 className='recipe-title'>{recipeObject.titulo}</h1>
            </Link>
        </div>
    );
}