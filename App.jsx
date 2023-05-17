import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Navigation from './src/navigation/Navigation.jsx';
import {store} from './src/store/store.js';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>

      <Navigation />
    </Provider>
    
  );
};

export default App;

const styles = StyleSheet.create({});
