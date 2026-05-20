function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">

      <div className="overflow-hidden">
        <img
          src={
            country.flags?.png ||
            "https://via.placeholder.com/300x200?text=No+Flag"
          }
          alt={country.name.common}
          className="w-full h-40 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold text-gray-800">
          {country.name.common}
        </h2>

        <p className="text-sm text-gray-600">
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Population:</strong>{" "}
          {country.population
            ? country.population.toLocaleString()
            : "N/A"}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Region:</strong> {country.region || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;