import React from 'react';
import ReactDOM from 'react-dom';

class SearchElement extends React.Component {

    constructor (props) {
        super(props)
        this.state = { isChecked: this.props.checked}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        var $this = $(ReactDOM.findDOMNode(this));
        var self = this;
        this.setState({
            isChecked: e.target.checked
        });
                
        setTimeout(() => {
            $('img').matchHeight();
            $($this[0]).hide();
        }, 50);

        let url = this.props.url;
        self.props.add(this.props.season);
    }

    render () {
    
        return (
            <li className="collection-item avatar" id={this.props.aKey + 'result'} key={this.props.aKey}>
                <img alt className="circle" src={this.props.season.poster} />
                <p className="flow-text"> {this.props.season.title} </p>
                <p> {this.props.season.released}</p>
                <p className="secondary-content">
                    <input type="checkbox" onChange={this.handleChange} id={this.props.aKey} checked={this.state.isChecked} />
                    <label htmlFor={this.props.aKey}></label>
                </p>
            </li>
        )
    }
}

export default class SeasonsModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        var $this = $(ReactDOM.findDOMNode(this));
        $($this[0]).modal();
    }

    render () {  
        let seasons = [];
        console.log(this.props.seasons)
        seasons = this.props.seasons.map((season, index) => {
            return  <SearchElement  
                        checked={false} 
                        add={this.props.add} 
                        season={season} 
                        key={index}
                        aKey={index}
                        addSeasons={this.props.addSeasons} />
        });
        
        return (
            <div id="seasonsModal" className="modal bottom-sheet">
                <div className="modal-content">
                    <h2 className="center">Pick a season</h2>
                    <div className="row">
                        <div className="col s12">
                            <ul className="collection">
                                {seasons}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}