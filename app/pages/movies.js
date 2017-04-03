var React = require('react');
// import { store } from '../store';
// import { Card } from '../components/card';
var Card = require('../components/card');

class Row extends React.Component {
    render () {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}

var film = {
    imageURL: 'https://image.tmdb.org/t/p/w300/45Y1G5FEgttPAwjTYic6czC9xCn.jpg',
    title: 'Loganz',
    release: '2017'
};
 
class Movies extends React.Component {
    render () {
        return (
            <div className="container">
                <Row>
                    <div className="col s4">
                        <Card media={film}/>
                    </div>    
                </Row>
            </div>
        )
    }
};

module.exports = Movies;