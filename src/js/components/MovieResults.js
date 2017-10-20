var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie.js');

var MovieResults = createReactClass({
    render: function() {
        return (
            <div>
                <h3 className="text-center">Reults</h3>

                {
                    this.props.movies.map(function(movie, i){
                        return(
                            <Movie movie={movie} key={i} />
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = MovieResults;
