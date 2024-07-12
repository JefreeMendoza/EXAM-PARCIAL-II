import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Styles/NavBar.css'


function NavBar() {

    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'navbar-link active' : 'navbar-link';
    };

    return (
        <>
            <div>
                <nav className='navbar'>
                    {/* <h1>
                        Hola mundo
                    </h1> */}
                    <ul className="navbar-links">
                        <li><Link to="/" className={getLinkClass('/')}>Inicio</Link></li>
                        <li><Link to="/ingreso" className={getLinkClass('/programas')}>Ingreso</Link></li>
                        <li><Link to="/listado" className={getLinkClass('/talleres')}>Listado</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBar;

