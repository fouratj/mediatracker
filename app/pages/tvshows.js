var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Card = require('../components/card');
var Page = require('../components/page');
var FAButton = require('../components/FAButton'); //Fixed Action Button
var AddItem = require('../components/modal'); //MODAL for adding movie
var Row = require('../components/row');
// /COMPONENTS

//STORE & REDUX ACTIONS
var store = require('../store');
var addTVShow = store.addTVShow;
var delTVShow = store.delTVShow;


class TVShows extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tvshows: [] };
    }

    componentWillMount () {
        this.unsubscribe = store.store.subscribe(() => {
            this.updateTVShows(store.store.getState().tvshows)
        })   
    }

    updateTVShows (tvshows) {
        this.setState({
            tvshows
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    
    render () {
        return (
            <div>
                <Row>
                    <Page media={this.state.tvshows} del={delTVShow} />
                </Row>
                <Row>
                    <FAButton />
                </Row>
                <AddItem add={addTVShow}/>
            </div>
        )
    }
};

module.exports = TVShows;