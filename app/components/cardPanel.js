import React from 'react';
import ReactDOM from 'react-dom';

export class CardPanel extends React.Component {
    constructor (props) {
        super(props);
        this.state = { timeScale: ''};
    }

    componentWillMount () {

        if (this.props.type === "Books") {
            this.setState({
                timeScale: 'pages'
            });
        } else {
            this.setState({
                timeScale: 'hours'
            });
        }
    }

    render () {
        return (
                <div className="col s12 m4">
                    <div className="card card-panel teal">
                        <div className="card-content">
                            <span className="card-title white-text">
                                {this.props.type}
                            </span>
                            <span className="white-text">
                                You've {this.props.descriptor} {this.props.stats.count} {this.props.type.toLowerCase()}.
                            </span>
                        </div>
                        <div className="card-action">
                            <span className="white-text">
                                That's about { (this.props.stats.total / 60).toFixed(0)} {this.state.timeScale}...
                            </span>
                        </div>
                    </div>
                </div>
            )
    }
}