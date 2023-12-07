import { useEffect, useState } from "react";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGIyNGEwNzU3OWMwOTI2MTcwMzgxZjJkOWUzYzE2ZCIsInN1YiI6IjY1NzEzNDQxOTBmY2EzMDE0ZTcxOGMzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WQ2uXB0GeqK6eJyzPWJ0r9zCFUoKDCsVtsKG5dOe6qw",
	},
};

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetch(url, options)
			.then((response) => response.json())
			.then((response) => setData(response.results))
			.catch((err) => setError(err.message))
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
