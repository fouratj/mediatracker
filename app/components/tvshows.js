var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Card = require('../components/card');
var Page = require('../components/page');
var FAButton = require('../components/FAButton'); //Fixed Action Button
var AddItem = require('../components/addItemModal'); //MODAL for adding movie
var Row = require('../components/row');
var BottomModal = require('../components/bottomModal');
// /COMPONENTS


class TVShows extends React.Component {
    render () {
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchShow';
        return (
            <div>
                <Row>
                    <Page media={this.props.tvshows} del={this.props.delTVShow} type="tvshows" />
                </Row>
                <Row>
                    <FAButton />
                </Row>
                <AddItem add={this.props.addTVShow} del={this.props.delTVShow} addSearch={this.props.addSearch} url={url} />
                <BottomModal add={this.props.addTVShow} del={this.props.delTVShow} results={this.props.results} />
            </div>
        )
    }
};

module.exports = TVShows;