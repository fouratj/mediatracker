import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Link } from 'react-router';
import { signIn, signOut } from '../firebase';

class SideNav extends React.Component {
    constructor (props) {
        super(props);

        this.handleSignIn = this.handleSignIn.bind(this);
    }
    componentDidMount () {
        // var $this = $(ReactDOM.findDOMNode(this));
        $('.button-collapse').sideNav({
            menuWidth: 140, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

    }

    handleSignIn () {
        var signInButton = document.getElementById('sign-in');
        return new Promise(function (resolve, reject) {
            resolve(signIn())
        }).then(function (res) {
            console.log(res)
            signInButton.setAttribute('hidden', true);
        })
        
    }

    handleSignOut () {
        signOut();
    }

    render () {
        return (
            <div>
                <ul id="slide-out" className="side-nav fixed teal">
                    <li id="sign-in" onClick={this.handleSignIn}><a href="#">Sign In</a></li>
                    <li id="sign-out" onClick={signOut.bind(this)}><a href="#">Sign Out</a></li>
                    <li><Link to="/movies"><i className="material-icons right">movie</i></Link></li>
                    <li><Link to="/tvshows"><i className="material-icons right">tv</i></Link></li>
                    <li><Link to="/books"><i className="material-icons right">book</i></Link></li>
                    
                </ul>
                
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
                            <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
                            <a href="#!" className="brand-logo center">My Life App</a>
                        </div>
                        
                    </nav>
                    
                </div>
                <SideNav />
            </header>
        )
    }
}

export default class Home extends React.Component {

    render () {
        return (
            <Provider store={store}>
                <div>
                    <NavBar />
                    <main>
                        <div className="container">
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </Provider>
        )
    }
};

// module.exports = Home;