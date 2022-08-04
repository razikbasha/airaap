import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Results from './screens/results';
import MyStack from './navigation';


const App = () => {
  return (
   
      
      <NavigationContainer>
        <MyStack></MyStack>
        </NavigationContainer>
 
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    paddingHorizontal:16,
  },
})