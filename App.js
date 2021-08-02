import * as React from 'react';
import { Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import{Header}from 'react-native-elements';
import HomeScreen from './Screens/HomeScreen';
import dictionary from './localdb';

export default class App extends React.Component{
render(){
    return(
  <View style={{flex:1}}>
      <HomeScreen/>
  </View>
    );
}
}
