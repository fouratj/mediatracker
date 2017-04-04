var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
//

class Page extends React.Component {
    render () {
        var items = this.props.media.map( (media, index) => {
            return <Card key={index} item={media} />
        })
        return (
            <div>
                {items}
            </div>
        )
    }
}

module.exports = Page;