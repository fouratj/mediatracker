var React = require('react');
// COMPONENTS
var Page = require('../components/page');
var FAButton = require('../components/FAButton'); //Fixed Action Button
var AddItem = require('../components/modal'); //MODAL for adding movie
var Row = require('../components/row');
// /COMPONENTS

class Movies extends React.Component {
    constructor(props) {
        super(props);
    }

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