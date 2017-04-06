var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Card = require('../components/card');
var Page = require('../components/page');
var FAButton = require('../components/FAButton'); //Fixed Action Button
var AddItem = require('../components/modal'); //MODAL for adding movie
var Row = require('../components/row');
// /COMPONENTS


class TVShows extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render () {
        console.log(this.props)
        return (
            <div>
                <Row>
                    <Page media={this.props.tvshows} />
                </Row>
                <Row>
                    <FAButton />
                </Row>
                <AddItem add={this.props.addTVShow}/>
            </div>
        )
    }
};

module.exports = TVShows;