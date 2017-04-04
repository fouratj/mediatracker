var React = require('react');

class FAB extends React.Component {
    render () {
        return (
            <div className="fixed-action-btn">
                <a id="modalClick" className="btn-floating btn-large waves-effect waves-light blue right" href="#insert">
                    <i className="material-icons">add</i>
                </a>
            </div>
        )
    }
}

module.exports = FAB;