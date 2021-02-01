/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/Screens/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Home snapshot',() =>{
    const snap = renderer.create(
        <Home/>
    ).toJSON()
    expect(snap).toMatchSnapshot();
})