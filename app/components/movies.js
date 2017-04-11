var React = require('react');
// COMPONENTS
var Page = require('./page');
var FAButton = require('./FAButton'); //Fixed Action Button
var AddItem = require('./addItemModal'); //MODAL for adding movie
var BottomModal = require('./bottomModal');
// /COMPONENTS

class Movies extends React.Component {

    render () {
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchMovie';
        let urlId = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getMovie';
        return (
            <div className="row">
                
                <Page 
                    media={this.props.movies}
                    del={this.props.delMovie}
                    index={this.props.index} 
                    updateIndex={this.props.updateIndex}
                    type="movies" />

                <FAButton />

                <AddItem 
                    add={this.props.addMovie} 
                    addSearch={this.props.addSearch} 
                    url={url} />

                <BottomModal 
                    add={this.props.addMovie} 
                    del={this.props.delMovie} 
                    url={urlId}
                    results={this.props.results} />

            </div>
        )
    }
};

module.exports = Movies;