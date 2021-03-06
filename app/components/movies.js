import React from 'react';
// COMPONENTS
import Page from './page';
import FAB from './FAButton';
import { AddItem } from './addItemModal';
import { BottomModal } from './bottomModal';
import { store, updateTitle } from '../store';
// /COMPONENTS

export default class Movies extends React.Component {

    componentDidMount() {
        console.log("titleUpdated Movies");
        store.dispatch(updateTitle("MOVIES"));
    }

    render () {
        let asList = false;
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchMovie';
        let urlId = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getMovie';
        
        if (this.props.route.path.includes("list")) asList = true;
        
        return (
            <div className="row">
                
                <Page 
                    media={this.props.movies}
                    del={this.props.delMovie}
                    index={this.props.index} 
                    updateIndex={this.props.updateIndex}
                    type="movies"
                    list={asList} />

                <FAB />

                <AddItem 
                    add={this.props.addMovie} 
                    addSearch={this.props.addSearch} 
                    url={url} 
                    message="Search Movie"/>

                <BottomModal 
                    add={this.props.addMovie} 
                    del={this.props.delMovie} 
                    url={urlId}
                    results={this.props.results} />
            </div>
        )
    }
}