var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var store = require('../store');

class Page extends React.Component {

    render () {
        console.log(this.props)
        var items = this.props.media.map((media, index) => {
            return <Card key={index} item={media} del={this.props.del} />
        });

        return (
            <div>
                {items}
            </div>
        )
    }
}

module.exports = Page;