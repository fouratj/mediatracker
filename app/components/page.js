var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var store = require('../store');

class Page extends React.Component {
    
    render () {
        var items = this.props.media.map((media, index) => {
            return <Card key={index} item={media} del={this.props.del} classType={this.props.type} />
        });

        return (
            <div >
                {items}
            </div>
        )
    }

    componentDidMount () {
        // var $this = $(ReactDOM.findDOMNode(this));
        $('.' + this.props.type).matchHeight();
    }
}

module.exports = Page;