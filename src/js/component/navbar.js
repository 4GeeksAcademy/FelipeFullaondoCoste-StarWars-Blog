import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container d-flex justify-content-evenly">
				<Link to="/">
					<a className="navbar-brand m-0 p-0">
						<img src={starwars} alt="Logo" width="200" height="120" className="m-0 p-0" />
					</a>
				</Link>
				<Link to="/">
					<button className="btn btn-primary">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
