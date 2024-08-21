import React from 'react';
import './Styles/Error.css';

export default function Error() {
    return(
        <div className='error-container'>
            <span>Erro! Essa receita já existe! Tente novamente com uma receita nova.</span>
        </div>
    );
}