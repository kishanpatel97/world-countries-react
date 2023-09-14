import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get('https://restcountries.com/v3.1/all', {
        cancelToken: source.token
      })
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(err.message);
        }
        setLoading(false);
      });

    return () => {
      source.cancel('Axios request cancelled.');
    };
  }, []);

  return [countries, error, loading];
};

export default useFetchCountries;
