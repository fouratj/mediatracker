import React from 'react';
import SideNav from './sidenav';

export default class NavBar extends React.Component {

    render () {
        return (
            <header>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper red center">
                            <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
                            <a href="#!" className="brand-logo center">{ this.props.title }</a>
                        </div>
                    </nav>
                </div>
                <SideNav />
            </header>
        )
    }
}