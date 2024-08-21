import Recipe from '../Components/Recipe';

import './Styles/Home.css';

export default function Recipes({ data }) {
    return(
        <div>
            {data.map(objectInfo => (
                <div className="recipe-container" key={objectInfo.id}>
                    <Recipe recipeObject={objectInfo} />
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