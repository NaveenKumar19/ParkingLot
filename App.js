/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Navigation from './src/navigation/nav';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import parkingApp from './src/core_Module/reducers'
import ReduxThunk from 'redux-thunk';


const store = createStore(parkingApp, {}, applyMiddleware(ReduxThunk))


const App =  () => {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
