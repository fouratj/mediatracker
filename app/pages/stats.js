import React from 'react';
import Trend from 'react-trend';
import { CardPanel } from '../components/cardPanel';
import { store, updateTitle } from '../store';

class TrendComponent extends React.Component {
    render () {
        return (
            <Trend 
                data={this.props.data} 
                autoDraw
                autoDrawDuration={1000}
                autoDrawEasing="ease-in"
                />  
        )
    }
}

export class Stats extends React.Component {
    componentDidMount () {
        store.dispatch(updateTitle('STATS'));
    }
    render () {
        return (
            <div className="row">
                <CardPanel stats={this.props.stats.movies} descriptor="watched " type="Movies" />
                <CardPanel stats={this.props.stats.tvshows} descriptor="watched " type="TV Shows" />
                <CardPanel stats={this.props.stats.books} descriptor="read " type="Books" />
            </div>
        )
    }
}

// <TrendComponent data={[0, 10, 5, 22, 3.6, 11]} />