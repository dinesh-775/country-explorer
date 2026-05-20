import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          country={country}
        />
      ))}
    </div>
  );
}

export default CountryList;