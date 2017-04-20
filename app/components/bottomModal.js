
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
            // $('img').matchHeight();
            $($this[0]).hide();
        }, 50);

        let url = this.props.url;
        
        let getFullInfo = $.get(url, { 'target': this.props.result.id}, function (data) {
                let res = JSON.parse(data);
                if (self.props.type === "tvshows") {
                    self.props.addSeasons(res)
                } else {
                    self.props.add(res);
                }
                

                
                // $('img').matchHeight();
                // $($this[0]).hide();
                $('#bottomModal').modal('close');
                $('#seasonsModal').modal('open');
            });
    }

    render () {
        return (
            <li className="collection-item avatar" id={this.props.aKey + 'result'} key={this.props.aKey}>
                <img alt className="circle" src={this.props.result.poster} />
                <p className="flow-text"> {this.props.result.title} </p>
                <p> {this.props.result.released}</p>
                <p className="secondary-content">
                    <input type="checkbox" onChange={this.handleChange} id={this.props.aKey} checked={this.state.isChecked} />
                    <label htmlFor={this.props.aKey}></label>
                </p>
            </li>
        )
    }
}

export class BottomModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        var $this = $(ReactDOM.findDOMNode(this));
        $($this[0]).modal();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render () {  
        let results = [];
        results = this.props.results.map((result, index) => {
            return  <SearchElement 
                        url={this.props.url} 
                        checked={false} 
                        add={this.props.add} 
                        del={this.props.del} 
                        result={result} 
                        key={index} 
                        aKey={index}
                        type={this.props.type}
                        addSeasons={this.props.addSeasons} />
        });
        
        return (
            <div id="bottomModal" className="modal bottom-sheet">
                <div className="modal-content">
                    <h2 className="center">Search Results</h2>
                    <div className="row">
                        <div className="col s12">
                            <ul className="collection">
                                {results}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}