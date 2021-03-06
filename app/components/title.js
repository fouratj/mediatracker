import React from 'react';
import { store, updateTitle } from '../store';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.routeChecker = this.routeChecker.bind(this);
    }

    routeChecker () {
        
    }

    componentWillMount () {
        let title = this.props.route.path.replace(/\//, "").toUpperCase();
        this.props.updateTitle(title);
    }

    render () {
        
        return (
            <div className="row">
                <div className="col s12">
                    <h1 className="rotate">{this.props.title}</h1>
                </div>
            </div>
        )
    }

    componentWillUnmount () {
        
    }
}