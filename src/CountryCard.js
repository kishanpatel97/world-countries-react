import React from 'react';

const CountryCard = ({ country }) => (
  <div className="country-card">
    <img
      src={country.flags.svg}
      alt={`${country.name.common} flag`}
      className="country-flag"
    />
    <div className="country-info">
      <h2>{country.name.common}</h2>
      <p>
        <strong>Capital:</strong>{' '}
        {country.capital ? country.capital[0] : 'Unknown'}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  </div>
);

export default CountryCard;
