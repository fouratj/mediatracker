// var React = require('react');
import React from 'react';
import Card from './card';
// var Card = require('./card');
import Collection from './collection';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: this.props.index }
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickFwd = this.handleClickFwd.bind(this);
    }

    handleClickBack () {
        if (this.state.index >= 50) {
            let newIndex = this.state.index - 50;
            this.props.updateIndex(newIndex);
            this.setState({
                index: newIndex
            });
        }
    }

    handleClickFwd () {
        let newIndex = this.state.index + 50;
        this.props.updateIndex(newIndex);
        this.setState({
            index: newIndex
        });
    }

    render () {
        return (
            <div className="row">
                <div className="col s6 center">
                    <a onClick={this.handleClickBack} className="waves-effect waves-light btn center"><i className="material-icons left">arrow_back</i></a>
                </div>
                <div className="col s6 center">
                    <a onClick={this.handleClickFwd} className="waves-effect waves-light btn center"><i className="material-icons right">arrow_forward</i></a>
                </div>
            </div>
        )
    }
}

class Page extends React.Component {
    
    render () {
        let items;

        if (!this.props.list) {
            items = this.props.media.map((media, index) => {
                return <Card key={index} item={media} del={this.props.del} classType={this.props.type} />
            });
        } else {
            items = <Collection items={this.props.media} />
        }
        
        return (
            <div>
                {items}
            </div>
        )
    }

}

export default Page;
