var React = require('react');
var ReactDOM = require('react-dom');
// import { store } from '../store';
var Card = require('../components/card');
var Page = require('../components/page');
var FAB = require('../components/fab'); //Fixed Action Button
var store = require('../store');

var films = [];

for (let x = 0; x < 24; x++) {
    let film = {
        imageURL: 'https://image.tmdb.org/t/p/w300/45Y1G5FEgttPAwjTYic6czC9xCn.jpg',
        title: 'Loganz',
        release: '2017'
    };
    films.push(film);
}

class AddItem extends React.Component { 
    componentDidMount() {
        var $this = $(ReactDOM.findDOMNode(this));
        //waits for window to paint modal
        // window.requestAnimationFrame(function() {
            // var node = _this.getDOMNode();
            $($this[0]).modal();
            $('.modal').modal();
        // });

        $this[0].addEventListener('submit', function(e) {
            e.preventDefault();
            //sends user submitted text to redux-state
            store.store.dispatch(store.addMovie(e.target[0].value));

            e.target[0].value = "";
            $($this[0]).modal('close');
        });

    }

    render () {
        return (
            <div id="insert" className="modal">
                <div className="modal-content">
                    <form id="addItem">

                        <div className="row">
                            <div className="input-field col s12">
                                <label className="active" htmlFor="textarea1">Add item</label>
                                <input type="text" className="form-control" id="textarea1" autoComplete="off"></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <button id="saveTask" className="btn waves-effect waves-light right" type="submit" name="action">Save</button>
                            </div>
                        </div>
                    
                    </form>
                    
                </div>
            </div>
        )
    }
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
    modal () {
        console.log('click')
    }
    render () {
        return (
            <div className="">
                <Row>
                    <Page media={films}/>
                </Row>
                <Row>
                    <FAB />
                </Row>
                <AddItem />
            </div>
        )
    }
};

module.exports = Movies;