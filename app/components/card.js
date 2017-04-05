var React = require('react');
var Store = require('../store');

class CardImage extends React.Component {
    render () {
        return (
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={this.props.imageURL} />
            </div>
        )
    }
}

class CardContent extends React.Component {
    render () {
        return (
            <div className="card-content" style={{padding: '0px'}}>
                <ul className="collection with-header" style={{margin: '0px'}}>
                    <li className="collection-item active center-align">{this.props.title}</li>
                    <li className="collection-item center-align">{this.props.release}</li>
                </ul>
            </div>
        )
    }
}

class CardReveal extends React.Component {
    handleDelete (e) {
        console.log('clicked delete')
        e.preventDefault()
        // this.props.del is a callback function to dispatch event to redux 
        Store.store.dispatch(this.props.del(self.props.title));
    }

    render () {
        return (
            <div className="card-reveal">
                <div className="row">
                    <div className="col s12">
                        <span className="card-title grey-text text-darken-4 valign-wrapper">{this.props.title}<i className="material-icons right valign">close</i></span>
                    </div>
                    <div className="col s12">
                        You've watched it X times.
                    </div>
                    <div className="col s12" style={{position: 'fixed', bottom: '0px'}}>
                        <div className="col s6">
                            <a href="#" className="left">
                                <i className="material-icons">
                                    replay
                                </i>
                            </a>
                        </div>
                        <div className="col s6">
                            <a href="#" className="right" onClick={this.handleDelete.bind(this)}>
                                <i className="material-icons">
                                    delete
                                </i>
                            </a>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

class Card extends React.Component {
    render () {
        return (
            <div className="col s6 m4 l3">
                <div className="card">
                    <CardImage imageURL={this.props.item.imageURL}/>
                    <CardContent title={this.props.item.title} release={this.props.item.release} />
                    <CardReveal title={this.props.item.title} del={this.props.del} />
                </div>
            </div>
        )
    }
}

module.exports = Card;