const getState = ({ getStore, getActions, setStore }) => {
	// Imagen por defecto
	const defaultImage = "https://placehold.co/288x288?text=No+Image";

	// Verificar si la imagen existe
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
			selectedCharacter: null, // Estado para un Character por ID
			selectedPlanet: null, // Estado para un Planet por ID
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

					// Agregar imágenes a personajes
					const peopleWithImages = await Promise.all(
						peopleJson.results.map(async (person, index) => {
							const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
							return {
								...person,
								image: await checkImageExists(imageUrl),
							};
						})
					);

					// Agregar imágenes a planetas
					const planetsWithImages = await Promise.all(
						planetsJson.results.map(async (planet, index) => {
							const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`;
							return {
								...planet,
								image: await checkImageExists(imageUrl),
							};
						})
					);

					setStore({
						dataPeople: peopleWithImages,
						dataPlanets: planetsWithImages,
						loading: false,
						error: null,
					});
				} catch (error) {
					setStore({ error: error.message, loading: false });
				}
			},

			// Obtener un Character por ID
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

			// Obtener un Planet por ID
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
		},
	};
};

export default getState;
