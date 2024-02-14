/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ProgressBarAndroidBase,
  SafeAreaView,
} from 'react-native';
import HomeScreen from './src/views/HomeScreen/HomeScreen';


function App(): React.JSX.Element {
  
  return (
    <SafeAreaView >
<HomeScreen/>
      
    </SafeAreaView>
  );
};

export default App;

