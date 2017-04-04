var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../store');

class AddItem extends React.Component { 
    componentDidMount() {
        var $this = $(ReactDOM.findDOMNode(this));
        //waits for window to paint modal
        window.requestAnimationFrame(function() {
            // var node = _this.getDOMNode();
            $($this[0]).modal();
            $('.modal').modal();
        });

        $this[0].addEventListener('submit', function(e) {
            e.preventDefault();
            //sends user submitted text to redux-state
            store.dispatch(movies(e.target[0].value));
            // store.dispatch(cacheTodos())

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