import React from 'react';
import { Text, View, TextInput, StyleSheet, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

export class Home extends React.Component {
  
  state = {
    user: '',
    room: ''
  }

  handleUserChange = user => {
    this.setState({user});
  }
  handleRoomChange = room => {
    this.setState({room});
  }
  handleChatPress = e => {
    const {user,room} = this.state;
    Actions.chat({user, title: `Salon "${room}" `})
  }

  render(){
    const{ user } = this.state;

    return (
        <View style={styles.container}>
            <Text style={[styles.h1, styles.textBlue]}>SAAAAAALUSSSS</Text>
            <TextInput
              value={user}
              onChangeText={this.handleUserChange}
              style={styles.input}
              placeholder="Username"
            />
            <TextInput
              value={user}
              onChangeText={this.handleRoomChange}
              style={styles.input}
              placeholder="Salon de chat"
            />
            <Button
              title="Chat"
              onPress ={() => {
                Actions.chat({ user, title: "Chat" })
              }              }
              style={styles.button}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#140040',
      alignItems: 'center',
      justifyContent: 'center',
      padding:8
    },
    h1: {
      fontSize: 20,
      fontFamily: 'Roboto'
    }, 
    textBlue: {color: 'white' },
    input:{
      backgroundColor:"white",
      borderWidth: 3,
      borderColor: "black",
      borderStyle: "solid",
      margin: 8,
      width: '100%',
      padding: 4
    }
  });

