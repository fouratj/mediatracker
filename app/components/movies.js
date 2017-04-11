var React = require('react');
// COMPONENTS
var Page = require('./page');
var FAButton = require('./FAButton'); //Fixed Action Button
var AddItem = require('./addItemModal'); //MODAL for adding movie
var BottomModal = require('./bottomModal');
// /COMPONENTS

class Movies extends React.Component {

    render () {
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchMovie'
        return (
            <div>
                <Page media={this.props.movies} del={this.props.delMovie} type="movies"/>

                <FAButton />

                <AddItem add={this.props.addMovie} addSearch={this.props.addSearch} url={url}/>

                <BottomModal add={this.props.addMovie} del={this.props.delMovie} results={this.props.results} />
            </div>
        )
    }
};

module.exports = Movies;