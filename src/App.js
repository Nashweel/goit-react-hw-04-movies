import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import LoaderSpinner from "./components/Loader";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: 'home-page'*/)
);

const MoviesPage = lazy(() =>
  import("./components/MoviesPage" /* webpackChunkName: 'movies-page'*/)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./components/MovieDetailsPage" /* webpackChunkName: 'movie-details-page'*/
  )
);

const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName: "not-found-view-page" */)
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
