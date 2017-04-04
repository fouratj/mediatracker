var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class SideNav extends React.Component {
    componentDidMount () {
        // var $this = $(ReactDOM.findDOMNode(this));

        window.requestAnimationFrame(function () {
            $('.button-collapse').sideNav({
                menuWidth: 140, // Default is 300
                edge: 'left', // Choose the horizontal origin
                closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true // Choose whether you can drag to open on touch screens
            });
        });

    }

    render () {
        return (
            <div>
                <ul id="slide-out" className="side-nav fixed teal">
                    <li><Link to="/movies" className=""><i className="material-icons right">movie</i></Link></li>
                    <li><Link to="/tvshows"><i className="material-icons right">tv</i></Link></li>
                    <li><Link to="/books"><i className="material-icons right">book</i></Link></li>
                </ul>
                <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            </div>
        )
    }
}

class NavBar extends React.Component {

    render () {
        return (
            <header>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper red center">
                            <a href="#!" className="brand-logo">My Life App</a>
                        </div>
                    </nav>
                    <SideNav />
                </div>
            </header>
        )
    }
}

class Home extends React.Component {

    render () {
        return (
            <div>
                <NavBar />
                <main>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
};

module.exports = Home;