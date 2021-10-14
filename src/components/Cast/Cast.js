import { useState, useEffect } from "react";
import * as movieAPI from "../../services/movie-api";
import s from "./Cast.module.css";
import image from "../../images/user-not-found.png";

export default function Cast({ movieId }) {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    movieAPI
      .fetchFilmCredits(movieId)
      .then((data) => {
        return data.cast;
      })
      .then((data) => {
        setMovieCast(data);
      });
  }, [movieId]);

  return (
    <>
      {movieCast.length !== 0 ? (
        <ul className={s.CastList}>
          {movieCast &&
            movieCast.map((movieCast) => (
              <li key={movieCast.cast_id}>
                <img
                  width={"200"}
                  height={"300"}
                  src={
                    movieCast.profile_path === null
                      ? image
                      : `https://image.tmdb.org/t/p/w200${movieCast.profile_path}`
                  }
                  alt={movieCast.name}
                  className={s.CastItem__image}
                />
                <h2>{movieCast.name}</h2>
                <p>{movieCast.character}</p>
              </li>
            ))}
        </ul>
      ) : (
        <p>We don't have any casts for this movie</p>
      )}
    </>
  );
}
