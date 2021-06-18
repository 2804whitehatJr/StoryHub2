import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ReadScreen extends React.Component{
  render(){
    return(
      <View style={{backgroundColor: 'white'}}>
      
        <Text style = {{
          backgroundColor:'#2d7cb3', 
          color:'white',
          fontSize:35,
          padding:8,
          fontFamily:'Comic Sans MS',
          textAlign : 'center' }}>
          Story Hub 
        </Text>

        <Image
          source={{
            uri:
              'https://media3.giphy.com/media/Jnf482UXAJ4E1Ojcf2/giphy.gif',
          }}
         style = {{ width: 300, height: 300, margin:15, marginLeft:60 }}
        />
     
        <Text style = {{
          backgroundColor:'#2d7cb3', 
          color:'white',
          fontSize:30,
          padding:8,
          marginLeft:40,
          marginRight:40,
          fontFamily:'Comic Sans MS',
          textAlign : 'center',
          borderRadius:20 }}>
           Read Stories
        </Text>
            </View>
        )
    }
}