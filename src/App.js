import "./App.min.css";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Movie from "./Movie";
import Hero from "./Hero";
import Search from "./Search";
import MovieDetails from "./MovieDetails";

function App() {
	const { data, loading, error } = useFetch(
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
	);
	const [modalVisible, setModalVisible] = useState(false);
	const [currentMovie, setCurrentMovie] = useState(null);

	useEffect(() => {
		setModalVisible((visible) => !visible);
	}, [currentMovie]);

	if (loading) return <h1>Loading...</h1>;

	if (error) console.log(error);

	return (
		<div className="App">
			<div className="page-container">
				<header>React Movie Database</header>
				{data?.results.length && <Hero data={data.results}></Hero>}
				<Search />
				<h1>Popular Movies</h1>
				<div className="list-of-movies-container">
					{data?.results.map((movie) => {
						return (
							<Movie
								setCurrentMovie={() => setCurrentMovie(movie.id)}
								key={movie.id}
								movie={movie}
							/>
						);
					})}
				</div>
			</div>
			{modalVisible && <MovieDetails currentMovie={currentMovie} />}
		</div>
	);
}

export default App;
