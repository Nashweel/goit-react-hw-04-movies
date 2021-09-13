import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(() =>
  import("./components/HomePage" /* webpackChunkName: 'home-page'*/)
);

const MoviesPage = lazy(() =>
  import("./components/MoviesPage" /* webpackChunkName: 'movies-page'*/)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage" /* webpackChunkName: 'movie-details-page'*/
  )
);

const Cast = lazy(() =>
  import("./components/Cast" /* webpackChunkName: 'cast'*/)
);

const Reviews = lazy(() =>
  import("./components/Reviews" /* webpackChunkName: 'reviews'*/)
);

function App() {
  return;
}

export default App;
