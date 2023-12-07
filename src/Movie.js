import "./Movie.min.css";

const Movie = ({ movie, setCurrentMovie }) => {
	const handleClick = (e) => {
		e.preventDefault();
		setCurrentMovie(movie.id);
	};

	return (
		<div className="movie-container">
			<a href="" onClick={handleClick}>
				<img
					className="movie-img"
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt="movie"
				/>
			</a>
		</div>
	);
};
export default Movie;
