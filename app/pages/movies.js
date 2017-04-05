var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Card = require('../components/card');
var Page = require('../components/page');
var FAB = require('../components/fab'); //Fixed Action Button
var AddItem = require('../components/modal'); //MODAL for adding movie
// /COMPONENTS

//STORE & REDUX ACTIONS
var store = require('../store');
var addMovie = store.addMovie;
var delMovie = store.delMovie;



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
    constructor(props) {
        super(props);
        this.state = { movies: [] };
    }

    componentWillMount () {
        this.unsubscribe = store.store.subscribe(() => {
            this.updateMovies(store.store.getState().movies)
        })   
    }

    updateMovies (movies) {
        this.setState({
            movies
        });
    }
    
    render () {
        return (
            <div>
                <Row>
                    <Page media={this.state.movies} del={delMovie} />
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