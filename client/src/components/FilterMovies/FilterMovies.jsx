const categories = ["Fantasy", "Horror", "Drama"];

function FilterMovies({ selectedGenre, handleGenreChange }) {
  // Dans le return mettre en place un label avec un select et option basé sur le tableau categories
  return (
    <div className="filter-movies">
      <label htmlFor="genre">
        Select Genre:
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterMovies;
