import React from 'react';

export default class Title extends React.Component {
    render () {
        console.log('title')
        console.log(this.props.title)
        return (
            <div className="row">
                <div className="col s12">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}