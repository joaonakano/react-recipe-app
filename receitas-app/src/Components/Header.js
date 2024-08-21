import { Link, useLocation } from 'react-router-dom';
import React from 'react';

import './Styles/Form.css';

export default function Header() {
    let { pathname } = useLocation();

    return(
        <header className="header">
            {pathname !== "/addreceita" && (    // Renderização condicional que exibe o Link apenas quando nao esta no URL proprio
                <Link to='/addreceita'>Nova Receita</Link>
            )}
            {pathname !== "/" && (              // Renderização condicional que exibe o Link apenas quando nao esta no URL proprio
                <Link to='/'>Ver Receitas</Link>
            )}
        </header>
    )
}