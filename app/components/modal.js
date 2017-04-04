var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../store');

class AddItem extends React.Component { 
    componentDidMount() {
        var self = this;
        var $this = $(ReactDOM.findDOMNode(this));
        $($this[0]).modal();

        $this[0].addEventListener('submit', function(e) {
            e.preventDefault();
            store.store.dispatch(self.props.add(e.target[0].value))
            e.target[0].value = "";
            $($this[0]).modal('close');
        });

    }

    render () {
        return (
            <div id="insert" className="modal">
                <div className="modal-content">
                    <form id="addItem">

                        <div className="row">
                            <div className="input-field col s12">
                                <label className="active" htmlFor="textarea1">Add item</label>
                                <input type="text" className="form-control" id="textarea1" autoComplete="off"></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <button id="saveTask" className="btn waves-effect waves-light right" type="submit" name="action">Save</button>
                            </div>
                        </div>
                    
                    </form>
                    
                </div>
            </div>
        )
    }
}

module.exports = AddItem;