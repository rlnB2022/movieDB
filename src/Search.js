import "./Search.min.css";

const Search = () => {
	return (
		<div className="search-container">
			<div className="search">
				<i className="fa-solid fa-magnifying-glass"></i>
				<input type="text" name="search" id="search" placeholder="Search" />
			</div>
		</div>
	);
};

export default Search;
