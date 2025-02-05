const getState = ({ getStore, getActions, setStore }) => {
	const defaultImage = "https://placehold.co/288x288?text=No+Image";
	const checkImageExists = async (url) => {
		try {
			const response = await fetch(url, { method: "HEAD" });
			return response.ok ? url : defaultImage;
		} catch (error) {
			return defaultImage;
		}
	};

	return {
		store: {
			dataPeople: [],
			dataPlanets: [],
			dataStarships: [],
			selectedCharacter: null,
			selectedPlanet: null,
			selectedStarship: null,
			favorites: [],
			loading: true,
			error: null,
		},
		actions: {
			fetchData: async () => {
				try {
					setStore({ loading: true });

					const peopleResponse = await fetch("https://www.swapi.tech/api/people");
					if (!peopleResponse.ok) throw new Error(`HTTP error! status: ${peopleResponse.status}`);
					const peopleJson = await peopleResponse.json();

					const planetsResponse = await fetch("https://www.swapi.tech/api/planets");
					if (!planetsResponse.ok) throw new Error(`HTTP error! status: ${planetsResponse.status}`);
					const planetsJson = await planetsResponse.json();

					const starshipsResponse = await fetch("https://www.swapi.tech/api/starships");
					if (!starshipsResponse.ok) throw new Error(`HTTP error! status: ${starshipsResponse.status}`);
					const starshipsJson = await planetsResponse.json();

					const peopleWithImages = await Promise.all(
						peopleJson.results.map(async (person, index) => {
							const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
							return {
								...person,
								image: await checkImageExists(imageUrl),
							};
						})
					);

					const planetsWithImages = await Promise.all(
						planetsJson.results.map(async (planet, index) => {
							const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`;
							return {
								...planet,
								image: await checkImageExists(imageUrl),
							};
						})
					);

					const starshipWithImages = await Promise.all(
						starshipsJson.results.map(async (starship, index) => {
							const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`;
							return {
								...starship,
								image: await checkImageExists(imageUrl),
							};
						})
					);

					setStore({
						dataPeople: peopleWithImages,
						dataPlanets: planetsWithImages,
						dataStarships: starshipWithImages,
						loading: false,
						error: null,
					});
				} catch (error) {
					setStore({ error: error.message, loading: false });
				}
			},

			fetchCharacterById: async (id) => {
				try {
					setStore({ loading: true });

					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					if (!response.ok) throw new Error("No se pudo obtener el personaje");
					const data = await response.json();

					const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
					const image = await checkImageExists(imageUrl);

					setStore({
						selectedCharacter: { ...data.result.properties, image },
						loading: false,
					});
				} catch (error) {
					setStore({ error: error.message, loading: false });
				}
			},

			fetchPlanetById: async (id) => {
				try {
					setStore({ loading: true });

					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					if (!response.ok) throw new Error("No se pudo obtener el planeta");
					const data = await response.json();

					const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
					const image = await checkImageExists(imageUrl);

					setStore({
						selectedPlanet: { ...data.result.properties, image },
						loading: false,
					});
				} catch (error) {
					setStore({ error: error.message, loading: false });
				}
			},

			fetchStarshipById: async (id) => {
				try {
					setStore({ loading: true });

					const response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
					if (!response.ok) throw new Error("No se pudo obtener el vehiculo");
					const data = await response.json();

					const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
					const image = await checkImageExists(imageUrl);

					setStore({
						selectedStarship: { ...data.result.properties, image },
						loading: false,
					});
				} catch (error) {
					setStore({ error: error.message, loading: false });
				}
			},

			toggleFavorite: (item) => {
				const store = getStore();
				const favorites = [...store.favorites];

				const index = favorites.findIndex(fav => fav.id === item.id && fav.type === item.type);

				if (index !== -1) {
					favorites.splice(index, 1);
				} else {
					favorites.push(item);
				}

				setStore({ favorites }); 
			},

		},
	};
};

export default getState;
