var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');

function getAppState(){
	return {
		movies: AppStore.getMovieResults()
	}
}

var App = createReactClass({
	getInitialState: function() {
		return getAppState();
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnMount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

    render: function() {
    	console.log(this.state.movies)
        return (
            <div>
                <SearchForm />
            </div>
        )
    },

    _onChange: function() {
    	this.setState(getAppState());
    }
});

module.exports = App;
