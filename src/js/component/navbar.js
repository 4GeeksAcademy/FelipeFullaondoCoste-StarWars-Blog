import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import starwars from "../../img/starwars.png";
import "../../styles/navbar.css"

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black py-3">
			<div className="container">
				{/* 🔹 Logo */}
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
							<NavLink to="/characters" className="nav-link">
								Characters
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/planets" className="nav-link">
								Planets
							</NavLink>
						</li>
						<li className="nav-item">
							<Link to="/favorites">
								<button className="btn btn-warning px-4 mx-2">Favoritos</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
