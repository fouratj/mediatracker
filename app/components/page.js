var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var store = require('../store');
// var delMovie = store.delMovie;


class Page extends React.Component {


    render () {
        var items = this.props.media.map((media, index) => {
            return <Card key={index} item={media} del={this.props.del} />
        })
        return (
            <div>
                {items}
            </div>
        )
    }
}

module.exports = Page;