import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class Chat extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.h1, styles.textBlue]}>Chat Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1: {
      fontSize: 20
    },
    textBlue: {color: 'blue' }
  });