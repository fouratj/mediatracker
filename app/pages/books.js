var React = require('react');
var Row = require('../components/row');
var Page = require('../components/page');
var FAButton = require('../components/FAButton');
var AddItem = require('../components/modal');

class Books extends React.Component {
    render () {
        return (
            <div>
                <Row>
                    <Page media={this.props.books} />
                </Row>
                <Row>
                    <FAButton />
                </Row>
                <AddItem add={this.props.addBook}/>
            </div>
        )
    }
}

module.exports = Books;