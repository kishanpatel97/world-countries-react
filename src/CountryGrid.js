import React, { useState, useMemo } from 'react';
import CountryCard from './CountryCard';

const CountryGrid = ({ countries }) => {
  const [sortType, setSortType] = useState('default');

  const sortedCountries = useMemo(() => {
    switch (sortType) {
      case 'name':
        return [...countries].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      case 'populationHigh':
        return [...countries].sort((a, b) => b.population - a.population);
      case 'populationLow':
        return [...countries].sort((a, b) => a.population - b.population);
      default:
        return countries;
    }
  }, [countries, sortType]);

  return (
    <div>
      <div className="sort-container">
        <label htmlFor="sort-options">Sort By: </label>
        <select id="sort-options" onChange={(e) => setSortType(e.target.value)}>
          <option value="default">Select Sorting Option</option>
          <option value="name">Alphabetical Order</option>
          <option value="populationHigh">Population Size (High to Low)</option>
          <option value="populationLow">Population Size (Low to High)</option>
        </select>
      </div>
      <div className="country-grid">
        {sortedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
