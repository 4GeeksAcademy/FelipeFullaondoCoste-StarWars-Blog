import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home";
import Characters from "./views/characters";
import Planets from "./views/planets";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PlanetById from "./views/planetbyid";
import CharacterById from "./views/characterbyid";
import Starships from "./views/starships";
import StarshipById from "./views/starshipbyid";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<div className="d-flex flex-column min-vh-100">
					<Navbar />
					<div className="main-content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/characters" element={<Characters />} />
							<Route path="/planets" element={<Planets />} />
							<Route path="/starships" element={<Starships />} />
							<Route path="/character/:id" element={<CharacterById />} />
							<Route path="/planet/:id" element={<PlanetById />} />							
							<Route path="/starships/:id" element={<StarshipById />} />

						</Routes>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
