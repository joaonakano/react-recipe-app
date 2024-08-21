import { Link } from 'react-router-dom';
import React from 'react';

import './Styles/Form.css';

export default function Header() {
    return(
        <header className="header">
            <Link to='/'>Nova Receita</Link>
            <Link to='/receitas'>Ver Receitas</Link>
        </header>
    )
}