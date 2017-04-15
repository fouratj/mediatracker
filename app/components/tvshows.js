var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENTS
var Page = require('../components/page');
var FAButton = require('../components/FAButton'); //Fixed Action Button
var AddItem = require('../components/addItemModal'); //MODAL for adding movie
var Row = require('../components/row');
var BottomModal = require('./bottomModal');
var SeasonsModal = require('./seasonsModal');
var Seasons = SeasonsModal.SeasonsModal;
// /COMPONENTS


class TVShows extends React.Component {
    render () {
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchShow';
        let urlId = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getShow';

        return (
            <div>
                <Row>
                    <Page media={this.props.tvshows} del={this.props.delTVShow} type="tvshows" />
                </Row>

                <Row>
                    <FAButton />
                </Row>

                <AddItem add={this.props.addTVShow} del={this.props.delTVShow} addSearch={this.props.addSearch} url={url} />
                
                <BottomModal 
                    type="tvshows"
                    url={urlId} 
                    add={this.props.addTVShow} 
                    del={this.props.delTVShow}
                    addSeasons={this.props.addSeasons}
                    results={this.props.results} />

                <Seasons
                    add={this.props.addTVShow}
                    
                    seasons={this.props.seasons} />
            </div>
        )
    }
};

module.exports = TVShows;