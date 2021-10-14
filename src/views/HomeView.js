import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as movieAPI from "../services/movie-api";
import PageHead from "../components/PageHead";

export default function HomeView() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieAPI
      .fetchFilms()
      .then((data) => {
        return data.results;
      })
      .then(setMovies);
  }, []);

  return (
    <>
      <PageHead text="Trending Today" />

      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {movie.name}
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
