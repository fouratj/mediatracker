import React from 'react';
import ReactDOM from 'react-dom'

// COMPONENTS
import Page from '../components/page';
import FAB from '../components/FAButton';
import SeasonsModal from './seasonsModal';
import { BottomModal } from './bottomModal';
import { AddItem } from '../components/addItemModal';
import { store, updateTitle } from '../store';
// /COMPONENTS

export default class TVShows extends React.Component {

    componentDidMount () {
        store.dispatch(updateTitle("TVSHOWS"));
    }
    render () {
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchShow';
        let urlId = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getShow';

        return (
            <div>
                <div className="row">
                    <Page media={this.props.tvshows} del={this.props.delTVShow} type="tvshows" />
                </div>

                <div className="row">
                    <FAB />
                </div>

                <AddItem add={this.props.addTVShow} del={this.props.delTVShow} addSearch={this.props.addSearch} url={url} />
                
                <BottomModal 
                    type="tvshows"
                    url={urlId} 
                    add={this.props.addTVShow} 
                    del={this.props.delTVShow}
                    addSeasons={this.props.addSeasons}
                    results={this.props.results} />

                <SeasonsModal
                    add={this.props.addTVShow}
                    
                    seasons={this.props.seasons} />
            </div>
        )
    }
};