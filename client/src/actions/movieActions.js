import * as types from './actionTypes';

export function loadMoviesSuccess(movies) {
    return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

export function loadMovieDetailsSuccess(movie) {
    return {type: types.LOAD_MOVIE_DETAILS_SUCCESS, movie};
}

export function addCreditsToMovie(credits) {
    return {type: types.ADD_CREDITS_TO_MOVIE, credits};
}

export function loadMovies() {
    return function(dispatch) {
        fetch('/movies/popular')
            .then(res => res.json())
            .then(movies => dispatch(loadMoviesSuccess(movies)));
    }
}

export function loadMovieDetails(id) {
    return function(dispatch) {
        fetch(`/movies/${id}`)
            .then(res => res.json())
            .then(movie => dispatch(loadMovieDetailsSuccess(movie)));
    }
}

export function loadMovieCredits(id) {
    return function(dispatch) {
        fetch(`/movies/credits/${id}`)
            .then(res => res.json())
            .then(credits => dispatch(addCreditsToMovie(credits)));
    }
}