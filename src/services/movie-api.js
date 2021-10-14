import axios from "axios";

const API_KEY = "05f9d8ba53390734d447373ac43d7e98";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchWithError = async (url = "") => {
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export function fetchFilms() {
  return fetchWithError("/trending/movie/day");
}

export function fetchFilmDetails(movieId) {
  return fetchWithError(`/movie/${movieId}?language=en-US`);
}

export function fetchFilmCredits(movieId) {
  return fetchWithError(`/movie/${movieId}/credits?languege=en-US`);
}

export function fetchFilmReviews(movieId) {
  return fetchWithError(`/movie/${movieId}/reviews?language=en-US&page=1`);
}

export function fetchMoviesByQuery(query) {
  return fetchWithError(
    `/search/movie?language=en-US&page=1&include_adult=false&query=${query}`
  );
}
