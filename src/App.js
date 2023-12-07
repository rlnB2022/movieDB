import "./App.min.css";
import useFetch from "./useFetch";
import Movie from "./Movie";
import Hero from "./Hero";
import Search from "./Search";

function App() {
	const { data, loading, error } = useFetch(
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
	);

	if (loading) return <h1>Loading...</h1>;

	if (error) console.log(error);

	return (
		<div className="App">
			<div className="page-container">
				<header>React Movie Database</header>
				{data?.length && <Hero data={data}></Hero>}
				<Search />
				<h1>Popular Movies</h1>
				<div className="list-of-movies-container">
					{data?.map((movie) => {
						return <Movie key={movie.id} movie={movie} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
