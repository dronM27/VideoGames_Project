import React from 'react';
import { NavLink } from 'react-router-dom';
import logoNavBar from '../logoNavBar.png';


export default function NavBar() {
    return (
        <div>
            <div>
            <NavLink exact to="/">
                <img src={logoNavBar} width="30" height="30" alt='buscando Imagen' />
            </NavLink>
            </div>
            <nav>
                <ul>
                    <h3>
                        <NavLink exact to="/videogames" >Videogames</NavLink>
                        <NavLink to="/genres" >Genres</NavLink>
                    </h3>
                </ul>
            </nav>
        </div>
    )
}