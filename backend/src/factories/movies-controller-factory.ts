import MovieController from "../controllers/movie-controller";
import MovieRepository from "../repository/movie-repository";
import CreateMovie from "../services/create-movies";
import ListAllMovies from "../services/list-movies";

export const makeMovieController = (): MovieController => {
	const movieRepository = new MovieRepository();
    const creatMovie = new CreateMovie(movieRepository);
    const listAllMovies = new ListAllMovies(movieRepository);
    const movieController = new MovieController(creatMovie,listAllMovies);
	return movieController
}