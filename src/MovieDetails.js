import "./MovieDetails.min.css";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import React from "react";
import CurrencyFormat from "react-currency-format";

const MovieDetails = ({ currentMovie }) => {
	const { data, loading, error } = useFetch(
		`http://api.themoviedb.org/3/movie/${currentMovie}?language=en-US`
	);

	const [runningTime, setRunningTime] = useState(null);

	console.log(data);

	useEffect(() => {
		calcRunningTime();
	}, [data]);

	const calcRunningTime = () => {
		const hours = parseInt(data?.runtime / 60);
		const minutes = data?.runtime % 60;
		setRunningTime(`${hours}h ${minutes}m`);
	};

	if (loading) return <h1>Loading...</h1>;

	if (error) console.log(error);

	return (
		<div className="movie-details-container">
			<div
				style={{
					background: `linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url('http://image.tmdb.org/t/p/w500${data?.poster_path}'), rgb(28, 28, 28)`,
				}}
				className="background"
			></div>
			<div className="hero-details">
				<h1>{data?.original_title}</h1>
				<h3>PLOT</h3>
				<p>{data?.overview}</p>
				<h3>GENRES</h3>
				<ul>
					{data?.genres.map((genre) => {
						return <li key={genre.id}>{genre.name}</li>;
					})}
				</ul>
				<h3>IMDB RATING</h3>
				<div className="progress-bar">
					<progress
						name="imdb-rating"
						id="imdb-rating"
						value={data?.vote_average}
						max="10"
					/>
					<p className="vote-average">{data?.vote_average}</p>
				</div>
			</div>
			<div className="movie-extra-details">
				<div className="running-time">
					<i className="fa-regular fa-clock icon"></i>
					<p>Running Time: {runningTime}</p>
				</div>
				<div className="budget">
					<i className="fa-solid fa-money-bill-1 icon"></i>
					<p className="budget-text">Budget:</p>
					$
					<CurrencyFormat
						displayType="text"
						renderText={(value) => <p>{value}</p>}
						value={data?.budget}
						thousandSeparator={","}
					/>
				</div>
				<div className="revenue">
					<i className="fa-solid fa-ticket icon"></i>
					<p className="revenue-text">Revenue:</p>
					$
					<CurrencyFormat
						displayType="text"
						renderText={(value) => <p>{value}</p>}
						value={data?.revenue}
						thousandSeparator={","}
					/>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
