import React, { useState } from 'react';
import CountryGrid from './CountryGrid';
import ErrorDisplay from './ErrorDisplay';
import useFetchCountries from './useFetchCountries';

const CountryFetcher = () => {
  const [countries, error, loading] = useFetchCountries();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <h1>Countries</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {error ? (
        <ErrorDisplay message={error} />
      ) : (
        <CountryGrid countries={filteredCountries} />
      )}
    </div>
  );
};

export default CountryFetcher;
