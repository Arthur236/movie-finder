var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');

var App = createReactClass({
    render: function(){
        return (
            <div>
                <SearchForm />
            </div>
        )
    }
});

module.exports = App;
