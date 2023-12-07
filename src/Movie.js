import "./Movie.min.css";

const Movie = ({ movie }) => {
	return (
		<div className="movie-container">
			<a href="">
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
