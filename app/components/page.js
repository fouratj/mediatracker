var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');


class Page extends React.Component {
    render () {
        var films = this.props.media.map( media => {
            return <Card item={media} />
        })
        return (
            <div>
                {films}
            </div>
        )
    }
}

module.exports = Page;