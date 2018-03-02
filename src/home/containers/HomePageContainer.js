import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import ApiHoc from '../../globalComponents/ApiHoc';
import { loadBoxOfficeMovies, loadPopularMovies, loadUpcomingMovies } from '../../actions/movieActions';
import { loadPopularShows } from '../../actions/showActions';
import { getShowsHomePage } from '../../selectors/shows';

/*
	Can I share one container between the movie and show page? Probably...
*/

const mapStateToProps = state => ({
	boxOffice: state.movies.boxOfficeMovies,
	popular: state.movies.popularMovies.slice(0, 4),
	upcoming: state.movies.upcomingMovies,
	popularShows: getShowsHomePage(state)('popular'),
});

const mapDispatchToProps = (dispatch) => {
	const x = 1;
	console.log(x);
	return {
		onLoad: () => {
			dispatch(loadBoxOfficeMovies());
			dispatch(loadPopularShows());
			dispatch(loadPopularMovies());
			dispatch(loadUpcomingMovies());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(HomePage));