import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import store from './redux/store'
import { Provider } from 'react-redux';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './navigation/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </View>
    </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
});
