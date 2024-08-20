import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeDetails from './Pages/RecipeDetails';

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/receita/:id' element={<RecipeDetails />} />
            </Routes>
        </BrowserRouter>
    );
}