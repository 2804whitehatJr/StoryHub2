import React from 'react';
import { StyleSheet, Text, View,
  TextInput, TouchableOpacity, ToastAndroid } from 'react-native';

export default class WriteScreen extends React.Component{
  
  constructor() {
    super();
    this.state = {
      TitleText: "",
      AuthorText: "",
      StoryText: ""
    }
  }

  submitStory = ()=>{
    db.collection("stories").add({
    title: this.state.title,
    author: this.state.author,
    story: this.state.story,
    })
    this.setState({
      title: '',
      author: '',
      story: ''
    })
    ToastAndroid.show('Story Submited', ToastAndroid.SHORT)
  }
    
  render(){
    return(
      <View  style={{backgroundColor: 'white' , height: 500}}>
               
        <Text style = {{
          backgroundColor:'#2d7cb3', 
          color:'white',
          fontSize:35,
          padding:8,
          fontFamily:'Comic Sans MS',
          textAlign : 'center'}}>
          Story Hub 
        </Text>
                
        <TextInput
          style={styles.title}
          placeholder="Story Title"
          onChangeText={(text)=>{
          this.setState({
            TitleText: text
          })}}
          value={this.state.TitleText}/>

        <TextInput
          style={styles.author}
          placeholder="Book Id  "
          onChangeText={(text)=>{
          this.setState({
            AuthorText: text
          })}}
          value={this.state.AuthorText}/>   

        <TextInput
          style={styles.storyText}
          placeholder="Write your story here"
          onChangeText={(text)=>{
          this.setState({
            StoryText: text
          })}}
          multiline={true}
          value={this.state.StoryText}/>

        <TouchableOpacity
          style = {styles.submitButton}
          onPress={this.submitStory}>
          <Text style = {styles.buttonText}> Submit </Text>
        </TouchableOpacity>
        
      </View>
   
    )
  }
}

const styles = StyleSheet.create({
  
  title:{
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    marginTop: 20,
    fontFamily : 'Comic Sans MS',
    borderRadius : 10,
    fontWeight : 'bold',
    padding:5
  },
  author: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    marginTop: 20,
    fontFamily : 'Comic Sans MS',
    borderRadius : 10,
    fontWeight : 'bold',
    padding:5
  },
  storyText: {
    width: '80%',
    alignSelf: 'center',
    height: 200,
    textAlign: 'center',
    borderWidth: 2,
    marginTop: 20,
    fontFamily : 'Comic Sans MS',
    borderRadius : 10,
    fontWeight : 'bold',
    padding:10,
    textAlignVertical:'center'
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      textAlign:'center',
      backgroundColor: '#2d7cb3',
      width: 120,
      height: 45,
      borderRadius : 15,
      borderWidth : 2,
      marginTop:15
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontFamily : 'Comic Sans MS'
  }
  })