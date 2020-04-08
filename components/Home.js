import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export class Home extends React.Component {
  render(){
    return (
        <View style={styles.container}>
            <Text style={[styles.h1, styles.textBlue]}>HomePage</Text>
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
      fontSize: 16
    },
    textBlue: {color: 'blue' }
  });

