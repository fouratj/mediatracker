import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', data: [], icon: '', descriptor: '' }
    }

    componentDidMount () {
        let type = this.props.route.path;
        let title = '', data = [], icon = '', descriptor = '';

        if (type.includes("movies")) {
            title = "You've watched";
            data = this.props.movies;
            icon = 'movie';
            descriptor = 'hours of movies.';
        } else if (type.includes("tvshows")) {
            title = "You've watched";
            data = this.props.tvshows;
            icon = 'tv';
            descriptor = 'hours of tv shows';
        } else if (type.includes("books")) {
            title = "You've read";
            data = this.props.books;
            icon = 'book';
            descriptor = 'pages';
        }

        this.setState({
            title: title,
            data: data,
            icon: icon,
            descriptor: descriptor
        });
    }

    render () {
        console.log(this.props);

        let count = this.state.data.length;
        let total = this.state.data.map(item => ( item.runtime ))
                                    .reduce((pre, curr) => ( pre + curr), 0);
        
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>{this.state.title}</h4></li>
                        <li className="collection-item">
                            <div>{count} {this.state.icon + 's'}
                                <a href="#!" className="secondary-content">
                                    <i className="material-icons">{this.state.icon}</i>
                                </a>
                            </div>
                        </li>
                         <li className="collection-item">
                            <div>{total} {this.state.descriptor}
                                <a href="#!" className="secondary-content">
                                    <i className="material-icons">{this.state.icon}</i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}