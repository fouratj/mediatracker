var React = require('react');

class Home extends React.Component {
    render () {
        return (
            <div className="container">
                Hello from Home
                {this.props.children}
            </div>
        )
    }
};

module.exports = Home;