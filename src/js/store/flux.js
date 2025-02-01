const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		dataPeople: [],
		dataPlanets: [],
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
  
			// Imagen predeterminada si no se encuentra la original
			const defaultImage = "https://placehold.co/600x400/png"; // O cualquier URL de imagen predeterminada
  
			// Agregar imágenes a cada persona
			const peopleWithImages = peopleJson.results.map((person, index) => {
			  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;
			  return {
				...person,
				image: imageUrl || defaultImage, // Si no hay imagen, usar la predeterminada
			  };
			});
  
			// Agregar imágenes a cada planeta
			const planetsWithImages = planetsJson.results.map((planet, index) => {
			  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`;
			  return {
				...planet,
				image: imageUrl || defaultImage, // Si no hay imagen, usar la predeterminada
			  };
			});
  
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
	  },
	};
  };
  
  export default getState;
  