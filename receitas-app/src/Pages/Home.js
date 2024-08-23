import './Styles/Home.css';

export default function Recipes({ data }) {
  return (
    <div className="recipe-list">
      {data.map(objectInfo => (
        <div className="recipe-item" key={objectInfo.id}>
          <img
            src={objectInfo.img}
            alt={objectInfo.titulo}
            className="recipe-image"
          />
          <div className="recipe-info">
            <h2 className="recipe-title">{objectInfo.titulo}</h2>
          </div>
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
/*
    Anotacoes que achei relevante
    1. Podemos passar um state ao <Link /> que armazenara o objeto que quisermos
    2. Em uma arrow function, podemos utilizar () ao inves de {} na expressao () => {}, ficando assim () => (), removendo-se a obrigatoriedade de um return
    3. Para conseguir usar um template literal em uma tag JSX, usamos {}
*/