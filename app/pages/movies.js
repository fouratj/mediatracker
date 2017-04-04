var React = require('react');
// import { store } from '../store';
var Card = require('../components/card');
var Page = require('../components/page');
var FAB = require('../components/fab'); //Fixed Action Button

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
            <div className="">
                <Row>
                    <Page media={films}/>
                </Row>
                <Row>
                    <FAB />
                </Row>
            </div>
        )
    }
};

module.exports = Movies;