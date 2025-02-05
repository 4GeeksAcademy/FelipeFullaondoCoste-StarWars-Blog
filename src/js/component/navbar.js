import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart, FaTrash } from "react-icons/fa";
import starwars from "../../img/starwars.png";
import "../../styles/navbar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black py-3">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={starwars} alt="Logo" width="180" height="80" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item">
                            <Link to="/characters" className="nav-link">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/planets" className="nav-link">Planets</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <button 
                                className="btn btn-warning dropdown-toggle px-4 mx-2" 
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <FaHeart className="me-2" /> Favoritos ({store.favorites.length})
                            </button>

                            <ul className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? "show" : ""}`}>
                                {store.favorites.length === 0 ? (
                                    <li className="dropdown-item text-center">No hay favoritos aún</li>
                                ) : (
                                    store.favorites.map((fav, index) => (
                                        <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                            <Link to={fav.url} className="text-decoration-none text-dark">
                                                {fav.name}
                                            </Link>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => actions.toggleFavorite(fav)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
