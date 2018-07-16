// Import two libraries to help create a component.
import React from 'react';
import { AppRegistry, View } from 'react-native';  // just give me Text from react-native, not the whole darn thing!
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a component
const App = () => (
    // look here, use this flex: 1 thing for the child scroll view to work.
    <View style={{flex: 1}}>   
       <Header headerText={'Albums'} />
       <AlbumList />
    </View>
    );

// Render that component to the device
AppRegistry.registerComponent('albums', () => App);