var React = require('react');
var ReactDOM = require('react-dom');

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
        
        if (e.target.checked) {
            //this.props.add(this.props.result);
        }
        
        setTimeout(() => {
            $('img').matchHeight();
            $($this[0]).hide();
        }, 50);

        let url = this.props.url;
        
        let getFullInfo = $.get(url, { 'target': this.props.result.id}, function (data) {
                let res = JSON.parse(data);
                
                let item = {
                    id: res.id,
                    poster: res.poster_path,
                    released: res.release_date,
                    title: res.title,
                    runtime: res.runtime,
                    synopsis: res.overview,
                    count: 1,
                    createdBy: ''
                };

                self.props.add(item);
                
            
                $('img').matchHeight();
                $($this[0]).hide();
                
            
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

class BottomModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        var $this = $(ReactDOM.findDOMNode(this));
        $($this[0]).modal();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.results.length > 0)
        return true;
    }

    render () {  
        let results = [];
        results = this.props.results.map((result, index) => {
            return  <SearchElement url={this.props.url} checked={false} add={this.props.add} del={this.props.del} result={result} key={index} aKey={index} />
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

module.exports = BottomModal;