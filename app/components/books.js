import React from 'react';
import Page from '../components/page';
import FAB from '../components/FAButton';
import { AddItem } from '../components/addItemModal';
import { BottomModal } from '../components/bottomModal';
import { store, updateTitle } from '../store';

export default class Books extends React.Component {

    componentDidMount () {
        console.log("titleUpdated Books");
        store.dispatch(updateTitle('BOOKS'));
    }

    render () {
        let url = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/searchBook';
        let urlId = 'https://us-central1-mylifetracker-b6177.cloudfunctions.net/getBook';

        return (
            <div>
                <div className="row">
                    <Page media={this.props.books} del={this.props.delBook} type="books" />
                </div>
                <div className="row">
                    <FAB />
                </div>
                <AddItem 
                    add={this.props.addBook} 
                    del={this.props.delBook} 
                    addSearch={this.props.addSearch} 
                    url={url}
                    message="Search Books" />
                <BottomModal 
                    add={this.props.addBook} 
                    del={this.props.delBook}
                    url={urlId}
                    results={this.props.results} />
            </div>
        )
    }
}