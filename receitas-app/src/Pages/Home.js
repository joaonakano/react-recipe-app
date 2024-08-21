import { Link } from 'react-router-dom'
import './Styles/Home.css';

export default function Recipes({ data }) {
    return(
        <div>
            {data.map(objectInfo => (
                <div className="recipe-container" key={objectInfo.id}>
                    <Link
                        className="recipe-link"
                        to={`/receita/${objectInfo.id}`}
                        state={{ recipe: objectInfo }}  // Armazena um objeto com a receita para cada iteracao
                    >
                        <h1 className='recipe-title'>{objectInfo.titulo}</h1>
                    </Link>
                </div>
            ))}
        </div>
    );
}

/*
    Anotacoes que achei relevante
    1. Podemos passar um state ao <Link /> que armazenara o objeto que quisermos
    2. Em uma arrow function, podemos utilizar () ao inves de {} na expressao () => {}, ficando assim () => (), removendo-se a obrigatoriedade de um return
    3. Para conseguir usar um template literal em uma tag JSX, usamos {}
*/