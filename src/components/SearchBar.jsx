
import '../App.css';

function SearchBar({ city, setCity, search }) {

  return (
    <div className="search">

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={search}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;
