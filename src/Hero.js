import "./Hero.min.css";

const Hero = ({ data }) => {
	return (
		<div
			style={{
				background: `linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url('http://image.tmdb.org/t/p/w1280${data[0].backdrop_path}'), rgb(28, 28, 28)`,
			}}
			className="hero-container"
		>
			<div className="hero-details">
				<h1 className="title">{data[0].original_title}</h1>
				<p>{data[0].overview}</p>
			</div>
		</div>
	);
};

export default Hero;
