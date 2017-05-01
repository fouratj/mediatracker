import React from 'react';
import { Provider } from 'react-redux';

import { NavWrapper } from './navWrapper';
import { store } from '../store';

export default class Home extends React.Component {

    render () {
        return (
            <Provider store={store}>
                <div>
                    <NavWrapper />
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