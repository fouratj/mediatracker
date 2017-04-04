var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class FAB extends React.Component {
    render () {
        return (
            <div className="fixed-action-btn">
                <a id="modal" className="btn-floating btn-large waves-effect waves-light blue right" href="#insert">
                    <i className="material-icons">add</i>
                </a>
            </div>
        )
    }
}

module.exports = FAB;