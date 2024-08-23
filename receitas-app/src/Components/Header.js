import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import logo from '../Assets/images/capivara.png';
import './Styles/Header.css';

export default function Header() {
    let { pathname } = useLocation();

    return(
        <header className="header">
            <div className="header_title-container">
                <img src={logo} alt="Logo" className="header_logo" />
                
            </div>
            <div className='botoes'>
            {pathname !== "/addreceita" && (    // Renderização condicional que exibe o Link apenas quando nao esta no URL proprio
                <Link to='/addreceita' className="header_link">Nova Receita</Link>
            )}
            {pathname !== "/" && (              // Renderização condicional que exibe o Link apenas quando nao esta no URL proprio
                <Link to='/' className="header_link">Ver Receitas</Link>
            )}
            </div>
        </header>
    )
}