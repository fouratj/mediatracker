import React from 'react';
import ReactDOM from 'react-dom';

export class AddItem extends React.Component { 
    componentDidMount() {
        var self = this;
        var $this = $(ReactDOM.findDOMNode(this));
        $($this[0]).modal();
        let url = this.props.url;

        $this[0].addEventListener('submit', function(e) {
            e.preventDefault();
            let post = $.get(url, { 'target': e.target[0].value}, function (data) {
                let res = JSON.parse(data);
                let results = [];

                if (res.total_results > 0 || res.totalItems > 0) {
                    results = res.results || res.items;
                }
                
                self.props.addSearch(results);

                $($this[0]).modal('close');
                $('#bottomModal').modal('open');
                e.target[0].value = ""; //clears modal only on success
            });
        });

    }

    render () {
        return (
            <div id="insert" className="modal">
                <div className="modal-content">
                    <form id="addItem" method="POST">

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
