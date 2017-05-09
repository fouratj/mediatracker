import React from 'react';
import { Link } from 'react-router';

import firebase from 'firebase';
import { signIn, signOut } from '../firebase';
import { resetStateOnSignOut, updateTitle, store } from '../store';

export default class SideNav extends React.Component {
    constructor (props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount () {
        // var $this = $(ReactDOM.findDOMNode(this));
        let signInButton = document.getElementById('sign-in');
        let signOutButton = document.getElementById('sign-out');

        $('.button-collapse').sideNav({
            menuWidth: 100, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                signInButton.setAttribute('hidden', true);
                signOutButton.removeAttribute('hidden');
            } else {
                signOutButton.setAttribute('hidden', true);
                signInButton.removeAttribute('hidden');
                resetStateOnSignOut();
            }
        });

    }

    handleSignIn () {
        signIn()        
    }

    handleSignOut () {
        signOut()        
    }

    render () {
        return (
            <div>
                <ul id="slide-out" className="side-nav fixed teal">
                    <li id="sign-in" onClick={this.handleSignIn}><a href="#">SignIn</a></li>
                    <li hidden id="sign-out" onClick={this.handleSignOut}><a href="#">SignOut</a></li>
                    <li className="no-padding">
                        <ul className="collapsible" data-collapsible="expandable">
                            <li>
                                <Link to="/movies" className="collapsible-header">     
                                    <i className="material-icons right">movie</i><span style={{opacity: '0'}}>|</span> 
                                </Link>
                                <div className="collapsible-body teal darken-1">
                                    <ul>
                                        <li><Link to="/movies/cards"><i className="material-icons right">list</i></Link></li>
                                        <li><Link to="/movies/chart"><i className="material-icons right">show_chart</i></Link></li>
                                        <li><Link to="/"><i className="material-icons right">info</i></Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="no-padding" >
                        <ul className="collapsible" data-collapsible="expandable">
                            <li>
                                <Link to="/tvshows" className="collapsible-header">     
                                    <i className="material-icons right">tv</i><span style={{opacity: '0'}}>|</span> 
                                </Link>
                                <div className="collapsible-body teal darken-1">
                                    <ul>
                                        <li><Link to="/tvshows/cards"><i className="material-icons right">list</i></Link></li>
                                        <li><Link to="/tvshows/chart"><i className="material-icons right">show_chart</i></Link></li>
                                        <li><Link to="/"><i className="material-icons right">info</i></Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="no-padding">
                        <ul className="collapsible" data-collapsible="expandable">
                            <li>
                                <Link to="/books" className="collapsible-header">     
                                    <i className="material-icons right">book</i><span style={{opacity: '0'}}>|</span> 
                                </Link>
                                <div className="collapsible-body teal darken-1">
                                    <ul>
                                        <li><Link to="/books/cards"><i className="material-icons right">list</i></Link></li>
                                        <li><Link to="/books/chart"><i className="material-icons right">show_chart</i></Link></li>
                                        <li><Link to=""><i className="material-icons right">info</i></Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="no-padding">
                        <Link to="/stats">
                            <i className="material-icons right">info</i>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

//<li><Link to="/tvshows/list"><i className="material-icons right">format_list_numbered</i></Link></li>
//<li><Link to="/movies/list"><i className="material-icons right">format_list_numbered</i></Link></li>