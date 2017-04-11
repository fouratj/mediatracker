// var React = require('react');
// var ReactTrend = require('react-trend')
// import Trend from 'react-trend';
import React from 'react';
import Trend from 'react-trend'
// var Trend = ReactTrend.default;

const MyComponent = () => (
  <Trend 
    data={[0, 10, 5, 22, 3.6, 11]} 
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-in"
    />
);

export class Stats extends React.Component {
    render () {
        return (
            <MyComponent />
        )
    }
}

// module.exports = Stats;