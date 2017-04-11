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
        this.setState({
            isChecked: e.target.checked
        });
        
        if (e.target.checked) {
            this.props.add(this.props.result);
        } else {
            this.props.del(this.props.result);
        }
        
        setTimeout(() => {
            $('img').matchHeight();
            $($this[0]).hide();
        }, 50);
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

    componentWillMount () {

    }

    componentDidMount () {
        var $this = $(ReactDOM.findDOMNode(this));
        $($this[0]).modal();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.results.length > 0)
            return true;

        return false;
    }

    render () {  
        let results = [];
        results = this.props.results.map((result, index) => {
            return  <SearchElement checked={false} add={this.props.add} del={this.props.del} result={result} key={index} aKey={index} />
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