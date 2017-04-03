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
                <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
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