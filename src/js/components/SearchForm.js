var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = createReactClass({
    render: function() {
        return (
            <div className="search-form">
                <h1 className="text-center">Search For A Movie</h1>
                <form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="Enter a movie title..." />
					</div>
					<button className="btn btn-primary btn-block">Search Movie</button>
                </form>
            </div>
        )
    },

    onSubmit: function(e){
    	e.preventDefault();

    	var movie = {
    		title: this.refs.title.value.trim()
    	}

    	// Create event to search for movie
    	AppActions.searchMovies(movie);
    }
});

module.exports = SearchForm;
