var AppActions = require('../actions/AppActions');

module.exports = {
	searchMovies: function(movie){
		$.ajax({
			url: 'http://www.omdbapi.com/?apikey=9e5c81c6&s=' + movie.title,
			dataType: 'json',
			cache: false,
			success: function(){
				AppActions.receiveMovieResults(data.Search);
			}.bind(this),
			error: function(xhr, status, err){
				alert(err);
			}.bind(this)
		});
	}
}