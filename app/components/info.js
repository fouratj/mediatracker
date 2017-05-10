import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', data: [] }
    }

    componentWillMount () {
        let type = this.props.route.path;
        let title = '', data = [];

        if (type.includes("movies")) {
            title = "Movies";
            data = this.props.movies;
        } else if (type.includes("tvshows")) {
            title = "TV Shows";
            data = this.props.tvshows;
        } else if (type.includes("books")) {
            title = "Books";
            data = this.props.books;
        }

        this.setState({
            title: title,
            data: data
        });
    }

    render () {
        console.log(this.props);
        
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Movies</h4></li>
                        
                        
                        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>

                    </ul>
                </div>
            </div>
        )
    }
}