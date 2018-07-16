import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// here's a class component declaration
class AlbumList extends Component {
    // default state is gonna be blank!
    state = { albums: [] };
    // we can initialize but not update the state.
    // fired when the component is about to be created.
    componentWillMount() {
        // makes a promise
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />  // need ot have a key when it comes to the map function and arrays.

    );  // map is an array helper. makes the JSON string usable!
    }

    render() {
        console.log(this.state);
        return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
        );
    }
}

export default AlbumList;
