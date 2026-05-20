import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const search = query.toLowerCase().trim();

    // show all when input is empty
    if (!search) {
      setFilteredCountries(countries);
      return;
    }

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(search)
    );

    setFilteredCountries(filtered);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black p-3">
      <h1
        className="text-5xl md:text-6xl font-black text-center mb-10 
  text-transparent bg-clip-text 
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
  animate-pulse tracking-tight drop-shadow-2xl"
      >
        ✈️ Travel to your dream country
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-center text-blue-500 mt-6">Loading...</p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-6">{error}</p>
      )}

      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;