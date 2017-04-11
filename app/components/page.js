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
            <div className="row">
                {items}
            </div>
        )
    }

    componentDidMount () {
        // var $this = $(ReactDOM.findDOMNode(this));
        var items = this.props.type;
        console.log(items)
        $('.' + items).matchHeight();
    }
}

module.exports = Page;