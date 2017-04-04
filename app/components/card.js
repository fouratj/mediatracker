var React = require('react');

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
                    <li className="collection-item active">{this.props.title}</li>
                    <li className="collection-item">{this.props.release}</li>
                </ul>
            </div>
        )
    }
}

class CardReveal extends React.Component {
    render () {
        return (
            <div className="card-reveal">
                <div className="row">
                    <div className="col s12">
                        <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons prefix">close</i></span>
                    </div>
                    <div className="col s12">
                        You've watched it X times.
                    </div>
                    <div className="col s12" style={{position: 'fixed', bottom: '0px'}}>
                        <div className="col s6">
                            <a className="left">
                                <i className="material-icons">
                                    replay
                                </i>
                            </a>
                        </div>
                        <div className="col s6">
                            <a className="right">
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
                    <CardReveal title={this.props.item.title} />
                </div>
            </div>
        )
    }
}

module.exports = Card;