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

					setStore({
						dataPeople: peopleJson.results,
						dataPlanets: planetsJson.results,
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
