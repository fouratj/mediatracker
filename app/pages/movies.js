var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Card = require('../components/card');
var Page = require('../components/page');
var FAB = require('../components/fab'); //Fixed Action Button
var AddItem = require('../components/modal');

// /COMPONENTS

//STORE & REDUX ACTIONS
var store = require('../store');
var addMovie = store.addMovie;
var delMovie = store.delMovie;

var films = [];

for (let x = 0; x < 24; x++) {
    let film = {
        imageURL: 'https://image.tmdb.org/t/p/w300/45Y1G5FEgttPAwjTYic6czC9xCn.jpg',
        title: 'Loganz',
        release: '2017'
    };
    films.push(film);
}

class Row extends React.Component {
    render () {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}

 
class Movies extends React.Component {
    
    render () {
        return (
            <div>
                <Row>
                    <Page media={films} del={delMovie} />
                </Row>
                <Row>
                    <FAB />
                </Row>
                <AddItem add={addMovie}/>
            </div>
        )
    }
};

module.exports = Movies;