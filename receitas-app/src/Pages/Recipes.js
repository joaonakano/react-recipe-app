import React, { useState, useEffect } from 'react';
import './Styles/Recipes.css';

export default function Recipes({ data }) {
    return(
        <div>
            {data.map(objectInfo => {
                return(
                    <h1 className='recipe-title'>{objectInfo.titulo}</h1>
                );
            })
            }
        </div>
    );
}