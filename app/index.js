import React from 'react';
import ReactDOM from 'react-dom';
import { routes } from './config/routes';
import { auth } from './firebase';

ReactDOM.render(
    routes,
    document.getElementById('app')
);