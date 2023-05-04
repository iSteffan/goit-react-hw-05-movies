import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const API_KEY = '8776cc9f66dd32d7c5ecc9b66eb74c99';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(resp => resp.json())
      .then(response => {
        // console.log(response.results);
        setTrendingMovies(response.results);
      })

      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(item => (
          <li key={item.id}>
            <NavLink to="/">{item.original_title}</NavLink>
          </li>
        ))}
      </ul>
      ;
    </>
  );
};

export default Home;
