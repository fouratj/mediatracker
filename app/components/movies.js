var React = require('react');
// COMPONENTS
var Page = require('./page');
var FAButton = require('./FAButton'); //Fixed Action Button
var AddItem = require('./modal'); //MODAL for adding movie
var Row = require('./row');
// /COMPONENTS

class Movies extends React.Component {

    render () {
        return (
            <div>
                <Row>
                    <Page media={this.props.movies} />
                </Row>
                <Row>
                    <FAButton />
                </Row>
                <AddItem add={this.props.addMovie}/>
            </div>
        )
    }
};

module.exports = Movies;