var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var store = require('../store');

class Button extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col s6 center">
                    <a className="waves-effect waves-light btn center"><i className="material-icons left">arrow_back</i></a>
                </div>
                <div className="col s6 center">
                    <a className="waves-effect waves-light btn center"><i className="material-icons right">arrow_forward</i></a>
                </div>
            </div>
        )
    }
}

class Page extends React.Component {
    
    render () {
        var items = this.props.media.map((media, index) => {
            return <Card key={index} item={media} del={this.props.del} classType={this.props.type} />
        });

        return (
            <div>
                {items}
                <Button />
            </div>
        )
    }

    componentDidMount () {
        // var $this = $(ReactDOM.findDOMNode(this));
        $('img').matchHeight();
    }

    componentDidUpdate () {
        
    }
}

module.exports = Page;