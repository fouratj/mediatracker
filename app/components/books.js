var React = require('react');
var Row = require('../components/row');
var Page = require('../components/page');
var FAButton = require('../components/FAButton');
var AddItem = require('../components/addItemModal');
var BottomModal = require('../components/bottomModal');

class Books extends React.Component {
    render () {
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchBook';
        return (
            <div>
                <Row>
                    <Page media={this.props.books} del={this.props.delBook} type="books" />
                </Row>
                <Row>
                    <FAButton />
                </Row>
                <AddItem add={this.props.addBook} del={this.props.delBook} addSearch={this.props.addSearch} url={url} />
                <BottomModal add={this.props.addBook} del={this.props.delBook} results={this.props.results} />
            </div>
        )
    }
}

module.exports = Books;