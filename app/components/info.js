import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', data: [], icon: '' }
    }

    componentDidMount () {
        let type = this.props.route.path;
        let title = '', data = [], icon = '';

        if (type.includes("movies")) {
            title = "Movies";
            data = this.props.movies;
            icon = 'movie';
        } else if (type.includes("tvshows")) {
            title = "TV Shows";
            data = this.props.tvshows;
            icon = 'tv';
        } else if (type.includes("books")) {
            title = "Books";
            data = this.props.books;
            icon = 'book';
        }

        this.setState({
            title: title,
            data: data,
            icon: icon
        });
    }

    render () {
        console.log(this.props);

        let count = this.state.data.length;
        
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>{this.state.title}</h4></li>
                        <li className="collection-item"><div>{count}<a href="#!" className="secondary-content"><i className="material-icons">{this.state.icon}</i></a></div></li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}