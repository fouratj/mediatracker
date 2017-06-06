import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', data: [], icon: '', descriptor: '', count: 0, total: 0 }
    }

    shouldComponentUpdate () {
        console.log('info updated');
        return true;
    }

    componentWillMount () {
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

        let count = data.length;
        let total = data
                        .map(item => ( item.runtime ))
                        .reduce((pre, curr) => ( pre + curr), 0);

        this.setState({
            title: title,
            data: data,
            icon: icon,
            descriptor: descriptor,
            count: count,
            total: total
        });
    }

    render () {
        

        
        
        return (
            <div className="row">
                <div className="col s12">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>{this.state.title}</h4></li>
                        <li className="collection-item">
                            <div>{this.state.count} {this.state.icon + 's'}
                                <a href="#!" className="secondary-content">
                                    <i className="material-icons">{this.state.icon}</i>
                                </a>
                            </div>
                        </li>
                         <li className="collection-item">
                            <div>{this.state.total} {this.state.descriptor}
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